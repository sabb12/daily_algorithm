function solution(myString) {
    var answer = [];
    return myString.split("x").sort().filter(space => space !== "");
}