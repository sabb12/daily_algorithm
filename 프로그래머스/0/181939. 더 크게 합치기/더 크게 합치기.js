function solution(a, b) {
    var answer = 0;
    return parseInt(a+""+b+"") > parseInt(b+""+a+"") ?  parseInt(a+""+b+"") : parseInt(b+""+a+"");
}