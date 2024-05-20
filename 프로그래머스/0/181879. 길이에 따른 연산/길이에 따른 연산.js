function solution(num_list) {
//     if(num_list.length > 10){
//         num_list = num_list.reduce((acc, cur) => acc + cur,0)
//     }else{
//         num_list = num_list.reduce((acc, cur) => acc * cur,1) 
//     }

//     return num_list
    
    return num_list.length > 10 ? num_list.reduce((acc, cur) => acc + cur,0) : num_list.reduce((acc, cur) => acc * cur,1) 
}