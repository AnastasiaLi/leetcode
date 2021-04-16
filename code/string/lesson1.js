/*
557. 反转字符串中的单词 III
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例：
输入："Let's take LeetCode contest"
输出："s'teL ekat edoCteeL tsetnoc"

提示：
在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

知识点：
String.prototype.split
String.prototype.match
Array,prototype.map
Array,prototype.reverse
Array,prototype.join
*/

// export default (s) => {
//   //字符串按空格进行分隔，保存数组，数组的先后顺序就是单词的顺序
//   return s.split(' ').map((item)=>{
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

export default (s) => {
  //字符串按空格进行分隔，保存数组，数组的先后顺序就是单词的顺序
  return s.match(/[\S]+/g).map((item)=>{
    return item.split('').reverse().join('')
  }).join(' ')
}
