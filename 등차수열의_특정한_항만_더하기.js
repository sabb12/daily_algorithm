const a = 3;
const d = 4;
const included = [true, false, false, true, true];

// const a = 7;
// const d = 1;
// const included = [false, false, false, true, false, false, false];

function solution(a, d, included) {
  var answer = 0;

  // 첫째항 = a, 공차가 = b
  // a = 3, d = 4
  // 등차수열의 향은 => {3, 7, 11, 15, 19, ...}

  // 1항 => 3
  // 2항 => 7
  // 3항 => 11 = 3 + (3-1) * 3 = 11
  // 4항 => 15 = 3 + (4-1) * 4 = 15
  // 5항 => 19
  // ...
  // n항 => a + ( n -1) * d
  // 3 + (4-1) * 4 = 15

  //        i    i
  //i = 0, n = 1 include[0] true => 1항계산해서 더하기
  //i = 1, n = 2 include[1] false => x
  //i = 2, n = 3 include[2] false => x
  //i = 3, n = 4 include[0] true => 4항계산해서 더하기
  //i = 4, n = 5 include[0] true => 5항계산해서 더하기
  //include[5] = 5 + 1항 의항 = 6항
  // ...

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += a + i * d;
    }
  }

  return answer;
}

solution(a, d, included);
