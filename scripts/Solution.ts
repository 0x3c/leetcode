/*
 * @Author: Samuel Chia
 * @Date: 2020-12-03 15:46:05
 * @Last Modified by: Samuel Chia
 * @Last Modified time: 2020-12-07 15:52:41
 */
import questions from "../cache/leetcode.json";
import { languages, LanguageType, LEETCODE_ORIGIN } from "../configs";

type QuestionId = keyof typeof questions;

export class Solution {
  /**
   * @description 文件名
   */
  filename: string;
  /**
   * @description 文件路径
   */
  path: string;
  /**
   * @description 题目 Id
   */
  solutionId: QuestionId;
  /**
   * @description 文件后缀
   */
  suffix: string;
  /**
   * @description 语言
   */
  language: LanguageType;
  /**
   * @description 信息
   */
  info: any;
  /**
   * @description 题目链接
   */
  link: string;
  /**
   * @description 题目难易度
   */
  difficulty: string;

  constructor(filename: string) {
    this.filename = filename;
    this.path = filename;
    const splits = filename.split(".");
    this.solutionId = <QuestionId>splits[0];
    this.suffix = splits[splits.length - 1];
    this.language = this.getLanguage(this.suffix);

    this.difficulty = questions[this.solutionId].level;
    this.info = questions[this.solutionId];
    this.link =
      LEETCODE_ORIGIN + "/problems/" + questions[this.solutionId].titleSlug;
  }

  log = () => {
    console.log("filename: " + this.filename);
    console.log("solutionId: " + this.solutionId);
    console.log("suffix: " + this.suffix);
  };

  /**
   * @description 获取当前答案所使用的的语言
   */
  getLanguage = (suffix: string): LanguageType => {
    const langs: LanguageType[] = <any>Object.keys(languages);
    const lang = langs.find((language) =>
      languages[language].suffix.includes(suffix)
    );
    if (lang) return lang;
    throw new Error("未配置的语言");
  };
}
