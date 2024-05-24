function solution(arr, intervals) {
    var answer = [];
    
    for(let i = 0; i < intervals.length; i++){
          const [index1, index2] = intervals[i]
            answer.push(...arr.slice(index1, index2 + 1))
    }
    return answer;
}