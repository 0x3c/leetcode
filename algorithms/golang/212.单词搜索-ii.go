/*
 * @lc app=leetcode.cn id=212 lang=golang
 *
 * [212] 单词搜索 II
 */

// @lc code=start

type Trie struct {
	children [26]*Trie
	isEnd    bool
}

func Constructor() Trie {
	return Trie{}
}

func (this *Trie) Insert(word string) {
	parent := this
	for _, ch := range word {
		node := parent.children[ch-'a']
		if node == nil {
			node = &Trie{}
			parent.children[int(ch-'a')] = node
		}
		parent = node
	}
	parent.isEnd = true
}

func (this *Trie) Search(word string) bool {
	parent := this
	for _, ch := range word {
		node := parent.children[ch-'a']
		if node == nil {
			return false
		} else {
			parent = node
		}
	}
	return parent.isEnd
}

func (this *Trie) StartsWith(prefix string) bool {
	parent := this
	for _, ch := range prefix {
		node := parent.children[ch-'a']
		if node == nil {
			return false
		} else {
			parent = node
		}
	}
	return true
}

func findWords(board [][]byte, words []string) []string {
	trie := &Trie{}
	for _, word := range words {
		trie.Insert(word)
	}
	retMap := make(map[string]bool)
	row, col := len(board), len(board[0])

	var helper func(i, j int, word string, cur_trie *Trie)
	dx, dy := []int{1, 0, -1, 0}, []int{0, 1, 0, -1}
	helper = func(i, j int, word string, cur_trie *Trie) {
		ch := board[i][j]
		cur_trie = cur_trie.children[ch-'a']
		if cur_trie == nil {
			return
		}
		newWord := word + string(ch)
		if cur_trie.isEnd {
			retMap[newWord] = true
		}
		board[i][j] = '.'
		for k := 0; k < len(dx); k++ {
			x, y := i+dx[k], j+dy[k]
			if x < 0 || x >= row || y < 0 || y >= col || board[x][y] == '.' {
				continue
			}
			helper(x, y, newWord, cur_trie)
		}
		board[i][j] = ch
	}
	for i := 0; i < row; i++ {
		for j := 0; j < col; j++ {
			helper(i, j, "", trie)
		}
	}
	ret := make([]string, 0, len(retMap))
	for k := range retMap {
		ret = append(ret, k)
	}
	return ret
}

// @lc code=end
