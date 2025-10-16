# Day02 자바스크립트 기초 점검 (40문제)

## 자바스크립트 함수

---

1 다음 중 함수를 정의하는 올바른 방법은?

A) function = myFunc() {}

B) function myFunc() {}

C) def myFunc() {}

D) var function myFunc() {}

- B -> 함수 선언문

<br>

---

2 함수를 호출(call)한다는 것은?

A) 함수를 복사한다

B) 함수를 삭제한다

C) 함수를 실행한다

D) 함수를 주석 처리한다

- C

<br>

---

3 다음 중 함수의 반환값(return value)을 올바르게 사용하는 것은?

A) return x + y;

B) print(x + y);

C) echo(x + y);

D) output(x + y);

- A -> return 반환값; 이 옳은 형태

<br>

---

4 다음 중 함수의 매개변수(parameter)에 대한 설명으로 옳은 것은?

A) 함수 외부에서만 사용 가능하다.

B) 함수 내부에서 전달받은 값을 저장하는 변수이다.

C) 항상 숫자여야 한다.

D) return 문 뒤에서 선언해야 한다.

- B -> 원시 타입 값 복사, 객체 타입 메모리 참조

<br>

---

5 다음 중 기본적인 함수 호출 형태는?

A) function()myFunc;

B) myFunc[];

C) myFunc();

D) function myFunc;

- C -> 함수 이름과 () 안에 매개변수 작성해서 호출

<br>

---

6 다음 중 함수의 실행이 종료되는 즉시 반환되는 키워드는?

A) stop

B) return

C) end

D) break

- B -> 함수 종료 시 return 값 반환

---

7 함수에서 반환값이 없을 때 반환되는 기본 값은?

A) null

B) 0

C) undefined

D) false

- C -> null이 아닌 undefined 반환

<br>

---

8 다음 중 익명 함수(Anonymous Function)를 정의한 것은?

A) function() { console.log("Hello"); }

B) function sayHello() { console.log("Hi"); }

C) var say = function sayHello() {};

D) function = hello() {};

- A -> 함수 이름 X

<br>

---

9 함수 선언식(Declaration)과 함수 표현식(Expression)의 차이는?

A) 선언식은 호이스팅(hoisting)된다.

B) 표현식은 선언 전에 사용 가능하다.

C) 둘 다 동일하게 동작한다.

D) 표현식은 `return`이 불가능하다.

- A -> 표현식은 호이스팅되지 않음

<br>

10 아래 함수의 결과는?

```jsx
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
```

A) 23

B) 5

C) "2+3"

D) undefined

- B -> 2 + 3 = 5

<br>

11 다음 코드의 출력값은?

```jsx
function greet(name) {
  return 'Hi ' + name;
}
console.log(greet('Yumi'));
```

A) Hi + name

B) "Hi name"

C) Hi Yumi

D) undefined

- C -> + 연산자로 하나의 문자열로 합쳐진 값 반환

<br>

12 다음 중 기본 매개변수를 사용하는 올바른 예시는?

A) function f(a=10, b){}

B) function f(a,b=10){}

C) function f(a,b==10){}

D) function f(a,b=10:){}

- B -> 보통 기본 값이 없는 매개변수는 앞에 둠

<br>

13 함수 내부에서 선언된 변수는 어떤 범위를 가진다?

A) 전역 범위

B) 지역 범위

C) 파일 전체

D) 함수 외부

- B -> 함수가 종료되면 수명 끝

<br>

14 다음 중 전역변수(global variable)의 올바른 사용은?

A) 함수 안에서만 사용된다.

B) 함수 외부에서 선언되어 모든 함수가 접근 가능하다.

C) return 뒤에서만 가능하다.

D) 블록 안에서만 유효하다.

- B -> A: 지역변수, C: X, D: 블록 스코프

<br>

15 아래 코드의 결과는?

```jsx
let x = 10;
function test() {
  let x = 5;
  console.log(x);
}
test();
```

A) 10

B) 5

C) undefined

D) 오류 발생

- B -> console.log에서 출력하는 것은 함수 내부에서 존재하는 지역변수

<br>

16 아래 코드의 결과는?

```jsx
function square(x) {
  return x * x;
}
console.log(square());
```

A) NaN

B) undefined

C) 0

D) Error

- A -> undefined \* undefined -> NaN

<br>

17 화살표 함수(Arrow Function)를 정의한 올바른 예시는?

A) const add = (a,b) => a + b;

B) function add(a,b) => a + b;

C) add = (a,b) { return a + b; }

D) const add(a,b) -> { return a+b }

- A -> B: 함수 이름과 화살표 같이 사용할 수 없음, C: 함수 표현식, D: 화살표는 =>이며, 함수 이름과 화살표 같이 사용 X

<br>

18 아래 코드의 결과는?

```jsx
const multiply = (a, b = 2) => a * b;
console.log(multiply(5));
```

A) 10

B) 7

C) 5

D) Error

- A -> 매개변수가 하나기 때문에 a=5, b는 기본값인 2 -> 5 \* 2 = 10

<br>

19 아래 중 함수 표현식에 대한 설명으로 올바른 것은?

A) 반드시 이름이 있어야 한다.

B) 선언 전에 호출해도 된다.

C) 변수에 할당할 수 있다.

D) return문을 쓸 수 없다.

- C -> const sum = function(a,b){return a+b;}

<br>

20 아래 코드의 출력은?

```jsx
var say = function () {
  return 'Hello';
};
console.log(say());
```

A) Hello

B) undefined

C) say

D) Error

- A -> say() 함수 반환값이 'Hello'

<br>

21 콜백 함수(Callback Function)란?

A) 호출되지 않는 함수

B) 함수의 인수로 전달되는 함수

C) 반환되는 함수

D) 전역함수

- B -> 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수가 콜백 함수

<br>

22 다음 중 콜백함수 사용의 예시는?

```jsx
function run(fn) {
  fn();
}
run(?);
```

A) fn(){}

B) run();

C) function() { console.log("done"); }

D) call fn

- C -> 함수가 들어와야 함

<br>

23 아래 코드의 결과는?

```jsx
function outer() {
  function inner() {
    return 'inside';
  }
  return inner();
}
console.log(outer());
```

A) outer

B) inner

C) inside

D) undefined

- B -> inner() 반환값 'inside' -> outer() 반환값 'inside'

<br>

24 다음 중 즉시 실행 함수(IIFE)의 올바른 예시는?

A) function test()();

B) function(){}();

C) (function(){ console.log("run"); })();

D) run(){};

- C -> 표현식 ()로 감싸고 뒤에서 ()안에 매개변수를 받음

<br>

25 아래 코드의 출력은?

```jsx
(function (a, b) {
  console.log(a + b);
})(3, 4);
```

A) 7

B) 34

C) undefined

D) Error

- A -> 3 + 4 = 7

<br>

26 아래 코드의 결과는?

```jsx
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
console.log(add5(2));
```

A) 2

B) 5

C) 7

D) undefined

- C -> const add5 = makeAdder(5); -> const add5 = function(y){return 5 + y;} -> add5(2) = 5 + 2 = 7

<br>

27 클로저(Closure)의 특징은?

A) 함수 외부 변수를 수정할 수 있다.

B) 함수 내부의 변수를 외부에서 직접 접근할 수 있다.

C) 외부 함수의 변수를 기억하는 함수이다.

D) return이 없는 함수이다.

- C -> 외부 함수의 스코프를 기억하는 것이 클로저의 특징

<br>

28 아래 코드의 출력은?

```jsx
function counter() {
  let num = 0;
  return function () {
    num++;
    return num;
  };
}
const c = counter();
console.log(c());
console.log(c());
```

A) 1,1

B) 0,1

C) 1,2

D) 2,3

- C -> function의 num은 counter() 함수 내의 num -> 처음에 0 + 1 = 1 값 반환 -> 두 번째에 1 + 1 = 2 값 반환

<br>

29 다음 중 함수가 일급 객체(First-Class Object)라는 뜻이 아닌 것은?

A) 변수에 저장 가능

B) 매개변수로 전달 가능

C) 반환값으로 사용 가능

D) 반드시 이름을 가져야 함

- D -> 익명 함수로 정의 가능

<br>

30 setTimeout() 함수에 전달되는 첫 번째 인수는?

A) 시간

B) 함수

C) 문자열

D) 숫자

- B -> 첫 번째 인수로 콜백 함수를 받고, 두 번째 인수로 대기 시간을 받음

<br>

31 아래 코드의 출력은?

```jsx
function sayHi() {
  console.log(this);
}
sayHi();
```

A) 전역 객체(window)

B) undefined

C) null

D) 빈 객체

- A -> 일반함수로 호출 -> this는 전역 객체(상위 객체)에 바인딩됨 -> 브라우저 환경 window 객체 (호출될 때 this가 정의됨)

<br>

32 화살표 함수에서 this는?

A) 새로운 this를 바인딩한다

B) 상위 스코프의 this를 사용한다

C) 항상 undefined이다

D) 전역 객체를 가리킨다

- B -> 렉시컬 스코프 this 바인딩 ( 정의될 때 this가 정의)

33 map() 함수의 인수는?

A) 콜백 함수

B) 객체

C) 숫자

D) 배열

- A -> map() 함수는 기존 배열에 콜백 함수를 적용해서 새 배열을 만드는 함수

<br>

34 filter() 함수의 반환값은?

A) 조건을 만족하는 요소만 모은 새 배열

B) true/false

C) 객체

D) 문자열

- A -> filter() 함수는 기존 배열에서 조건을 만족하는 배열을 필터링하여 새 배열을 만드는 함수

<br>

35 아래 코드의 출력은?

```jsx
[1, 2, 3].map((x) => x * 2);
```

A) [2,4,6]

B) [1,2,3]

C) 6

D) undefined

- A -> 배열의 값들에 각각 2를 곱해서 새 배열ㅇ르 만듦

<br>

36 아래 코드의 출력은?

```jsx
[1, 2, 3, 4].filter((n) => n % 2 === 0);
```

A) [1,3]

B) [2,4]

C) [0,2,4]

D) [1,2,3,4]

- B -> 기존 배열에서 2로 나누었을 때 나머지가 0인 값들 필터링해서 새 배열을 만듦

<br>

37 아래 코드의 결과는?

```jsx
[1, 2, 3].reduce((acc, cur) => acc + cur, 0);
```

A) 6

B) [1,2,3]

C) undefined

D) Error

- A -> 초기 값: 0, 누적값 + 현재값 -> 배열 값들 누적한 합 -> 6

<br>

38 아래 코드의 출력은?

```jsx
const f = () => ({ name: 'Yumi' });
console.log(f());
```

A) undefined

B) {name:"Yumi"}

C) name:"Yumi"

D) Error

- B -> 화살표 함수의 본문이 한 줄의 표현식만 있으면 return 없어도 해당 값 자동으로 반환 -> 객체 리터럴 반환

<br>

39 아래 코드의 출력은?

```jsx
const greet = (name = 'Guest') => 'Hello ' + name;
console.log(greet());
```

A) Hello Guest

B) Hello

C) undefined

D) Error

- A -> name 매개변수 없기에 기본값 적용 -> 'Hello Guest' 반환

<br>

40 함수 안에서 return문이 없을 때 결과는?

A) null

B) undefined

C) 0

D) Error

- B -> 기본 값 undefined

---
