/*
 * @Author: Samuel Chia
 * @Date: 2020-12-03 15:18:58
 * @Last Modified by: Samuel Chia
 * @Last Modified time: 2020-12-08 14:01:34
 */
import path from "path";
const rootDir = path.resolve(__dirname, "../");

const SOLUTION_DIR_NAME = "algorithms";
const CPP_DIR_NAME = "cpp";
const JS_DIR_NAME = "js";

const leetcodeDir = path.resolve(rootDir, SOLUTION_DIR_NAME);
const publicDir = path.resolve(rootDir, "public");

const CPP_DIR = path.resolve(rootDir, leetcodeDir, CPP_DIR_NAME);
const JAVASCRIPT_DIR = path.resolve(rootDir, leetcodeDir, JS_DIR_NAME);

export const questions = require("../cache/leetcode.json");

export const SOLUTION_DIRS = [CPP_DIR, JAVASCRIPT_DIR];
