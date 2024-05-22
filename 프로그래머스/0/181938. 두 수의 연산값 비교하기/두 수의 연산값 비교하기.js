function solution(a, b) {
    var answer = 0;
    return Number(a.toString() + b.toString()) > 2 * (a * b) ? Number(a.toString() + b.toString()) : 2 * (a * b);
}