/*
电话号码的组合 公式运算
17. 电话号码的字母组合
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
2-abc 3-def 4-ghi 5-jkl 6-mno 7-pqrs 8-tuv 9-wxyz
示例 1：
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
示例 2：
输入：digits = ""
输出：[]

示例 3：
输入：digits = "2"
输出：["a","b","c"]

提示：
0 <= digits.length <= 4
digits[i] 是范围 ['2', '9'] 的一个数字。

* */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if(digits.length<1){
    return [];
  }
  let mapObj = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }

  let letterArr = digits.split('').map((item)=>{
    return mapObj[item]
  })

  function getArr (letterArr) {
    if (letterArr.length > 1) {
      let arr = [];
      for (let i=0;i<letterArr[0].length;i++){
        for (let j=0;j<letterArr[1].length;j++){
          arr.push(letterArr[0][i]+letterArr[1][j])
        }
      }
      letterArr.splice(0,2,arr);
      return getArr(letterArr)
    } else {
      return letterArr[0]
    }
  }
  return getArr(letterArr)
}

letterCombinations('23')
