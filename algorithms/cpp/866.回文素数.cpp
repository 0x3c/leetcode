#include <string>
using namespace std;
/*
 * @lc app=leetcode.cn id=866 lang=cpp
 *
 * [866] 回文素数
 */

// @lc code=start
class Solution {
 private:
  bool isPrime(int N) {
    int r = sqrt(N);
    for (int i = 2; i <= r; i++) {
      if (N % i == 0) return false;
    }
    return true;
  }
  int get_num_len(int N) {
    int ans = 1;
    while (N >= 10) {
      N /= 10;
      ans++;
    }
    return ans;
  }
  int reverse_num(int N) {
    int ans = 0;
    while (N > 0) {
      ans = (10 * ans) + (N % 10);
      N /= 10;
    }
    return ans;
  }

  bool isPrimePalindrome(int N) {
    if (!isPrime(N)) return false;  // 排除非素数
    int reversed_num = reverse_num(N);
    if (reversed_num == N) return true;  // 数字倒置前后相等则为回文数
    return false;
  }

 public:
  int primePalindrome(int N) {
    if (N == 1)
      return 2;
    else if (N <= 3) {
      return N;
    } else if (N <= 5)
      return 5;
    else if (N <= 7)
      return 7;
    else if (N <= 11)
      return 11;
    while (N) {
      int len = get_num_len(N);
      if (len % 2 == 0) {
        N = 1;
        while (len--) {
          N *= 10;
        }
        continue;
      }
      if (isPrimePalindrome(N)) {
        return N;
      }
      N++;
    }
    return 0;
  }
};
// @lc code=end
