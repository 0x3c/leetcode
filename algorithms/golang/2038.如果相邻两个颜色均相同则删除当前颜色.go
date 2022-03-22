/*
 * @lc app=leetcode.cn id=2038 lang=golang
 *
 * [2038] 如果相邻两个颜色均相同则删除当前颜色
 */

// @lc code=start

/**
 * 脑筋急转弯, A删除颜色不会影响B的操作，反之亦不会
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
func winnerOfGame(colors string) bool {
	a, b := 0, 0
	for i := 1; i < len(colors)-1; i++ {
		if colors[i] == colors[i-1] && colors[i] == colors[i+1] {
			if colors[i] == 'A' {
				a++
			} else {
				b++
			}
		}
	}
	return a > b
}

// @lc code=end
