function solution(hp) {
//     let result = 0;

//     while(hp > 0){
//         if(Math.floor(hp / 5)){
//             result += 1
//             hp -= 5
//         }else if(Math.floor(hp / 3)){
//             result += 1
//             hp -= 3
//         }else{
//             result += 1
//             hp -= 1
//         }
//     }
//     return result;
    return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
}