function solution(num_list) {
    var answer = [];
    
    num_list[num_list.length -2] >= num_list[num_list.length -1] ?
    answer.push(num_list[num_list.length -1] * 2) :
    answer.push(num_list[num_list.length -1] - num_list[num_list.length -2]) 
    
    return  num_list.concat(answer) ;
}