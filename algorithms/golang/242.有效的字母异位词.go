/*
 * @lc app=leetcode.cn id=242 lang=golang
 *
 * [242] 有效的字母异位词
 */

/**
 * 排序后比较
 * 时间复杂度 n*O(n)
 * 空间复杂度 O(log(n)) - 排序空间复杂度为 O(log(n))
 */
func isAnagram_1(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	arr := []byte(s)
	sort.Slice(arr, func(i, j int) bool { return arr[i] > arr[j] })
	s = string(arr)
	arr = []byte(t)
	sort.Slice(arr, func(i, j int) bool { return arr[i] > arr[j] })
	t = string(arr)
	return s == t
}

// @lc code=start
/**
 * 数组记录字符出现次数
 * 时间复杂度 O(n)
 * 空间复杂度 O(26)
 */
func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	arr := [26]int{}
	for i := 0; i < len(s); i++ {
		arr[byte(s[i])-'a']++
		arr[byte(t[i])-'a']--
	}
	for _, n := range arr {
		if n != 0 {
			return false
		}
	}
	return true
}

// @lc code=end