
const num = 29183;
const k = 1;

// const num = 232443;
// const k = 4;

// const num = 123456;
// const k = 7;

function solution(num, k) {
    var answer = [...num.toString()];
    for(let i = 0; i < answer.length; i++){
        if(Number(answer[i]) === k){
            return i + 1
        } 
    }
    return -1;
}

solution(num, k)