function solution(numbers) {
    const result = numbers.sort((a,b) => b - a)
    return numbers[0] * numbers[1];
}