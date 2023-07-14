
const code = "abc1abc1abc";

function solution(code) {
    var answer = '';
    let mode = 0;
    // 0,1,2,3,4,5,6,7,8,9,0
    //"a,b,c,1,a,b,c,1,a,b,c"
    for(let i = 0; i < code.length; i++){
    console.log("i",i ,"// mode", mode, "// code", code[i]=== "1")
     if(mode === 0){
         if(code[i] !== "1" && i % 2 === 0){
              answer += code[i]
         }
         if(code[i] === "1"){
             mode = 1
             continue;
         }
     }
     if(mode === 1){
         if(code[i] !== "1" && i % 2 === 1){
             answer += code[i]
         }
         if(code[i] === "1"){
            mode = 0
         }
     }
    console.log("rect", answer,"///mode" ,mode)
    }
    
    
    
    return answer;
}

solution(code)