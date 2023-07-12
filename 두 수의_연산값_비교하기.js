
const a  = 2;
const b = 91;
// const a  = 91;
// const b = 2;

function solution(a, b) {
    let num1 = a.toString() + b.toString();
    let num2 = 2 * (a * b);
    return num1 > num2 ? Number(num1) : num2

}

solution(a, b)