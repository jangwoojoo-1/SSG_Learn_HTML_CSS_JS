// 1. 변수 __ 오늘의 할인율은 변하지 않습니다. 어떤 선언이 맞을까요?
const discount = 0.1;

// 2. 숫자 연산 __ 사과(개당 1,500원) 3개. 총액은?
const price = 1500;
const qty = 3;
let totalPrice = price * qty;
console.log(totalPrice);
// 4500

// 3. 조건문 __ 바나나 재고가 0 이하이면 "품절", 그 외는 "구매 가능"
const stock = 0;
if (stock <= 0) console.log('품절');
else console.log('구매 가능');

stock = 0;
console.log(stock <= 0 ? '품절' : '구매 가능');
// 품절

// 4. 배열 __ 진열대에 ['사과', '배']가 있습니다. push('바나나' 후 길이는?)
const fruits = ['사과', '배'];
fruits.push('바나나');
console.log(fruits.length);
// 3

// 5. 객체 __ 반복문 복합 const item = {name: '귤', price: 1200}; 가격을 꺼내어 총액를 구하는 코드를 작성하세요.
// item 객체를 값으로 가진 items 배열에서 값 가져오기
const item1 = { name: '귤', price: 1200 };
const item2 = { name: '사과', price: 2000 };
const items = [item1, item2];
totalPrice = 0;
for (const item of items) {
  totalPrice += item.price;
}
console.log(totalPrice);

// 배열 순회해서 key 가져와 key가 price면 값 더하기
const item = { name: '귤', price: 1200 };
totalPrice = 0;
for (const i in item) {
  if (i === 'price') totalPrice += item[i];
}
console.log(totalPrice);

// 배열에서 값 가져오기
totalPrice = item.price;
console.log(totalPrice);

// 6. 배열 반복문 __ 가격 배열 [1000, 2000, 1500]의 합계를 for ... of 로 코드를 작성
const prices = [1000, 2000, 1500];
sum = 0;
for (let price of prices) {
  sum += price;
}
console.log(sum);

// 7.  Map__ 품목별 가격을 아래와 같이 Map 에 저장하고 각 품목별 과일이름과 가격 리스트를 출력
const map = new Map([
  ['귤', 1200],
  ['바나나', 2000],
]);
for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}

// 8. Set__ 품목별 바코드가 [101, 101, 203, 103, 103, 103]일 때 중복 제거하여 저장 바코드 리스트와 총 개수 출력
const set = new Set([101, 101, 203, 103, 103, 103]);
set.forEach((value) => {
  console.log(value);
});
console.log(set.size);

//9. 정답: for ... of
const array = [100, 200, 300];
for (let i in array) {
  console.log(i);
}
for (let i of array) {
  console.log(i);
}
