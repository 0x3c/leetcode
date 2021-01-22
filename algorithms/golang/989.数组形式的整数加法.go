/*
 * @lc app=leetcode.cn id=989 lang=golang
 *
 * [989] 数组形式的整数加法
 */

// @lc code=start
// func addToArrayForm(A []int, K int) []int {
// 	var B []int
// 	var ans []int
// 	for K > 0 {
// 		bit := K % 10 // 低位
// 		K /= 10
// 		B = append([]int{bit}, B...)
// 	}
// 	lenA, lenB := len(A), len(B)

// 	carry := 0
// 	for i, j := lenA-1, lenB-1; i > -1 || j > -1; {
// 		a, b := 0, 0
// 		if i > -1 {
// 			a = A[i]
// 		}
// 		if j > -1 {
// 			b = B[j]
// 		}
// 		sum := a + b + carry
// 		carry = sum / 10
// 		ans = append([]int{sum % 10}, ans...)
// 		i--
// 		j--
// 	}
// 	if carry > 0 {
// 		ans = append([]int{carry}, ans...)
// 	}
// 	return ans
// }

func addToArrayForm(A []int, K int) []int {
	carry := 0
	var ans []int
	for i := len(A) - 1; ; i-- {
		if i < 0 && K == 0 {
			break
		}
		a := 0
		if i > -1 {
			a = A[i]
		}
		bit := K % 10
		K /= 10
		sum := a + bit + carry
		carry = sum / 10
		ans = append(ans, sum%10)
	}
	if carry > 0 {
		ans = append(ans, carry)
	}
	// reverse
	for i := 0; i < len(ans)/2; i++ {
		ans[i], ans[len(ans)-1-i] = ans[len(ans)-1-i], ans[i]
	}
	return ans
}

// @lc code=end
