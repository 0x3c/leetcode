/*
 * @lc app=leetcode.cn id=127 lang=golang
 *
 * [127] 单词接龙
 */

// @lc code=start

/*
 * BFS
 */
func includes(dist []string, target string) bool {
	for _, str := range dist {
		if str == target {
			return true
		}
	}
	return false
}
func findRelatedWords(target string, wordDist map[string]bool, visited map[string]bool) []string {
	ans := []string{}
	bytes := []rune(target)
	for i := 0; i < len(bytes); i++ {
		for j := 'a'; j <= 'z'; j++ {
			if bytes[i] == j {
				continue
			}
			old := bytes[i]
			bytes[i] = j
			str := string(bytes)
			if wordDist[str] && !visited[str] {
				ans = append(ans, str)
			}
			bytes[i] = old
		}
	}
	return ans
}
func ladderLength(beginWord string, endWord string, wordList []string) int {
	ans := 0
	if !includes(wordList, endWord) {
		return ans
	}
	q := []string{beginWord}
	visited := make(map[string]bool)
	visited[beginWord] = true
	wordDist := make(map[string]bool)
	for _, str := range wordList {
		wordDist[str] = true
	}
	for len(q) > 0 {
		ans++
		size := len(q)
		for i := 0; i < size; i++ {
			if q[i] == endWord {
				return ans
			}
			words := findRelatedWords(q[i], wordDist, visited)
			for _, str := range words {
				visited[str] = true
			}
			q = append(q, words...)
		}
		q = q[size:]
	}
	return 0
}

// @lc code=end

