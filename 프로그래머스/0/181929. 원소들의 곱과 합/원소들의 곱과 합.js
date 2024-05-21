function solution(num_list) {
    var answer = 0;
    return num_list.reduce((acc,cur)=> acc * cur,1) > num_list.reduce((acc,cur)=> acc + cur,0) * num_list.reduce((acc,cur)=> acc + cur,0) ? 0 : 1;
}