/*
 * @Author: Samuel Chia
 * @Date: 2020-12-03 15:16:20
 * @Last Modified by: Samuel Chia
 * @Last Modified time: 2020-12-08 23:04:08
 */

import { LanguageType } from "../configs";
import { SOLUTION_DIRS } from "../configs/path_config";
import { Solution } from "./Solution";
import { promises as fsp } from "fs";

/**
 * 统计行类型
 */
type CountRow = {
  lang: LanguageType;
  difficulty: string;
  count: number;
};
type Hash = {
  [lang in LanguageType]: Pick<CountRow, "count" | "difficulty">[];
};

/**
 * @description 生成
 */
const generateCountTable = (list: CountRow[]) => {
  const title = `\n#### 统计\n`;
  const hash = list.reduce<Hash>((hub, { lang, ...props }) => {
    hub[lang] = hub[lang] || [];
    hub[lang].push(props);
    return hub;
  }, <Hash>{});
  let rowCode = `<table>\n<thead><tr><td>languages</td><td>Difficulty</td><td>count</td><td>total</td></tr></thead>\n`;
  rowCode += `<tbody>\n`;
  Object.entries(hash).forEach(([lang, rows]) => {
    rowCode += `<tr>\n\t<td rowspan=${rows.length}>${lang}</td>\n`;
    let total = rows.reduce((acc, row) => (acc += row.count), 0);
    rows.forEach((row, i) => {
      rowCode +=
        (i === 0 ? `` : `<tr>\n`) +
        `\t<td>${row.difficulty}</td>\n\t<td>${row.count}</td>` +
        (i === 0 ? `<td rowspan=${rows.length}>${total}</td>` : "") +
        `\n</tr>\n`;
    });
    rowCode += `</tr>`;
  });
  rowCode += `\n</tbody>\n</table>\n\n`;
  return title + rowCode;
};

type Counter = {
  [k in LanguageType]: {
    [k: string]: number;
  };
};
export const getCountTableStr = async () => {
  const fileRes = await Promise.all(
    SOLUTION_DIRS.map((dir) => fsp.readdir(dir))
  );
  const files = fileRes.flat();
  const solutions = files.map((filename) => new Solution(filename));
  const counter: Counter = <Counter>{};
  solutions.forEach((solution) => {
    const { language, difficulty } = solution;
    const hub = (counter[language] = counter[language] || {});
    hub[difficulty] = hub[difficulty] || 0;
    hub[difficulty]++;
  });

  const list: CountRow[] = <CountRow[]>[];

  Object.keys(counter).forEach((lang) => {
    const langHub = counter[<LanguageType>lang];
    Object.keys(langHub).forEach((difficulty) =>
      list.push(<CountRow>{
        lang,
        difficulty,
        count: langHub[<LanguageType>difficulty],
      })
    );
  });

  const tableStr = generateCountTable(list);
  return tableStr;
};
