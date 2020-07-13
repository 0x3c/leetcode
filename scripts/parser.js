const path = require("path");
const fs = require("fs");
const rootDir = path.resolve(__dirname, "../");
const prettier = require("prettier");

const SOLUTION_DIR_NAME = "algorithms";
const CPP_DIR_NAME = "cpp";
const JS_DIR_NAME = "js";

const LEETCODE_ORIGIN = "https://leetcode-cn.com";
const leetcodeDir = path.resolve(rootDir, SOLUTION_DIR_NAME);
const publicDir = path.resolve(rootDir, "public");

const CPP_DIR = path.resolve(rootDir, leetcodeDir, CPP_DIR_NAME);
const JAVASCRIPT_DIR = path.resolve(rootDir, leetcodeDir, JS_DIR_NAME);
const questions = require("../cache/leetcode.json");

const templatePath = path.resolve(publicDir, "template.md");
const readmePath = path.resolve(rootDir, "README.md");

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
};

const parse2info = (filename) => {
  const arr = filename.split(".");
  const no = arr[0];
  const suffix = arr[arr.length - 1];
  const name = arr.slice(1, arr.length - 1).join(".");
  const type = Object.values(languageConfig).find((item) =>
    item.suffix.includes(suffix)
  ).title;
  return [no, name, suffix, type];
};

const getSolutioins = () => {
  const solutions = {};
  Object.entries(languageConfig).reduce((hub, [key, cfg]) => {
    hub[key] = { ...cfg };
    const files = fs
      .readdirSync(cfg.baseDir)
      .filter(
        (filePath) => !!cfg.suffix.find((suffix) => filePath.endsWith(suffix))
      );
    files.map(parse2info).map(([id, name, suffix, type]) => {
      if (!solutions[id]) {
        solutions[id] = {
          title: questions[id].title,
          url: LEETCODE_ORIGIN + "/problems/" + questions[id].titleSlug,
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
    return hub;
  }, {});
  return solutions;
};

const getTemp = (templatePath) => {
  const data = fs.readFileSync(templatePath);
  return data.toString();
};

const generateReadme = (readmePath, markdownStr) => {
  fs.writeFileSync(readmePath, markdownStr);
};

const generateTable = (solutions) => {
  const tables = [];
  const header = [`|#|Title|Solution|Difficulty`];
  const divider = [`|---|---|---|---|`];
  const solutionToLabel = (solution) => {
    return `[${solution.type}](${solution.url})`;
  };
  tables.push(header, divider);
  Object.entries(solutions).forEach(([id, problem]) => {
    const langs = problem.solutions.map(solutionToLabel).join(", ");
    const level = questions[id].level;
    const row = `| ${id} | [${problem.title}](${problem.url}) | ${langs} | ${level} |`;
    tables.push(row);
  });
  return tables.join("\n");
};
const app = () => {
  const solutions = getSolutioins();
  const TemplateStr = getTemp(templatePath);
  const solutionsTable = generateTable(solutions);
  const formatted = prettier.format(TemplateStr + solutionsTable, {
    parser: "markdown",
  });
  generateReadme(readmePath, formatted);
  templatePath;
};

app();
