function solution(n) {
    let nToString = n.toString();
    let result = 0;
    for(let i = 0; i < nToString.length; i++){
        result += Number(nToString[i])
    }
    return result;
}