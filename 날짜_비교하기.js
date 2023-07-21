const date1 = [2021, 12, 28];
const date2 = [2021, 12, 29];

// const date1 = [1024, 10, 24];
// const date2 = [1024, 10, 24];

function solution(date1, date2) {
  return !(Number(date1.join("")) >= Number(date2.join(""))) ? 1 : 0;
}

solution(date1, date2);
