function solution(s1, s2) {
    // let result = 0;
    // for(let i = 0; i < s2.length; i++){
    //    for(let k = 0; k < s1.length; k++){
    //        if(s2[i] === s1[k]){
    //            result++
    //        }
    //    }
    // }
    // return result
    return s2.filter(s => s1.includes(s)).length
}