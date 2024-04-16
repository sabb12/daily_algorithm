function solution(num_list) {
    var answer = [];
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] > num_list[i + 1]){
            let preview = num_list[i]
            num_list[i] = num_list[i + 1]
            num_list[i+1] = preview
            i = -1
        }
    }
    return num_list.slice(0,5);
}