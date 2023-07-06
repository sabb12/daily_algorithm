
let arr = [1,2,3,4,5];
let intervals = [[1, 3], [0, 4]];

function solution(arr, intervals) {
    var answer = [];
    // intervals = [[a1, b1], [a2, b2]]
    // 구간1 = interval[0] = [1,3]
    // 구간2 = interval[1] = [0,4]
    
    // 구간1 = [1,3]
    // 구간1[0]
    // 구간1[1]
    
    // arr.slice(구간1[0], 구간[1])
    const arr1 = arr.slice(intervals[0][0], intervals[0][1] + 1)
   
    const arr2 = arr.slice(intervals[1][0], intervals[1][1] + 1)
    return arr1.concat(arr2);
}

solution(arr, intervals)