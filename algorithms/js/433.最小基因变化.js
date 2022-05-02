/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  const genDict = new Set();
  let ret = 0;
  bank.forEach((gen) => {
    genDict.add(gen);
  });
  if (!genDict.has(end)) return -1;
  let startQ = new Set();
  startQ.add(start);
  let endQ = new Set();
  endQ.add(end);
  const genList = ["A", "C", "G", "T"];
  while (startQ.size !== 0) {
    if (startQ.size > endQ.size) {
      let tmp = startQ;
      startQ = endQ;
      endQ = tmp;
    }
    ret++;
    const q = new Set();
    for (let gen of startQ.keys()) {
      for (let i = 0; i < 8; i++) {
        for (let ch of genList) {
          if (ch !== gen[i]) {
            const str = gen.substring(0, i) + ch + gen.substring(i + 1);
            if (endQ.has(str)) {
              return ret;
            }
            if (genDict.has(str)) {
              q.add(str);
              genDict.delete(str);
            }
          }
        }
      }
    }
    startQ = q;
  }
  return -1;
};
// @lc code=end
