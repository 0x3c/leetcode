/*
 * @Author: Samuel Chia
 * @Date: 2020-12-03 15:18:58
 * @Last Modified by: Samuel Chia
 * @Last Modified time: 2020-12-03 15:22:52
 */
const path = require("path");
const rootDir = path.resolve(__dirname, "../");

const SOLUTION_DIR_NAME = "algorithms";
const CPP_DIR_NAME = "cpp";
const JS_DIR_NAME = "js";

const leetcodeDir = path.resolve(rootDir, SOLUTION_DIR_NAME);
const publicDir = path.resolve(rootDir, "public");

const CPP_DIR = path.resolve(rootDir, leetcodeDir, CPP_DIR_NAME);
const JAVASCRIPT_DIR = path.resolve(rootDir, leetcodeDir, JS_DIR_NAME);

const questions = require("../cache/leetcode.json");

const SOLUTION_DIRS = [CPP_DIR, JAVASCRIPT_DIR];

module.exports = {
  SOLUTION_DIRS,
};
