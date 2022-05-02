/*
 * @lc app=leetcode.cn id=127 lang=golang
 *
 * [127] 单词接龙
 */

// @lc code=start

/*
 * 单向BFS
 */
func ladderLength_1(beginWord string, endWord string, wordList []string) int {
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

/*
 * Two-Ended BFS
 * 从两端向中间扩散，每次扩散数量少的那一端，若两端向中间扩散出现重复，则返回总层数
 * 因为会对已访问字符串标记，每个字符串只会处理一次，
 * 所以不会出现一个字符串即在beginQueue又在endQueue,
 * 所以需要在生成新字符串时判断新串是否为终点，而非在两个集合中同时存在
 */
func ladderLength(beginWord string, endWord string, wordList []string) int {
	ret := 1
	wordDict := map[string]bool{beginWord: true}
	for _, str := range wordList {
		wordDict[str] = true
	}
	if !wordDict[endWord] {
		return 0
	}
	beginQ := map[string]bool{beginWord: true}
	endQ := map[string]bool{endWord: true}

	for len(beginQ) > 0 && len(endQ) > 0 {
		ret++
		if len(beginQ) > len(endWord) {
			beginQ, endQ = endQ, beginQ
		}
		q := map[string]bool{}
		for word, _ := range beginQ {
			bytes := []byte(word)
			for i := 0; i < len(word); i++ {
				old := bytes[i]
				for j := byte('a'); j <= 'z'; j++ {
					bytes[i] = j
					str := string(bytes)
					if endQ[str] {
						return ret
					}
					if wordDict[str] && j != old {
						q[str] = true
						wordDict[str] = false
					}
				}
				bytes[i] = old
			}
		}
		beginQ = q
	}
	return 0
}

// @lc code=end
