function solution(num_list) {
    let evenNumber = "";
    let oddNumber = "";
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            oddNumber += num_list[i]
        }else{
            evenNumber += num_list[i]
        }
    }
    return Number(evenNumber) + Number(oddNumber);
}