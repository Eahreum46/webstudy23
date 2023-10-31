//길이가 서로 다른 A,B,C 세 개의 막대/ 만들수있으면 true, 없으면 False

//2개의 변의 합이 가장 큰 변의 값보다 작으면 삼각형이 될 수 없다.

let a = parseInt(prompt(`첫 번째 숫자를 입력하세요`));
let b = parseInt(prompt(`두 번째 숫자를 입력하세요`));
let c = parseInt(prompt(`세 번째 숫자를 입력하세요`));

let sum = a + b;

let numTotal = (sum, c) => {
  let result;

  if (a < b) {
    result = a;
  } else {
    result = b;
  }
  if (c < result) {
    result = c;
  }
  return result;
};

console.log(numTotal(a, b, c));
