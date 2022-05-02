/*
 * @lc app=leetcode.cn id=773 lang=golang
 *
 * [773] 滑动谜题
 */

// @lc code=start
func slidingPuzzle(board [][]int) int {
	ret := 0
	moves := map[int][]int{
		0: {1, 3},
		1: {0, 2, 4},
		2: {1, 5},
		3: {0, 4},
		4: {1, 3, 5},
		5: {2, 4},
	}
	str := ""
	for i := 0; i < 2; i++ {
		for j := 0; j < 3; j++ {
			str = str + strconv.Itoa(board[i][j])
		}
	}
	q := []string{str}
	target := "123450"
	visited := map[string]bool{str: true}
	for len(q) > 0 {

		size := len(q)
		for i := 0; i < size; i++ {
			word := q[i]
			if word == target {
				return ret
			}
			index := strings.Index(word, "0")
			move := moves[index]
			runes := []rune(word)
			for j := 0; j < len(move); j++ {
				runes[index], runes[move[j]] = runes[move[j]], runes[index]
				str2 := string(runes)
				if !visited[str2] {
					q = append(q, str2)
					visited[str2] = true
				}
				runes[index], runes[move[j]] = runes[move[j]], runes[index]
			}

		}
		q = append(q[size:])
		ret++
	}
	return -1
}

// @lc code=end
