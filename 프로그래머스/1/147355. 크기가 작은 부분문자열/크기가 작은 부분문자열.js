function solution(t, p) {
    let answer = 0;
    
    for(let i = 0; i < t.length; i++){
        let strNum = "";
        for(let j = 0; j < p.length; j++){
           strNum += t[i + j]
        }
        if(Number(strNum) <= Number(p)) answer++
    }
    
    return answer
}
