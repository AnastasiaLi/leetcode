/*
### 914. 卡牌分组
给定一副牌，每张牌上都写着一个整数。此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
+ 每组都有 X 张牌。
+ 组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

示例 1：
输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]

示例 2：
输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。

示例 3：
输入：[1]
输出：false
解释：没有满足要求的分组。

示例 4：
输入：[1,1]
输出：true
解释：可行的分组是 [1,1]

示例 5：
输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]

提示：
1 <= deck.length <= 10000
0 <= deck[i] < 10000

* */

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  let obj = {}
  for (let i = 0; i < deck.length; i++) {
    if (obj.hasOwnProperty(deck[i])) {
      obj[deck[i]].push(deck[i])
    } else {
      obj[deck[i]] = []
      obj[deck[i]].push(deck[i])
    }
  }
  let group = Object.values(obj)
  //计算两个数a,b的最大公约数
  function gcd (a, b) {
    if (b === 0) {
      return a
    }
    return gcd(b, a % b)
  }
  while (group.length > 1) {
    let a = group.shift().length
    let b = group.shift().length
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      group.unshift(new Array(v).fill(''))
    }
  }
  return group.length ? group[0].length > 1 : false
}

var deck = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10]

hasGroupsSizeX(deck)







