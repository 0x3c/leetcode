/*
 * @lc app=leetcode.cn id=127 lang=golang
 *
 * [127] 单词接龙
 */

// @lc code=start

/*
 * 单向BFS
 */
func ladderLength(beginWord string, endWord string, wordList []string) int {
	ret := 0
	wordDict := map[string]bool{}
	for _, str := range wordList {
		wordDict[str] = true
	}
	if !wordDict[endWord] {
		return ret
	}
	q := []string{beginWord}
	visited := map[string]bool{}
	visited[beginWord] = true
	for len(q) != 0 {
		size := len(q)
		ret++
		for i := 0; i < size; i++ {
			word := q[i]
			if word == endWord {
				return ret
			}
			wordBytes := []byte(word)
			for j := 0; j < len(word); j++ {
				old := wordBytes[j]
				for k := byte('a'); k <= 'z'; k++ {
					wordBytes[j] = k
					str2 := string(wordBytes)
					if wordDict[str2] && !visited[str2] {
						visited[str2] = true
						q = append(q, str2)
					}
				}
				wordBytes[j] = old
			}
		}
		q = append(q[size:])
	}
	return 0
}

// @lc code=end
