/*
 * @lc app=leetcode.cn id=433 lang=golang
 *
 * [433] 最小基因变化
 */

// @lc code=start
func minMutation(start string, end string, bank []string) int {
	st := make([]string, 0)
	st = append(st, start)
	bank = append(bank, start)
	visited := make(map[string]bool)
	return bfs(st, end, bank, visited)
}
func includes(strs []string, str string) bool {
	for _, str1 := range strs {
		if str1 == str {
			return true
		}
	}
	return false
}
func bfs(st []string, ed string, dst []string, visited map[string]bool) int {
	gen := []byte{'A', 'C', 'G', 'T'}
	index := 0
	for len(st) > 0 {
		size := len(st)
		for i := 0; i < size; i++ {
			curStr := []byte(st[i])
			if ed == string(curStr) {
				return index
			}
			for j := 0; j < 8; j++ {
				for _, v := range gen {
					if curStr[j] == v {
						continue
					}
					curStr[j] = v
					newStr := string(curStr)
					if !visited[newStr] && includes(dst, newStr) && !includes(st, newStr) {
						st = append(st, newStr)
					}
					visited[newStr] = true
					curStr[j] = st[i][j]
				}
			}
		}
		st = st[size:]
		index++
	}
	return -1
}

// @lc code=end
