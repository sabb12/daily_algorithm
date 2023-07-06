
// b a n a n a => substring(5,6) => "a"
// b a n a n a => substring(5,6) => "na"
// b a n a n a => substring(5,6) => "ana"
// b a n a n a => substring(5,6) => "nana"
// b a n a n a => substring(5,6) => "anana"
// b a n a n a => substring(5,6) => "banana"

// b a n a n a => substring(i, my_string.length)

const my_string = "banana"
// const my_string = "programmers"

function solution(my_string) {
    let answer = [];

for(let i = 0; i < my_string.length; i++){
    answer.push(my_string.substring(i, my_string.length))
}
console.log(answer.sort())
}

solution(my_string)