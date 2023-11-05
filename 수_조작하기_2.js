
const numLog = [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1];

function solution(numLog) {
    var answer = '';
    
    // "w": + 1
    // "s": - 1
    // "d": + 10
    // "a": - 10
    for(let i = 0; i < numLog.length; i++) {
        if(numLog[i+1] - numLog[i] === 1) {
            answer += "w"
        } else if (numLog[i+1] - numLog[i] === -1) {
            answer += "s"
        } else if (numLog[i+1] - numLog[i] === 10) {
            answer += "d"
        } else if (numLog[i+1] - numLog[i] === -10) {
            answer += "a"
        }
    }
    return answer;
}

solution(numLog)