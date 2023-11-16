function solution(n) {
  let nextBiggerNum = n.toString(2).split("1").length;
  while (true) {
    n++;
    if (n.toString(2).split("1").length === nextBiggerNum) return n;
  }
  return nextBiggerNum;
}

// function solution(n, nextNum = n + 1) {
//     return n.toString(2).match(/1/g).length == nextNum.toString(2).match(/1/g).length ? nextNum : solution(n, nextNum + 1)
// }
