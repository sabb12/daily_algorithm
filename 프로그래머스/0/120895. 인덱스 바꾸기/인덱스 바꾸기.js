function solution(my_string, num1, num2) {

//     let answer = "";
    
//     for(let i = 0; i < my_string.length; i++){
//         if(i === num1){
//             answer += my_string[num2]
//         }else if(i === num2){
//             answer += my_string[num1]
//         }else{
//             answer += my_string[i]
//         }

//     }
   
//     return answer;
    my_string = my_string.split("");
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]]
    
    return my_string.join("")

}