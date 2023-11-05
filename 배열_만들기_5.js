const intStrs = ["0123456789","9876543210","9999999999999"];

function solution(intStrs, k, s, l) {
   let answer = []
   
   for(let i = 0; i < intStrs.length; i++){
       let indexSliced = intStrs[i].slice(s, s + l);
       if(indexSliced > k){
           answer.push(Number(indexSliced))
       }

   }
   
    return answer
}

solution(intStrs, k, s, l)