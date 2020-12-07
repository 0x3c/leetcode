/*
 * @Author: Samuel Chia
 * @Date: 2020-12-03 15:46:05
 * @Last Modified by: Samuel Chia
 * @Last Modified time: 2020-12-07 13:42:39
 */
// import questions from "../cache/leetcode.json";
import questions from "../cache/leetcode";

const LEETCODE_ORIGIN = "https://leetcode-cn.com";
const LANGUAGE_UNKNOW = "unknow";
import ISolution, { SolutionConstructor } from "./Solution.d";

const languages = {
  javascript: {
    suffix: ["js"],
  },
  cpp: {
    suffix: ["cpp", "cc"],
  },
};

class S1 implements ISolution {
  filename = "";
  path = "";
  solutionId = "";
  suffix = "";
  language = "";
  link = "";
  info = "";
  difficulty = "";
  constructor(props: SolutionConstructor) {
    this.filename = filename;
  }
}

// class Solution {
//   constructor(filename) {
//     this.filename = filename;
//     this.path = filename;
//     const splits = filename.split(".");
//     this.solutionId = splits[0];
//     this.suffix = splits[splits.length - 1];

//     this.language = null;
//     this.difficulty = null;
//     this.info = null;
//     this.link = null;

//     this.init();
//   }
//   log = () => {
//     console.log("filename: " + this.filename);
//     console.log("solutionId: " + this.solutionId);
//     console.log("suffix: " + this.suffix);
//   };

//   init = () => {
//     this.difficulty = questions[this.solutionId].level;
//     this.info = questions[this.solutionId];
//     this.link =
//       LEETCODE_ORIGIN + "/problems/" + questions[this.solutionId].titleSlug;

//     this.language = this.getLanguage(this.suffix);
//   };

//   getLanguage = (suffix) =>
//     Object.keys(languages).find((language) =>
//       languages[language].suffix.includes(suffix)
//     ) || LANGUAGE_UNKNOW;
// }

// module.exports = Solution;
