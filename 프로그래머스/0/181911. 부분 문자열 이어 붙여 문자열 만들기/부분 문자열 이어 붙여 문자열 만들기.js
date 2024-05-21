function solution(my_strings, parts) {
    let answer = '';
    
    for(let i = 0; i < parts.length; i++){
            [one, two] = parts[i]
            answer += my_strings[i].slice(one, two + 1)
    }
    
    return answer;
}