/*
 * @lc app=leetcode.cn id=744 lang=golang
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
func nextGreatestLetter(letters []byte, target byte) byte {
	if letters[len(letters)-1] <= target {
		return letters[0]
	}
	left, right := 0, len(letters)-1
	for left < right {
		mid := left + (right-left)/2
		if letters[mid] <= target {
			left = mid + 1
		} else {
			right = mid
		}
	}
	fmt.Println(left, right)
	return letters[left]
}

// @lc code=end