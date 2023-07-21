let chicken = 100;
// let chicken = 1081;

function solution(chicken) {
  //     let chickenCount = chicken;
  //     let freeCoupon = 0;

  //     while(chickenCount >= 10){
  //         freeCoupon += Math.floor(chickenCount / 10)
  //         chickenCount = Math.floor(chickenCount / 10) + chickenCount % 10
  //     }

  // return freeCoupon;

  return parseInt((chicken - 1) / 9);
}

solution(chicken);
