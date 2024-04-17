function solution(n) {
    var answer = 0;
    return Number.isInteger(Math.sqrt(n)) ? (Math.floor(Math.sqrt(n)) + 1) * (Math.floor(Math.sqrt(n)) + 1) : -1
}