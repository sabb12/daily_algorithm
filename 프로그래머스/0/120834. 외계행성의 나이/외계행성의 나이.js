function solution(age) {
    // let answer = '';
    // age = age.toString()
    // for(let i = 0; i < age.length; i++){
    //    if(age[i] === "0"){
    //        answer += "a";
    //    }else if(age[i] === "1"){
    //        answer += "b";
    //    }else if(age[i] === "2"){
    //        answer += "c";
    //    }else if(age[i] === "3"){
    //        answer += "d";
    //    }else if(age[i] === "4"){
    //        answer += "e";
    //    }else if(age[i] === "5"){
    //        answer += "f";
    //    }else if(age[i] === "6"){
    //        answer += "g";
    //    }else if(age[i] === "7"){
    //        answer += "h";
    //    }else if(age[i] === "8"){
    //        answer += "i";
    //    }else if(age[i] === "9"){
    //        answer += "j";
    //    }
    // }
    
    // return answer;
    
    return age.toString().split("").map(num => "abcdefghij"[num]).join("")
}