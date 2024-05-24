function solution(binomial) {

    let answer = 0;
    const [num1, operator, num2 ]= binomial.split(" ").filter(space => space !== " ")
    
    if(operator === "+"){
       answer = Number(num1) + Number(num2)
    }else if(operator === "-"){
        answer = Number(num1) - Number(num2) 
    }else{
         answer = Number(num1) * Number(num2)
    }
    
    return answer;
}