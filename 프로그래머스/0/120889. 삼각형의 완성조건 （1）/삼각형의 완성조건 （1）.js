function solution(sides) {
    return sides.sort((a,b)=> b - a)[0] >= sides.sort((a,b)=> b - a)[1] + sides.sort((a,b)=> b - a)[2] ? 2 : 1;
}