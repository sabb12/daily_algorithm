

const number = "123";
// const number = "78720646226947352489";

function solution(number) {
   
    return number.split('').reduce((acc, cur) => { return (acc + Number(cur)) % 9},0)
}

solution(number)