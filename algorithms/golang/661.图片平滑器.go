/*
 * @lc app=leetcode.cn id=661 lang=golang
 *
 * [661] 图片平滑器
 */

// @lc code=start
func imageSmoother(img [][]int) [][]int {
	ans := [][]int{}
	posList := [][]int{
		[]int{0, 1},
		[]int{0, -1},
		[]int{1, 0},
		[]int{-1, 0},
		[]int{1, 1},
		[]int{1, -1},
		[]int{-1, -1},
		[]int{-1, 1},
	}
	for row, _ := range img {
		ans = append(ans, []int{})
		for col, _ := range img[row] {
			count := 1
			sum := img[row][col]
			for _, pos := range posList {
				posX, posY := row+pos[0], col+pos[1]
				if posX < 0 || posY < 0 || posX >= len(img) || posY >= len(img[0]) {
					continue
				}
				sum += img[posX][posY]
				count++
			}
			ans[row] = append(ans[row], sum/count)
		}
	}
	return ans
}

// @lc code=end