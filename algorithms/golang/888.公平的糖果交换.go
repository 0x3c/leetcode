/*
 * @lc app=leetcode.cn id=888 lang=golang
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
func fairCandySwap(A []int, B []int) []int {
	ans := make([]int, 2)
	sumA, sumB := sum(A), sum(B)
	difference := (sumB - sumA) / 2
	for i := 0; i < len(A); i++ {
		for j := 0; j < len(B); j++ {
			if B[j]-A[i] == difference {
				ans[0] = A[i]
				ans[1] = B[j]
				return ans
			}
		}
	}
	return ans
}

func sum(A []int) int {
	ans := 0
	for _, n := range A {
		ans += n
	}
	return ans
}

// @lc code=end
