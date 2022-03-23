
/*
 * @lc app=leetcode.cn id=433 lang=golang
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * BFS
 */
func minMutation_1(start string, end string, bank []string) int {
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

/**
 * DFS
 */
func minMutation(start string, end string, bank []string) int {

	visited := make(map[string]bool)
	dict := make(map[string]bool)
	for _, wd := range bank {
		dict[wd] = true
	}
	if !dict[end] {
		return -1
	}
	ret := len(bank) + 1
	gens := []byte{'A', 'C', 'G', 'T'}
	var dfs func(word string, level int)
	dfs = func(word string, level int) {
		if word == end {
			if level < ret {
				ret = level
			}
			return
		}
		visited[word] = true
		for i := 0; i < 8; i++ {
			for _, ch := range gens {
				bytes := []byte(word)
				if bytes[i] == ch {
					continue
				} else {
					bytes[i] = ch
					temp := string(bytes)
					if !visited[temp] && dict[temp] {
						dfs(temp, level+1)
					}
				}
			}
		}
	}
	dfs(start, 0)
	if ret > len(bank) {
		return -1
	} else {
		return ret
	}
}

// @lc code=end