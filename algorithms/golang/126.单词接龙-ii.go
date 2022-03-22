package main

import "fmt"

/*
 * @lc app=leetcode.cn id=126 lang=golang
 *
 * [126] 单词接龙 II
 */

// @lc code=start

/**
 * BFS
 * 当前层全部处理完后，再更新已访问单词的哈希表
 */

func includes(word string, wordDict map[string]bool) bool {
	return wordDict[word]
}
func findRelatedWord(word string, wordDict, visited map[string]bool, endWord string) []string {
	ans := []string{}

	for i := 0; i < len(word); i++ {
		for j := 0; j < 26; j++ {
			bytes := []byte(word)
			if byte('a'+j) == bytes[i] {
				continue
			}
			bytes[i] = byte('a' + j)
			curWord := string(bytes)
			if includes(curWord, wordDict) && !visited[curWord] {
				ans = append(ans, curWord)
			}
		}
	}
	return ans
}
func findLadders(beginWord string, endWord string, wordList []string) [][]string {
	ans := [][]string{}

	visited := map[string]bool{}
	visited[beginWord] = true
	wordDict := map[string]bool{}
	for _, word := range wordList {
		wordDict[word] = true
	}
	q := [][]string{}
	q = append(q, []string{beginWord})
	level := 0
	for len(q) > 0 && len(ans) == 0 {
		size := len(q)
		for i := 0; i < size; i++ {
			word := q[i][len(q[i])-1]
			if word == endWord {
				ans = append(ans, q[i])
				continue
			}
			relatedWords := findRelatedWord(word, wordDict, visited, endWord)
			relatedWordPath := [][]string{}
			for _, curWord := range relatedWords {
				paths := make([]string, len(q[i])+1)
				copy(paths, q[i])
				paths[len(q[i])] = curWord
				relatedWordPath = append(relatedWordPath, paths)
			}
			q = append(q, relatedWordPath...)
		}
		for _, path := range q[size:] {
			visited[path[len(path)-1]] = true
		}
		level++
		q = q[size:]

	}

	return ans
}

// @lc code=end

func main() {
	beginWord := "hit"
	endWord := "cog"
	wordList := []string{"hot", "dot", "dog", "lot", "log", "cog"}
	// beginWord := "red"
	// endWord := "tax"
	// wordList := []string{"ted", "tex", "red", "tax", "tad", "den", "rex", "pee"}
	ans := findLadders(beginWord, endWord, wordList)
	fmt.Printf("%#v\n", ans)
}
