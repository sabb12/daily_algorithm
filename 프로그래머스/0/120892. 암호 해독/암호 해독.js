function solution(cipher, code) {
    // var answer = '';
    // for(let i = code -1; i < cipher.length; i+=code){
    //     answer += cipher[i]
    // }
    // return answer;
    return [...cipher].filter((_,idx)=> (idx + 1) % code === 0).join("")
}