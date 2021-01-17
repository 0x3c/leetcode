export const LEETCODE_ORIGIN = "https://leetcode-cn.com";
export const LEETCODE_PROBLEMS_URL = "https://leetcode-cn.com/api/problems/all";
export const languages = {
  javascript: {
    suffix: ["js"],
  },
  cpp: {
    suffix: ["cpp", "cc"],
  },
  golang: {
    suffix: ["go"],
  },
};
export { default as questions } from "../cache/leetcode.json";

export type LanguageType = keyof typeof languages;
