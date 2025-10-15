# Day01 . 자바스크립트 기초 문제

## 변수

**1.** 다음 중 재할당이 불가능한 선언은?

A) `var a = 1`  B) `let a = 1`  C) `const a = 1`

- 정답: C -> const는 상수  

<br>

**2.** 아래 코드의 출력결과는?

```jsx
console.log(x);
var x = 10;
```

- 10 -> variable hoisting

<br>

**3.** 아래 코드에서 에러가 나는 줄은? 이유는?

```jsx
 console.log(y);
 let y = 3;
```

- 1번 줄: let 타입 변수이기에 변수 호이스팅이 일어나지 않아 y 변수가 선언되지 않은 상태에서 참조하였기 에러 발생

<br>

**4.** `const obj = { n: 1 };`

    obj 객체의 속성 n 의 값을 2로 변경하세요. 

- `obj.n = 2; or obj['n'] =2;`

<br>

**5.** 다음 중 올바른 식별자(변수명)가 아닌 것은?

A) `_count` B) `$value` C) `2nd` D) `camelCase`

- C -> 숫자가 앞에 오면 안 됨

<br>

**6.** 다음 코드의 결과?

```jsx
let a = 1;
a = a + 2;
console.log(a);
```

- 3

---

# 문자열

**7.** 템플릿 리터럴로 “Hello, JS!”를 만들 올바른 코드는?

A) `'Hello, ${"JS"}!'` B) ``Hello, ${"JS"}!`` C) `"Hello, ${"JS"}!"`

- B -> ` `를 이용해야 내장된 표현식을 허용할 수 있음

<br>

**8.** `"abc".length` 값은?

- 3

<br>

**9.** `"Hello".toLowerCase()` 결과는?

- 'hello'

<br>

**10.** `"  hi  ".trim()` 결과는?

- 'hi'

<br>

**11.** `"a,b,c".split(",")` 결과는?

- ['a', 'b', 'c']

<br>

**12.** `"abc".includes("b")` 는 `true`?

- true

<br>

**13.** `"cat".replace("c","b")` 결과는?

- 'bat'

---

# 조건문

**14.** 아래 출력결과는?

```jsx
console.log(2 == "2", 2 === "2");
```

- true false

<br>

**15.** 삼항연산자 결과는?

```jsx
const n = 5;
const r = n % 2 === 0 ? "even" : "odd";
```

- const r = 'odd';

<br>

**16.** `switch` 기본형에서 일치 비교에 쓰이는 것은?

A) `==`  B) `===`  C) 둘 다

- B -> 값과 타입이 모두 같아야 함

<br>

**17.** `&&` 단축 평가 결과:

```jsx
const ok = true && "DONE";
```

- const ok = 'DONE'; -> 왼쪽 true기 때문에 'DONE' 할당됨

---

# Object

**18.** 속성 접근 결과?

```jsx
const user = { name: "Ann", age: 17 };
console.log(user["name"]);
```

- 'Ann'

<br>

**19.** 키를 추가한 다음 코드의 결과는?

```jsx
const k = "score";
const obj = {};
obj[k] = 100;
console.log(obj.score);

```

- 100

<br>

**20.** 다음의 출력결과는?

```jsx
const a = { n: 1 };
const b = { n: 1 };
console.log(a === b);
```

- false -> 메모리 주소 비교기 때문

<br>

---

# Array

**21.** `const arr = [1,2,3]; arr.push(4);` 이후 `arr`는?

- [1,2,3,4]

<br>

**22.** `pop()`이 반환하는 것은?

- 4

<br>

**23.** `slice(1,3)`의 의미와 arr에 적용한 결과는?

- 배열의 특정 인덱스에 있는 값을 반환, 배열의 내용은 변환되지 않음 -> [2,3]

<br>

**24.** `splice(1,2)`의 의미와 arr에 적용한 결과는?

- 배열의 특정 인덱스에 있는 값을 반환, 배열의 내용이 변경됨(삭제됨) 1인데스, 2개 삭제 -> [1]

<br>

**25.** `map` 결과?

```jsx
[1,2,3].map(x => x * 2) 
```

- [2,4,6] -> map() 메서드는 호출한 배열의 모든 요소에 주어진 함수를 호출한 결과로 채운 새로운 배열을 생성

<br>

**26.** `filter` 결과?

```jsx
[1,2,3,4].filter(x => x % 2 === 0)
```

- [2,4] -> 2로 나눴을 때 나머지가 0인 것들만 필터링

<br>

**27.** `includes` 사용한 결과는?

```jsx
[1,2,3].includes(2)
```

- true -> 배열의 항목에 2가 포함되어 있는지 판단

<br>

**28.** `reduce` 결과는?

```jsx
[1,2,3].reduce((acc, cur) => acc + cur, 0)
```

- reduce() 메서드는 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환 -> 초기값: 0  누적값 구하기 -> 6

<br>

# Loop

**29.** `for (let i=0; i<3; i++) console.log(i);` 출력?

```
0
1
2
```

<br>

**30.** `for...of`는 어떤 것을 순회할때 효과적인가?

- 반복 가능한 객체의 값을 순회할 때 효과적 -> 예) Array, Map, Set, String, TypedArraym arguments 객체 등

<br>

**31.** `for...in`은 주로 무엇을 순회할때 효과적인가?

- 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성을 순회할 때 효과적 -> Object

<br>

**32.** 다음 코드의 마지막 `sum의 결과값은`?

```jsx
let i=1, sum=0;
while(i<=3){ sum+=i; i++; }

```

- 1+2+3 = 6

<br>

**33.** `for...of` 출력 결과는?

```jsx
for (const ch of "Hi") console.log(ch);
```

```
H
i
```

<br>

**34.** 빈칸에 들어갈 키워드는 무었인가?

```jsx
const arr = [10, 20, 30];
for (const num ___ arr) {
  console.log(num);
}

```

- of -> 값 순회해야 함

<br>

**35.** 아래 colors 배열의 요소값을 순서대로 출력하는 반복문을작성하세요

```jsx
const colors = ["red", "green", "blue"];

```

```
for(let color of colors){
	console.log(color);
}
```

<br>

**36.** 아래  str의 요소를 순회하여 출력하는 반복문을 작성하세요.

```jsx
const str = "JS";
```

```
for(let ch of str){
	console.log(ch);
}
```

<br>

**37.** 배열 scores의 점수에 대한  총점과 평균을 구하여 출력하는 코드를 작성하세요.

```jsx
const scores = [90, 80, 70];
```

```
let sum = 0;
let count = 0;
for(let score of scores){
	sum += score;
	count++;
}
console.log("총점: " + sum);
console.log("평균: " + sum/count);
```

---

**38.** 배열 nums 의 요소값 출력을 2번째 인덱스의 값까지만 출력하는 코드를 작성하세요

```jsx
const nums = [1, 2, 3];
```

```
for(let i = 0; i<2;i++){
	console.log(nums[i]);
}
```

<br>

**39.** user 객체의 정보를 출력하는 반복문을 작성하세요.

```jsx
const user = { name: "Yumi", age: 20 }; 
```

```
for(let [key, value] of Object.entries(user)){
	console.log(key + " : " + value);
}
```

<br>

**40.** arr 배열의 요소값을 forEach문을 이용하여 출력하세요.

```jsx
const arr = [1, 2, 3];
```

```
arr.forEach((value) => {console.log(value);});
```

<br>

**41.** `Map 이란`?

- Map 객체는 키와 값을 한 쌍으로 이루어진 컬렉션으로, 한 Map에서의 키는 오직 단 하나만 존재한다.

<br>

**42.** `Set`이란?

- Set 객체는 중복되지 않는 값들의 집합

<br>

**43.** 아래 `Map의 결과는?`

```jsx
const m = new Map();
const k = {};
m.set(k, 123);
console.log(m.get(k));
```

- 123 -> 메모리 주소를 키로 사용하는 것이기에 가능, 즉 {Object => 123}

<br>

**44.** 아래`Set의 결과는?`

```jsx
const s = new Set([1,2,2,3]);
s.add(3);
console.log(s.size);
```

- 3 -> 중복되는 값들은 저장하지 않음

<br>

**45.** `Map` 크기 확인 프로퍼티는?

- .size
---