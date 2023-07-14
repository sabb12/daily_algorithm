
const arr = [0, 0, 0, 1];
// const arr = [1, 0, 0, 1, 0, 0];
// const arr = [1, 1, 1, 1, 0];


function solution(arr, idx) {
    
    for(let i = idx; i < arr.length; i++){
        if(arr[i] >= 1){
            return i
        }
    }
    return -1;
    // return  arr.indexOf(1, idx)
}

solution(arr, idx)