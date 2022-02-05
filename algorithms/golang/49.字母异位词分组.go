/*
 * @lc app=leetcode.cn id=49 lang=golang
 *
 * [49] 字母异位词分组
 */

/**
 * 排序 + 哈希表
 * 将排序后的数组作为哈希表的键
 * 时间复杂度 O(n*k*log(k))，k为单词长度
 */
func groupAnagrams_1(strs []string) [][]string {
	ans := [][]string{}
	hash := make(map[string][]string)
	for _, str := range strs {
		bytes := []byte(str)
		sort.Slice(bytes, func(i, j int) bool { return bytes[i] < bytes[j] })
		hash[string(bytes)] = append(hash[string(bytes)], str)
	}
	for _, words := range hash {
		ans = append(ans, words)
	}
	return ans
}

// @lc code=start
/**
 * 计数 + 哈希表
 * 单词由小写字母组成，可统一单词中所有字母出现的次数，并以此为哈希表的key，值为该单词
 * 时间复杂度 O(n*(k+26))，k为单词长度
 */
func groupAnagrams(strs []string) [][]string {
	ans := [][]string{}
	hash := make(map[[26]int][]string)
	for _, str := range strs {
		count := [26]int{}
		for _, ch := range str {
			count[ch-'a']++
		}
		hash[count] = append(hash[count], str)
	}
	for _, words := range hash {
		ans = append(ans, words)
	}
	return ans
}

// @lc code=end
