/*
 * @lc app=leetcode.cn id=45 lang=golang
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * 从后往前贪心，找出走最大步幅到达目的地的位置，该点即为边界点。
 */
func jump(nums []int) int {
	steps, position := 0, len(nums)-1
	for position > 0 {
		for i := 0; i < position; i++ {
			if nums[i]+i >= position {
				position = i
				steps++
			}
		}
	}
	return steps
}

// @lc code=end
