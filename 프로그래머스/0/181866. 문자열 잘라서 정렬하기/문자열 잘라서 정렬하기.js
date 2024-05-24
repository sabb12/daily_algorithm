function solution(myString) {
    return myString.split("x").filter(space => space !== "").sort();
}