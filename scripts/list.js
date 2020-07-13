const fetch = require("node-fetch");
const prettier = require("prettier");
const fs = require("fs");
const path = require("path");

const STORAGE_PATH = path.resolve(__dirname, "../", "cache", "leetcode.json");

const state = {
  1: "Easy",
  2: "Medium",
  3: "Hard",
};
const getLeetCodeJson = () =>
  fetch("https://leetcode-cn.com/api/problems/all").then((res) => res.json());

const save2storage = (json) => {
  fs.writeFileSync(STORAGE_PATH, json);
};

const getQuestionHub = (leetcodeJson) => {
  const questions = leetcodeJson.stat_status_pairs;
  return questions.reduce((hub, question) => {
    const {
      frontend_question_id,
      question__title,
      question__title_slug,
    } = question.stat;
    const { level } = question.difficulty;
    hub[frontend_question_id] = {
      id: frontend_question_id,
      title: question__title,
      titleSlug: question__title_slug,
      level: state[level],
    };
    return hub;
  }, {});
};

const app = async () => {
  const json = await getLeetCodeJson();
  const hub = getQuestionHub(json);
  const formatted = prettier.format(JSON.stringify(hub), { parser: "json" });
  save2storage(formatted);
};

app();
