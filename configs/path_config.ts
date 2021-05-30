/*
 * @Author: Samuel Chia
 * @Date: 2020-12-03 15:18:58
 * @Last Modified by: Samuel Chia
 * @Last Modified time: 2020-12-08 14:05:18
 */
import path from "path";
const rootDir = path.resolve(__dirname, "../");

const SOLUTION_DIR_NAME = "algorithms";
const CPP_DIR_NAME = "cpp";
const JS_DIR_NAME = "js";
const GOLANG_DIR_NAME = "golang";
const RUST_DIR_NAME = "rs";

const leetcodeDir = path.resolve(rootDir, SOLUTION_DIR_NAME);
const publicDir = path.resolve(rootDir, "public");

const CPP_DIR = path.resolve(rootDir, leetcodeDir, CPP_DIR_NAME);
const JAVASCRIPT_DIR = path.resolve(rootDir, leetcodeDir, JS_DIR_NAME);
const GOLANG_DIR = path.resolve(rootDir, leetcodeDir, GOLANG_DIR_NAME);
const RUST_DIR_NAME_DIR = path.resolve(rootDir, leetcodeDir, RUST_DIR_NAME);

export const templatePath = path.resolve(publicDir, "template.md");
export const readmePath = path.resolve(rootDir, "README.md");

export const SOLUTION_DIRS = [
  CPP_DIR,
  JAVASCRIPT_DIR,
  GOLANG_DIR,
  RUST_DIR_NAME_DIR,
];
export const STORAGE_PATH = path.resolve(
  __dirname,
  "../",
  "cache",
  "leetcode.json"
);
