function solution(babbling) {
    var answer = 0;
    
    var words = ['aya', 'ye', 'woo', 'ma'];
    
    for (i in babbling) {
        let babble = babbling[i];
        for (j in words) {
            babble = babble.replace(words[j], 'X');
        }
        
        babble = babble.replace(/X/gi, '');
        if (babble.length === 0) {
            answer += 1
        }
        console.log(babble)
    }
    
    
    return answer;
}