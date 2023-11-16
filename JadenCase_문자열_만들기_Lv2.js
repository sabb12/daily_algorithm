function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.substring(1))
    .join(" ");
}

// function solution(s) {
//     let result = [];
//     s = s.toLowerCase().split(" ")

//     for(let i = 0; i < s.length; i++){
//         let newS = s[i].split("")
//         for(let k = 0; k < s[i].length; k++){
//             if(k === 0){
//                 newS[k] = newS[k].toUpperCase();
//             }
//         }
//         result.push(newS.join(""))

//     }
//     return result.join(" ")
// }

// function solution(s) {
//     let result = '';

//     for(let i = 0; i < s.length; i++){
//         console.log((i === 0 || s[i-1] === " "))
//         if(i === 0 || s[i-1] === " "){
//             result += s[i].toUpperCase()
//         }else{
//             result += s[i].toLowerCase()
//         }
//     }
//     return result;
// }
