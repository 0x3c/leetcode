import { LEETCODE_PROBLEMS_URL } from "../configs/index";
import fetch from "node-fetch";
import prettier from "prettier";
import fs from "fs";
import { STORAGE_PATH } from "../configs/path_config";

interface LeetCodeRes {
  stat_status_pairs: statStatusPair[];
  [k: string]: any;
}
interface statStatusPair {
  difficulty: {
    level: 1 | 2 | 3;
  };
  stat: {
    frontend_question_id: string;
    is_new_question: boolean;
    question__hide: boolean;
    question__title: string;
    question__title_slug: string;
    question_id: number;
    total_acs: number;
    total_column_articles: number;
    total_submitted: number;
  };
}
interface QuestionHub {
  [k: string]: {
    id: string;
    title: string;
    titleSlug: string;
    level: string;
  };
}
const state = {
  1: "Easy",
  2: "Medium",
  3: "Hard",
};

const getLeetCodeJson = () =>
  fetch(LEETCODE_PROBLEMS_URL).then<LeetCodeRes, never>((res) => res.json());

const save2storage = (json: string) => {
  fs.writeFileSync(STORAGE_PATH, json);
};

const getQuestionHub = (leetcodeJson: LeetCodeRes) => {
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
  }, <QuestionHub>{});
};

const app = async () => {
  const json = await getLeetCodeJson();
  const hub = getQuestionHub(json);
  const formatted = prettier.format(JSON.stringify(hub), { parser: "json" });
  save2storage(formatted);
};

app();
