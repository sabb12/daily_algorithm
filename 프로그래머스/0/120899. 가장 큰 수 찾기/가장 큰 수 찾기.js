function solution(array) {
    var answer = [];
    for(let i = 0; i < array.length; i++){
        let preNum = array[i]
        if(array[i + 1] > preNum){
           answer = [array[i + 1], i + 1]
        }
        
    }
    return answer
}