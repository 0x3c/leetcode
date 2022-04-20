/*
 * @lc app=leetcode.cn id=322 lang=golang
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * 类似爬楼梯， 每次可爬的步数为 coins中的数
 * 设 opt[i] 为凑够 i元所需最小的硬币数, k ∈ [k in coins]
 * 对于 opt[i]，opt[i]=min(opt[i],opt[i-k]+1)
 */
func coinChange(coins []int, amount int) int {
	opt := make([]int, amount+1)
	for i, _ := range opt {
		opt[i] = amount + 1
	}
	opt[0] = 0

	min := func(a, b int) int {
		if a < b {
			return a
		} else {
			return b
		}
	}
	for i := 1; i <= amount; i++ {
		for j := 0; j < len(coins); j++ {
			if i >= coins[j] {
				opt[i] = min(opt[i], opt[i-coins[j]]+1)
			}
		}
	}

	if opt[amount] > amount {
		return -1
	} else {
		return opt[amount]
	}
}

// @lc code=end
