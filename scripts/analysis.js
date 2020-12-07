/*
 * @Author: Samuel Chia
 * @Date: 2020-12-03 15:16:20
 * @Last Modified by: Samuel Chia
 * @Last Modified time: 2020-12-04 16:02:10
 */

const Solution = require("./Solution");
const fs = require("fs").promises;

const { SOLUTION_DIRS } = require("./config");

function CountColumn(lang, difficulty, count) {
  this.lang = lang;
  this.difficulty = difficulty;
  this.count = count;
}
/**
 *
 * @param {CountColumn[]} list
 */
const generateCountTable = (list) => {
  const title = `\n#### 统计\n`;
  const hash = list.reduce((hash, { lang, ...props }) => {
    hash[lang] = hash[lang] || [];
    hash[lang].push(props);
    return hash;
  }, {});
  let rowCode = `<table>\n<thead><tr><td>languages</td><td>Difficulty</td><td>count</td></tr></thead>\n`;
  rowCode += `<tbody>\n`;
  Object.entries(hash).forEach(([lang, rows]) => {
    rowCode += `<tr>\n\t<td rowspan=${rows.length}>${lang}</td>\n`;
    rows.map((row, i) => {
      rowCode +=
        (i === 0 ? `` : `<tr>\n`) +
        `\t<td>${row.difficulty}</td>\n\t<td>${row.count}</td>\n</tr>\n`;
    });
    rowCode += `</tr>`;
  });
  rowCode += `\n</tbody>\n</table>\n\n`;
  return title + rowCode;
};

const getCountTableStr = async () => {
  const fileRes = await Promise.all(
    SOLUTION_DIRS.map((dir) => fs.readdir(dir))
  );
  const files = fileRes.flat();
  const solutions = files.map((filename) => new Solution(filename));
  const counter = {};
  solutions.forEach((solution) => {
    const { language, difficulty } = solution;
    const hub = (counter[language] = counter[language] || {});
    hub[difficulty] = hub[difficulty] || 0;
    hub[difficulty]++;
  });

  const list = [];

  Object.keys(counter).forEach((lang) => {
    const langHub = counter[lang];
    Object.keys(langHub).map((difficulty) =>
      list.push({ lang, difficulty, count: langHub[difficulty] })
    );
  });

  const tableStr = await generateCountTable(list);
  return tableStr;
};

module.exports = { getCountTableStr };
