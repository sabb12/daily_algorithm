function solution(numbers, direction) {
    let answer = [];
    
    if(direction === "right"){
        return numbers.splice(-1,1).concat(numbers)
    }else{
        return numbers.concat(numbers.splice(0,1))
    }
    
    // return answer;
}