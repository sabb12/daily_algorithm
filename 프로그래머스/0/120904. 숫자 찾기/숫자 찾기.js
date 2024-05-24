function solution(num, k) {
    let answer = 0;
    num = num.toString();
    
    for(let i = 0; i < num.length; i++){
        if(num[i] === k+""){
            answer = i + 1
            break;
        }else{
            answer = -1
        }
    }
    
    return answer;
}