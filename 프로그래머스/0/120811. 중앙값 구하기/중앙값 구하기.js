function solution(array) {

        for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        // 현재 요소와 다음 요소 비교하여 정렬
        if (array[j] > array[j + 1]) {
            // 현재 요소가 다음 요소보다 크면 위치 교환
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

return array[(array.length / 2) - 0.5]; 
    
    
    
    // return array[Math.floor(array.sort((a,b)=> a - b).length / 2)]


}