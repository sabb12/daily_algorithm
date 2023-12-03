function solution(numbers) {
    let answer = 0;
    
    numbers = numbers.sort((a,b) => a - b);
    
    for(let i = 0; i <= 9; i++){
        numbers.includes(i) ? answer += 0 : answer += i
    }
    
    return answer;
}