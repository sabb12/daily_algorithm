function solution(s) {
    let array = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    let answer = s;
    for(let i = 0; i < array.length; i++){
         let newArray = answer.split(array[i]);
         answer = newArray.join(i)
    }

    return Number(answer);
}