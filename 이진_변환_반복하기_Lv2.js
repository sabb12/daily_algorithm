function solution(s) {
  let result = [0, 0];

  while (s !== "1") {
    let newS = s
      .split("")
      .filter((zero) => zero !== "0")
      .join("").length;
    result[0]++;
    result[1] += s.length - newS;
    s = newS.toString(2);
  }
  return result;
}
