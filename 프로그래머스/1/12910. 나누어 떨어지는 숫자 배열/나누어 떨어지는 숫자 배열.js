function solution(arr, divisor) {
    arr = arr.sort((a,b)=> a - b);
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % divisor === 0){
            result.push(arr[i])
        }
    }
    
    return result.length === 0 ? [-1] : result;
}