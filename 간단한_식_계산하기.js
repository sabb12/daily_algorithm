
let binomial = "43 + 12"
// let binomial = "0 - 7777"
// let binomial = "40000 * 40000"

function solution(binomial) {
    const [num1, op, num2] = binomial.split(' ');
    switch(op){
        case "+": return Number(num1) + Number(num2);
        case "-": return Number(num1) - Number(num2);
        case "*": return Number(num1) * Number(num2);
    }
    // "a op b"형태의 이상식이고
    // a 와 b = 정수
    // op = "+", "-", "*" 중 하나다 
    // switch
    // op === "+"
      // return a + b
    // op === "-"
      // return a - b
    // op === "*"
      // return a * b
    
    return answer;
}

solution(binomial)