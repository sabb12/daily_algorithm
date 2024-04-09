function solution(numbers) {
    let result = numbers.sort((a,b)=> b - a)
    let maxFront = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    let maxBack = numbers[0] * numbers[1];
    return Math.max(maxFront, maxBack);
}