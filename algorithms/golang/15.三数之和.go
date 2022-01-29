/*
 * @lc app=leetcode.cn id=15 lang=golang
 *
 * [15] 三数之和
 */

// @lc code=start
func threeSum(nums []int) [][]int {
	var ans [][]int
	sort.Ints(nums)
	len := len(nums)
	if len < 3 || nums[0] > 0 || nums[len-1] < 0 {
		// 剪枝
		return ans
	}
	for i := 0; i < len-2; i++ {
		if i > 0 && nums[i] == nums[i-1] {
			// 去重, 同一个值, 上次循环已经找完了所有答案
			continue
		}
		for left, right := i+1, len-1; left < right; {
			sum := nums[left] + nums[right]
			if sum > -nums[i] {
				right--
			} else if sum < -nums[i] {
				left++
			} else {
				ans = append(ans, []int{nums[i], nums[left], nums[right]})
				// 找到答案后继续寻找并去重
				// 如 当i=0, nums[i]=-3时, [-3,-2,-1,0,1,2,3,4,5]
				// 有四组答案
				left++
				right--
				for left < right && nums[right-1] == nums[right] {
					right--
				}
				for left < right && nums[left+1] == nums[left] {
					left++
				}
			}
		}
	}
	return ans
}

// @lc code=end
