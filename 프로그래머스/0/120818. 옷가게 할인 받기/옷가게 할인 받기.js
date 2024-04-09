function solution(price) {
    let result = 0;
    if(price >= 500000){
        return Math.floor(price * 0.8)
    }else if(price >= 300000){
        return Math.floor(price * 0.9)
    }else if(price >= 100000) {
        return Math.floor(price * 0.95)
    }else{
        return price
    }
    
}


// if(price >= 100000) {
//         result = price * 0.05
//     }else if(price >= 300000){
//         result = price * 0.1
//     }else if(price >= 500000){
//         result = price * 0.2
//     }