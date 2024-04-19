function solution(numbers) {
    let answer = numbers.sort((a,b)=> a - b);
    let sum = 0;
    for(let i = 0; i <= 9; i++){
      console.log(answer[i] !== i || answer[i] === undefined)
           
        
    }
    
    return answer;
}