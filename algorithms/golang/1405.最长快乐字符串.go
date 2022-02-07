/*
 * @lc app=leetcode.cn id=1405 lang=golang
 *
 * [1405] 最长快乐字符串
 */

// @lc code=start
/**
 * 贪心
 * 每次排序，剩余字符中取出符合规则的数量最多的字符。
 * 时间复杂度：O((a+b+c)*C*log(C)) - C 为字符种类数(本题为3)
 * 空间复杂度：O(C)
 *
 */
func longestDiverseString(a int, b int, c int) string {
	ans := []byte{}
	arr := []struct {
		c  int
		ch byte
	}{{a, 'a'}, {b, 'b'}, {c, 'c'}}
	hasNext := true
	for {
		sort.Slice(arr, func(i, j int) bool { return arr[i].c > arr[j].c })
		hasNext = false
		for i, p := range arr {
			if p.c == 0 {
				break
			}
			size := len(ans)
			if size >= 2 && ans[size-2] == p.ch && ans[size-1] == p.ch {
				continue
			}
			hasNext = true
			ans = append(ans, p.ch)
			arr[i].c--
			break
		}
		if !hasNext {
			return string(ans)
		}
	}
}

// @lc code=end
