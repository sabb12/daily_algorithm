function solution(s) {
  let result = 0;
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    s[i] == "(" && result++;
    s[i] == ")" && result--;
    if (result < 0) return false;
  }
  return result === 0;
}

// function solution(s){
//     let result = 0;
//     s = s.split("");

//     for(let i = 0; i < s.length; i++){
//         s[i] == "(" && result++
//         s[i] == ")" && result--
//         if(result < 0) return false
//     }
//     return result === 0
// }
