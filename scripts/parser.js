const path = require("path");
const fs = require("fs");
const rootDir = path.resolve(__dirname, "../");
const prettier = require("prettier");

const leetcodeDir = path.resolve(rootDir, "algorithms");
const publicDir = path.resolve(rootDir, "public");

const templatePath = path.resolve(publicDir, "template.md");
const readmePath = path.resolve(rootDir, "README.md");

const getTemp = templatePath => {
  const data = fs.readFileSync(templatePath);
  return data.toString();
};
const parseName = filename => {
  const arr = filename.split(".");
  const no = arr[0];
  const suffix = arr[arr.length - 1];
  const name = arr.slice(1, arr.length - 1).join(".");
  return [no, name, suffix];
};

const generateMdTable = dataList => {
  const str = [];
  const header = [`|#|Title|`];
  const divider = [`|---|---|`];
  const content = dataList.map(item => {
    const order = `[${item[0]}](/algorithms/${item.join(".")})`;
    const title = `[${item[1]}](/algorithms/${item.join(".")})`;
    return `|${order}|${title}|`;
  });
  str.push(header, divider, ...content);
  return str.join("\n");
};

const generateReadmeStr = leetcodeDir => {
  const files = fs.readdirSync(leetcodeDir);
  const infoList = files.map(parseName).sort((a, b) => a[0] - b[0]);
  const tempStr = getTemp(templatePath);
  const table = generateMdTable(infoList);
  const readmeContent = tempStr + table;
  return readmeContent;
};

const generateReadme = (readmePath, data) => {
  fs.writeFileSync(readmePath, data);
};
const app = () => {
  let readmeContent = generateReadmeStr(leetcodeDir);
  const formatted = prettier.format(readmeContent, { parser: "markdown" });
  generateReadme(readmePath, formatted);
};

app();
