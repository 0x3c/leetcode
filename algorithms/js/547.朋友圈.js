/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

/**
 *  1. dfs
 */

/**
 * @param {number[][]} M
 * @param {number[]} visited
 * @param {number} i
 */
function dfs(M, visited, i) {
  for (let j = 0; j < M.length; j++) {
    if (M[i][j] && !visited[j]) {
      visited[j] = 1;
      dfs(M, visited, j);
    }
  }
}
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  const visited = Array.from({ length: M.length }, (_) => 0);
  let count = 0;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) {
      count++;
      dfs(M, visited, i);
    }
  }
  return count;
};

// @lc code=start

/**
 * 2. 并查集
 */
class UnionFind {
  constructor(n) {
    this.count = n;
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = Array.from({ length: n }, (_, i) => 1);
  }
  find(p) {
    let parent = this.parent;
    while (parent[p] !== p) {
      parent[p] = parent[parent[p]];
      p = parent[p];
    }
    return p;
  }
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP === rootQ) return;
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    }
    this.count--;
  }
}

/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  const uf = new UnionFind(M.length);
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 0) continue;
      uf.union(i, j);
    }
  }
  return uf.count;
};
// @lc code=end
