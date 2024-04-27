function solution(s) {
    let answer = s.split(" ").sort((a,b) => Number(a) - Number(b));
    return answer[0] + " " + answer[answer.length - 1];
}