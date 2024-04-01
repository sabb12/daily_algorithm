function solution(my_string, n) {
    let answer = my_string.length - n
    let result = ""
    for(let i = answer; i < my_string.length; i++){
        result += my_string[i]
    }
    return result;
}