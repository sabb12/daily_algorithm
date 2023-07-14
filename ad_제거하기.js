
const strArr = ["and","notad","abcd"];

function solution(strArr) {
    var answer = [];
    
    // for(let i = 0; i < strArr.length; i++){
    //     console.log("str[i]",strArr[i].includes("ad"))
    //     if(!strArr[i].includes("ad")){
    //         answer.push(strArr[i])
    //     }
    // }
      // return answer;
       strArr = strArr.filter((x)=>{
        return x.indexOf("ad") == -1
    })
    return strArr;
}

solution(strArr)