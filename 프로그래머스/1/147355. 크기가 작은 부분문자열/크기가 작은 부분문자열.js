function solution(t, p) {
    let answer = 0;
    
    for(let i = 0; i <= t.length - p.length; i++){
       let strNum = t.substr(i, p.length)
       if(Number(strNum) <= Number(p)) answer++
    }
    return answer
}
