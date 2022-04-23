/*
 * @lc app=leetcode.cn id=547 lang=golang
 *
 * [547] 省份数量
 */

// @lc code=start
func findCircleNum(isConnected [][]int) int {
	n := len(isConnected)
	// init
	count, parent := n, make([]int, n, n)
	for i := 0; i < n; i++ {
		parent[i] = i
	}

	findP := func(parent []int, n int) int {
		root := n
		for parent[root] != root {
			root = parent[root]
		}
		for parent[n] != n {
			x := parent[n]
			parent[n] = root
			n = x
		}
		return root
	}
	union := func(parent []int, x, y int) {
		rootA, rootB := findP(parent, x), findP(parent, y)
		if rootA != rootB {
			parent[rootA] = rootB
			count--
		}

	}
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if isConnected[i][j] == 1 {
				union(parent, i, j)
			}
		}
	}
	return count
}

// @lc code=end
