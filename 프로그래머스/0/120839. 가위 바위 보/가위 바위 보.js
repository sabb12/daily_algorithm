function solution(rsp) {
//     var answer = '';
//     for(let i = 0; i < rsp.length; i++){
//         if(rsp[i] === "2"){
//             answer += "0"
//         }else if(rsp[i] === "0"){
//             answer += "5";
//         }else if(rsp[i] === "5"){
//             answer += "2"

//         }
//     }
//     return answer;
   
    const object = {
        2: 0,
        0: 5,
        5: 2,
    }
    return [...rsp].map(i => object[i]).join("")
    
}