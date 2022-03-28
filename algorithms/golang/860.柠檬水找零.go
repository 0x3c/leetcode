/*
 * @lc app=leetcode.cn id=860 lang=golang
 *
 * [860] 柠檬水找零
 */

// @lc code=start
func lemonadeChange(bills []int) bool {
	fiveCoins, tenCoins := 0, 0
	for _, bill := range bills {
		switch bill {
		case 5:
			fiveCoins++
		case 10:
			if fiveCoins == 0 {
				return false
			} else {
				fiveCoins--
				tenCoins++
			}
		case 20:
			if fiveCoins > 0 && tenCoins > 0 {
				fiveCoins--
				tenCoins--
			} else if fiveCoins > 2 {
				fiveCoins -= 3
			} else {
				return false
			}
		}
	}
	return true
}

// @lc code=end
