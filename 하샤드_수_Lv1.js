function solution(x) {
  return x %
    String(x)
      .split("")
      .map((num) => Number(num))
      .reduce((acc, cur) => acc + cur, 0)
    ? false
    : true;
}
