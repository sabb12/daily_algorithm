function solution(rny_string) {
    // var answer = "";
    // for(let i = 0; i < rny_string.length; i++){
    //     if(rny_string[i] === "m"){
    //         answer += "rn"
    //     }else{
    //        answer += rny_string[i]
    //     }
    // }
    // return answer;
    return rny_string.replaceAll(/m/g, "rn")
}