/*
 * @lc app=leetcode.cn id=1232 lang=golang
 *
 * [1232] 缀点成线
 */

/*
 * 思路:
 * 当一条直线过原点, 其直线方程满足 ax+by=0
 * 若该点集能组成一条直线, 则将直线移动到经过原点, 其所有点依然满足方程 ax+by=0
 * 若不满足, 则该点集不在一条直线上
 */
// @lc code=start
func checkStraightLine(coordinates [][]int) bool {
	// x0,y0 移动到原点
	x0, y0 := coordinates[0][0], coordinates[0][1]
	for _, point := range coordinates {
		point[0] -= x0
		point[1] -= y0
	}
	a, b := coordinates[1][1], -(coordinates[1][0])
	for i := 2; i < len(coordinates); i++ {
		if a*coordinates[i][0]+b*coordinates[i][1] != 0 {
			return false
		}
	}
	return true
}

// @lc code=end
