function solution(d, budget) {
    // 방법 1
    let answer = 0;
    
    for (let i = 0; i < d.length - 1; i++) {
        for (let j = 0; j < d.length - 1 - i; j++) {
            if (d[j] > d[j + 1]) {
                let temp = d[j];
                d[j] = d[j + 1];
                d[j + 1] = temp;
            }
        }
    }
    for(let i = 0; i < d.length; i++){
      if(budget >= d[i]){
         budget -= d[i]
         answer++;
      }else{
         break;   
      }
    }
    return answer;
    // 방법 2
    
  //   let count = 0;
  //    d.sort((a, b) => a - b).map((price) => {
  //   if (budget >= price) {
  //     budget -= price;
  //     count++;
  //   }
  // });
  //   return count
}