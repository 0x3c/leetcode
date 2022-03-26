/*
 * @lc app=leetcode.cn id=682 lang=golang
 *
 * [682] 棒球比赛
 */

// @lc code=start
func calPoints(ops []string) int {
	score := 0
	q := []int{}

	for _, op := range ops {
		size := len(q)
		switch op {
		case "C":
			q = q[:size-1]
		case "D":
			q = append(q, q[size-1]*2)
		case "+":
			q = append(q, q[size-1]+q[size-2])
		default:
			val, _ := strconv.Atoi(op)
			q = append(q, val)
		}
	}
	for _, val := range q {
		score += val
	}
	return score
}

// @lc code=end
