function solution(left, right) {
    
    let numberList = [];
    let result = 0;
    for(let i = left; i <= right; i++){
        numberList.push(i)
    }
    
    for(let j = 0; j < numberList.length; j++){
        let count = 0;
        for(let z = 0; z < numberList[j]; z++){
            if(numberList[j] % z === 0){
                count++
            }
        }
        if(count % 2 === 0){
            result -= numberList[j]
        }else{
            result += numberList[j]
        }
    }
     
    
    return result;
}