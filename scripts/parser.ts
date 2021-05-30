import path from "path";
import fs from "fs";
const rootDir = path.resolve(__dirname, "../");
import prettier from "prettier";
import { getCountTableStr } from "./analysis";
import { questions, LEETCODE_ORIGIN } from "../configs";
import { readmePath, templatePath } from "../configs/path_config";

const SOLUTION_DIR_NAME = "algorithms";
const CPP_DIR_NAME = "cpp";
const JS_DIR_NAME = "js";
const GOLANG_DIR_NAME = "golang";
const RUST_DIR_NAME = "rs";

const leetcodeDir = path.resolve(rootDir, SOLUTION_DIR_NAME);

const CPP_DIR = path.resolve(rootDir, leetcodeDir, CPP_DIR_NAME);
const JAVASCRIPT_DIR = path.resolve(rootDir, leetcodeDir, JS_DIR_NAME);
const GOLANG_DIR = path.resolve(rootDir, leetcodeDir, GOLANG_DIR_NAME);
const RUST_DIR = path.resolve(rootDir, leetcodeDir, RUST_DIR_NAME);

interface SolutionSet {
  title: string;
  url: string;
  solutions: Solution[];
}
interface Solution {
  type: string;
  filename: string;
  url: string;
}
const languageConfig = {
  "C++": {
    title: "C++",
    baseDir: CPP_DIR,
    relativeDir: `./${SOLUTION_DIR_NAME}/${CPP_DIR_NAME}`,
    suffix: ["cpp"],
  },
  javascript: {
    title: "javascript",
    baseDir: JAVASCRIPT_DIR,
    relativeDir: `./${SOLUTION_DIR_NAME}/${JS_DIR_NAME}`,
    suffix: ["js"],
  },
  golang: {
    title: "golang",
    baseDir: GOLANG_DIR,
    relativeDir: `./${SOLUTION_DIR_NAME}/${GOLANG_DIR_NAME}`,
    suffix: ["go"],
  },
  rust: {
    title: "rust",
    baseDir: RUST_DIR,
    relativeDir: `./${SOLUTION_DIR_NAME}/${RUST_DIR_NAME}`,
    suffix: ["rs"],
  },
};

const parse2info = (filename: string) => {
  const arr = filename.split(".");
  const no = arr[0];
  const suffix = arr[arr.length - 1];
  const name = arr.slice(1, arr.length - 1).join(".");
  const type = Object.values(languageConfig).find((item) =>
    item.suffix.includes(suffix)
  )!.title;
  return [no, name, suffix, type];
};

const getSolutioins = () => {
  const solutions = <{ [id: string]: SolutionSet }>{};
  Object.entries(languageConfig).forEach(([key, cfg]) => {
    const files = fs
      .readdirSync(cfg.baseDir)
      .filter(
        (filePath) => !!cfg.suffix.find((suffix) => filePath.endsWith(suffix))
      );
    files.map(parse2info).forEach(([id, name, suffix, type]) => {
      if (!solutions[id]) {
        const question = questions[<keyof typeof questions>id];
        solutions[id] = {
          title: question.title,
          url: LEETCODE_ORIGIN + "/problems/" + question.titleSlug,
          solutions: [],
        };
      }
      const solution = {
        type: cfg.title,
        filename: name,
        url: `${cfg.relativeDir}/${id}.${name}.${suffix}`,
      };
      solutions[id].solutions.push(solution);
    });
  }, {});
  return solutions;
};

const getTemp = (templateFullPath: string) => {
  const data = fs.readFileSync(templateFullPath);
  return data.toString();
};

const generateReadme = (readmeFullPath: string, markdownStr: string) => {
  fs.writeFileSync(readmeFullPath, markdownStr);
};

const generateTable = (solutions: { [id: string]: SolutionSet }) => {
  const tables = [];
  const header = [`#### 详情\n|#|Title|Solution|Difficulty`];
  const divider = [`|---|---|---|---|`];
  const solutionToLabel = (solution: Solution) => {
    return `[${solution.type}](${solution.url})`;
  };
  tables.push(header, divider);
  Object.entries(solutions).forEach(([id, problem]) => {
    const langs = problem.solutions.map(solutionToLabel).join(", ");
    const level = questions[<keyof typeof questions>id].level;
    const row = `| ${id} | [${problem.title}](${problem.url}) | ${langs} | ${level} |`;
    tables.push(row);
  });
  return tables.join("\n");
};
const app = async () => {
  const solutions = getSolutioins();
  const TemplateStr = getTemp(templatePath);
  const solutionsTable = generateTable(solutions);
  const countTableStr = await getCountTableStr();
  const formatted = prettier.format(
    TemplateStr + countTableStr + solutionsTable,
    {
      parser: "markdown",
    }
  );
  generateReadme(readmePath, formatted);
};

app();
