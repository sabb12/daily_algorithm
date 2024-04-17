function solution(s){
    
    s = s.toLowerCase()
    let y  = 0;
    let p = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "p"){
            p++
        }else if(s[i] === "y"){
            y++
        }
    }

    return y === p ? true : false
}