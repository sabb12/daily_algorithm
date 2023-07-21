const num_list = [1, 2, 3, 4, 5, 6, 7, 8];
const n = 2;
// const num_list = [100, 95, 2, 4, 5, 6, 18, 33, 948];
// const n = 3;

function solution(num_list, n) {
  let answer = [];
  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }
  return answer;
}

solution(num_list, n);
