/*
 * @lc app=leetcode.cn id=169 lang=golang
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * 1. 分治法
 *
 */
func majorityElement_1(nums []int) int {
	var countEle func(n int) int
	countEle = func(n int) (ans int) {
		for _, val := range nums {
			if val == n {
				ans++
			}
		}
		return
	}
	var helper func(start, end int) int
	helper = func(start, end int) int {
		if start == end {
			return nums[start]
		}
		mid := start + (end+1-start)/2
		left := helper(start, mid-1)
		right := helper(mid, end)
		if left == right {
			return left
		}
		countLeft := countEle(left)
		countRight := countEle(right)
		if countLeft > countRight {
			return left
		} else {
			return right
		}

	}
	return helper(0, len(nums)-1)
}

/**
 * 2. 哈希表
 */
func majorityElement_2(nums []int) int {
	m := make(map[int]int)
	for _, v := range nums {
		m[v]++
		if m[v] > len(nums)/2 {
			return v
		}
	}
	return 0
}

/**
 * 3. 排序
 */
func majorityElement_3(nums []int) int {
	sort.Ints(nums)
	return nums[len(nums)/2]
}

/**
 * 4. 摩尔投票法
 * 扫描数组众数+1，其它数-1，最终结果一定为正数。
 * 故开始扫描时设置一个候选众数 candidate 和 count。
 * 每次扫描，若count=0，则candidate=当前数，count+1，
 * 否则判断当前数是否等于candidate，若是，则count+1，否则count-1。
 * 最后 candidate 即为众数。
 * 时间复杂度: O(n)
 * 空间复杂度: O(1)
 */
func majorityElement(nums []int) int {
	candidate, count := 0, 0
	for _, v := range nums {
		if count == 0 {
			candidate = v
		}
		if candidate == v {
			count++
		} else {
			count--
		}
	}
	return candidate
}

// @lc code=end
