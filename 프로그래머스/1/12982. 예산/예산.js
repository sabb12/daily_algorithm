function solution(d, budget) {
    
    let answer = 0;
    for(let i = 0; i < d.sort((a, b) => a - b).length; i++){
      if(budget - Number(d[i]) > 0){
         budget -= Number(d[i])
         answer ++
      }else if(budget - Number(d[i]) === 0){
         budget -= Number(d[i])
         answer++
      }
    }
    
    return answer;
    
}