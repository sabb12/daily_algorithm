function solution(price, money, count) {
    var answer = [];
    let sum = 0
    for(let i = 0; i < count; i++){
        answer.push(sum += price)
    }
    
    // let total = answer.reduce((acc, cur)=> acc + cur, 0) - money

    return  answer.reduce((acc, cur)=> acc + cur, 0) - money >= 0 ? answer.reduce((acc, cur)=> acc + cur, 0) - money : 0;
}