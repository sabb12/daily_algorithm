
const before = "olleh";
const after =  "hello";

// const before = "allpe";
// const after =  "apple";

function solution(before, after) {
 
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}

solution(before, after)