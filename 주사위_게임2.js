
const a = 2;
const b = 6;
const c = 1;

// const a = 5; 
// const b = 3;
// const c = 3;

// const a = 4;
// const b = 4;
// const c = 4;


function solution(a, b, c) {
    var answer = 0;
    // 세 숫자 !== 
       // a + b + c
    // 세 숫자 중 두 숫자 같을 경우
       // (a + b + c) × (a2 + b2 + c2 )
    // 세 숫자가 모두 ===
       // (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )
    if(a !== b || b !== c || a !== c){
        answer = a + b + c
    }
    
    if(a === b || b === c || a === c){
        answer = (a + b + c) * (Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2))
    }
    
     if(a === b && b === c && a === c){
        answer = (a + b + c) * (Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2)) * (Math.pow(a,3) + Math.pow(b,3) + Math.pow(c,3))
    }
    return answer;
}

solution(a, b, c)