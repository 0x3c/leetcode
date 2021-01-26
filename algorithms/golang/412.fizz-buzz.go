import "strconv"

/*
 * @lc app=leetcode.cn id=412 lang=golang
 *
 * [412] Fizz Buzz
 */

// @lc code=start
func fizzBuzz(n int) []string {
	ans := []string{}
	for i := 1; i < n+1; i++ {
		str := ""
		if i%15 == 0 {
			str = "FizzBuzz"
		} else if i%5 == 0 {
			str = "Buzz"
		} else if i%3 == 0 {
			str = "Fizz"
		} else {
			str = strconv.Itoa(i)
		}
		ans = append(ans, str)
	}
	return ans
}

// @lc code=end
