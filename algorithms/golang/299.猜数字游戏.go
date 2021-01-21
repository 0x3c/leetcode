import "fmt"

/*
 * @lc app=leetcode.cn id=299 lang=golang
 *
 * [299] 猜数字游戏
 */

// @lc code=start
func min(x, y int) int {
	if x < y {
		return x
	} else {
		return y
	}
}
func getHint(secret string, guess string) string {
	hash, store := make([]int, 10), make([]int, 10)

	bulls, cows := 0, 0

	secrets, guesss := []rune(secret), []rune(guess)
	for i, _ := range []rune(secrets) {
		ch1, ch2 := secrets[i], guesss[i]
		if ch1 == ch2 {
			bulls++
		} else {
			store[ch1-'0']++
			hash[ch2-'0']++
		}
	}
	for i := 0; i < 10; i++ {
		cows += min(store[i], hash[i])
	}
	return fmt.Sprintf("%dA%dB", bulls, cows)
}

// @lc code=end
