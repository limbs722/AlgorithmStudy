function solution(lottos, win_nums) {
    var answer = [];
    
    let low = win_nums.filter(i => lottos.includes(i)).length; // 최저
    let high = lottos.filter(i => i === 0).length + low; // 최고
    
    low = (7 - low) > 6 ? 6 : (7 - low);
    high = (7 - high) > 6 ? 6 : (7 - high);
    
    answer = [high, low];
    return answer;
}