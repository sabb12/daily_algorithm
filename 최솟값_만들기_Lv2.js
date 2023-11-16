function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  let result = A.reduce((acc, cur, i) => acc + cur * B[i], 0);
  return result;
}

// function solution(A,B){
//    let result = 0;
//      A.sort((a,b) => a - b)
//      B.sort((a,b) => b - a)

//     for(let i = 0; i < A.length; i++){
//        result +=  A[i] * B[i]
//     }
//     return result
// }
