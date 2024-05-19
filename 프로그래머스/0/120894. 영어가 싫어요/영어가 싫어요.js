function solution(numbers) {
    let numberList = ["zero", "one", "two", "three", "four", 
                      "five", "six", "seven", "eight", "nine"]
//     for(let i = 0; i < numbers.length; i++){
//        numbers = numbers.split(numberList[i]).join(i)
//     }
    
//     return Number(numbers);
    numberList.forEach((num, idx) => {numbers = numbers.split(num).join(idx)})
    return Number(numbers)
}