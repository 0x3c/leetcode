/*
 * @lc app=leetcode.cn id=599 lang=golang
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * 哈希表
 * 时间复杂度: O(N1 + N2),
 * N1 - list1 长度为N1, 建立哈希表需要O(N1);
 * N2 - list2 长度为N1, 遍历哈希表需要O(N2);
 * 空间复杂度: O(N1)
 */
func findRestaurant(list1 []string, list2 []string) []string {
	indexSum := math.MaxInt32
	ans := []string{}
	cache := make(map[string]int, len(list1))
	for i, str := range list1 {
		cache[str] = i
	}
	for i, str := range list2 {
		if i > indexSum {
			return ans
		}
		if j, ok := cache[str]; ok {
			if i+j < indexSum {
				indexSum = i + j
				ans = []string{str}
			} else if i+j == indexSum {
				ans = append(ans, str)
			}
		}
	}
	return ans
}

// @lc code=end
