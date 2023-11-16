// function solution(s) {
//     var newArray = s.split(" ").map(num => Number(num));
//      let minNumber = Math.min(...newArray)
//      let maxNumber = Math.max(...newArray)
//     return [minNumber,maxNumber].join(" ");
// }

function solution(s) {
  let maxNum = Math.max(...s.split(" ").map((num) => Number(num)));
  let minNum = Math.min(...s.split(" ").map((num) => Number(num)));
  return [minNum, maxNum].join(" ");
}
