package main

import "fmt"

/*
 * @lc app=leetcode.cn id=529 lang=golang
 *
 * [529] 扫雷游戏
 */

// @lc code=start
/**
 * BFS + 模拟
 */
func updateBoard(board [][]byte, click []int) [][]byte {
	q := [][]int{click}
	visited := make([][]bool, len(board))
	posList := [][]int{
		[]int{0, 1},
		[]int{0, -1},
		[]int{1, 0},
		[]int{-1, 0},
		[]int{-1, -1},
		[]int{-1, 1},
		[]int{1, 1},
		[]int{1, -1},
	}
	for i := 0; i < len(board); i++ {
		visited[i] = make([]bool, len(board[0]))
	}
	var getXNum func(x, y int) byte
	getXNum = func(x, y int) byte {
		ret := byte(0)
		for _, pos := range posList {
			posX, posY := x+pos[0], y+pos[1]
			if posX >= 0 && posX < len(board) && posY >= 0 && posY < len(board[0]) {
				if board[posX][posY] == 'X' || board[posX][posY] == 'M' {
					ret++
				}
			}
		}
		return ret
	}
	for len(q) > 0 {
		size := len(q)
		for i := 0; i < size; i++ {
			x, y := q[i][0], q[i][1]
			visited[x][y] = true
			var ret bool
			switch board[x][y] {
			case 'E':
				ch := '0' + getXNum(x, y)
				if ch == '0' {
					board[x][y] = 'B'
					for _, pos := range posList {
						posX, posY := x+pos[0], y+pos[1]
						if posX >= 0 && posX < len(board) && posY >= 0 && posY < len(board[0]) && !visited[posX][posY] {
							ch := board[posX][posY]
							if ch == 'E' {
								q = append(q, []int{posX, posY})
							}
						}
					}
				} else {
					board[x][y] = ch
				}
			case 'B':
			case 'M':
				fmt.Println("ret")
				board[x][y] = 'X'
				ret = true
			case 'X':
				fmt.Println("ret")
				ret = true
			}
			if ret {
				break
			}
		}
		q = q[size:]
	}
	return board
}

// @lc code=end

func main() {
	board := [][]byte{
		[]byte{'B', '1', 'E', '1', 'B'},
		[]byte{'B', '1', 'M', '1', 'B'},
		[]byte{'B', '1', '1', '1', 'B'},
		[]byte{'B', 'B', 'B', 'B', 'B'},
	}
	click := []int{1, 2}
	// click := []int{1, 2}
	ans := updateBoard(board, click)
	// fmt.Printf("%#v\n", ans)
	for _, rows := range ans {
		for _, ch := range rows {
			fmt.Printf("%c ", ch)
		}
		fmt.Println()
	}

}
