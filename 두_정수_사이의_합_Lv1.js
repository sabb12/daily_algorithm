function solution(a, b) {
  let answer = 0;
  let answer2 = [];

  // if(a === b) return a

  if (a <= b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let j = b; j <= a; j++) {
      answer += j;
    }
  }

  return answer;
}
