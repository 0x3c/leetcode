/*
 * @lc app=leetcode.cn id=717 lang=golang
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * 根据解码规则从前往后匹配，优先匹配10、11。若匹配到只剩一位则返回true；否则不符合题意。
 * 时间复杂度: O(n)
 * 空间复杂度: O(1)
 */
func isOneBitCharacter(bits []int) bool {
	for i := 0; i < len(bits); {
		if bits[i] == 0 {
			if i == len(bits)-1 {
				return true
			}
			i++
		} else {
			i += 2
		}
	}
	return false
}

// @lc code=end
