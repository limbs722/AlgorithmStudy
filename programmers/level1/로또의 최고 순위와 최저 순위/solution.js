const lottos = [44, 1, 0, 0, 31, 25]; // input example
const win_nums = [31, 10, 45, 1, 6, 19]; // win numbers example

const solution = (lottos, win_nums) => {
  var answer = [];

  let low = win_nums.filter((i) => lottos.includes(i)).length; // 최저
  let high = lottos.filter((i) => i === 0).length + low; // 최고

  low = 7 - low > 6 ? 6 : 7 - low;
  high = 7 - high > 6 ? 6 : 7 - high;

  answer = [high, low];
  return answer;
};

const output = solution(lottos, win_nums);
console.log(output);
