function solution(n, k) {
    var answer = 0;
    return (n * 12000) + (k * 2000) - (Math.floor(n / 10) * 2000);
}

// 10인분 음료수 1개 서비스 준다
// 양꼬치 1인분: 12,000원 / 음료수는 2,000
