function solution(my_string, num1, num2) {
    let idx1 = my_string[num1];
    let idx2 = my_string[num2];
    let answer = "";
    
    for(let i = 0; i < my_string.length; i++){
        if(i === num1){
            answer += idx2
        }else if(i === num2){
            answer += idx1
        }else{
            answer += my_string[i]
        }

    }
   
    return answer;
}