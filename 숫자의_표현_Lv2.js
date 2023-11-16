function solution(n) {
  let result = 0;
  let count = 0;
  while (n > 0) {
    count++;
    if (n % count === 0) result++;
    n -= count;
  }
  return result;
}

// function solution(n) {

//     let answer = 0;

//     for(let i = 0; i <= n; i++){
//         if(n%i === 0 && i % 2 === 1) answer++
//     }
//     return answer
// }
