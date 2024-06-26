function solution(arr1, arr2) {
   if(arr1.length === arr2.length){
        const arr1Sum = arr1.reduce((acc, curr)=> acc+curr);
        const arr2Sum = arr2.reduce((acc, curr)=> acc+curr);
        
        return arr1Sum === arr2Sum ? 0: arr1Sum > arr2Sum  ? 1: -1 ;
    }else{
        return arr1.length > arr2.length ? 1 : -1;
    }
}