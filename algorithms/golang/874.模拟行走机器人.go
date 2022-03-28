/*
 * @lc app=leetcode.cn id=874 lang=golang
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
func robotSim(commands []int, obstacles [][]int) int {
	dist := 0
	pos := []int{0, 0}
	directionIndex := 0
	directions := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}

	obstacleMap := make(map[[2]int]bool)
	for _, obstacle := range obstacles {
		obstacleMap[[2]int{obstacle[0], obstacle[1]}] = true
	}
	for _, command := range commands {
		switch command {
		case -1:
			directionIndex = (directionIndex + 1) % 4
		case -2:
			directionIndex = (4 + directionIndex - 1) % 4
		default:
			step := command
			for step > 0 {
				posX, posY := pos[0]+directions[directionIndex][0], pos[1]+directions[directionIndex][1]
				if obstacleMap[[2]int{posX, posY}] {
					break
				}
				pos[0], pos[1] = posX, posY
				curDist := pos[0]*pos[0] + pos[1]*pos[1]
				if curDist > dist {
					dist = curDist
				}
				step--
			}
		}
	}
	return dist
}

// @lc code=end