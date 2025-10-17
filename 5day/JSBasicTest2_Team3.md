# Day02 자바스크립트 기초 점검 (40문제)

## 자바스크립트 함수

---

1 다음 중 함수를 정의하는 올바른 방법은?

A) function = myFunc() {}

B) function myFunc() {}

C) def myFunc() {}

D) var function myFunc() {}

- 정답: B
- 풀이: B는 `함수 선언문` 형태의 코드이다.

<br>

---

2 함수를 호출(call)한다는 것은?

A) 함수를 복사한다

B) 함수를 삭제한다

C) 함수를 실행한다

D) 함수를 주석 처리한다

- 정답: C
- 풀이: 함수를 호출(call)한다는 것은 함수를 실행시키는 것이다.

<br>

---

3 다음 중 함수의 반환값(return value)을 올바르게 사용하는 것은?

A) return x + y;

B) print(x + y);

C) echo(x + y);

D) output(x + y);

- 정답: A
- 풀이: return은 함수의 반환값을 지정한다.

<br>

---

4 다음 중 함수의 매개변수(parameter)에 대한 설명으로 옳은 것은?

A) 함수 외부에서만 사용 가능하다.

B) 함수 내부에서 전달받은 값을 저장하는 변수이다.

C) 항상 숫자여야 한다.

D) return 문 뒤에서 선언해야 한다.

- 정답: B
- 풀이: 매개변수는 함수 내부에서 전달받은 값을 저장하는 변수로, 원시 타입은 값 복사, 객체 타입은 메모리 참조를 통해 값을 전달받는다.

<br>

---

5 다음 중 기본적인 함수 호출 형태는?

A) function()myFunc;

B) myFunc[];

C) myFunc();

D) function myFunc;

- 정답: C
- 풀이: 기본적인 함수 호출 형태는 함수 이름 뒤에 소괄호를 붙인다.

<br>

---

6 다음 중 함수의 실행이 종료되는 즉시 반환되는 키워드는?

A) stop

B) return

C) end

D) break

- 정답: B
- 풀이: return은 함수 실행을 즉시 종료하고 값을 반환한다.

---

7 함수에서 반환값이 없을 때 반환되는 기본 값은?

A) null

B) 0

C) undefined

D) false

- 정답: C
- 풀이: Javascript에서 반환되는 기본값은 _undefined_ 이다.

<br>

---

8 다음 중 익명 함수(Anonymous Function)를 정의한 것은?

A) function() { console.log("Hello"); }

B) function sayHello() { console.log("Hi"); }

C) var say = function sayHello() {};

D) function = hello() {};

- 정답: A
- 풀이: 익명함수는 함수의 이름을 선언하지 않는다.

<br>

---

9 함수 선언식(Declaration)과 함수 표현식(Expression)의 차이는?

A) 선언식은 호이스팅(hoisting)된다.

B) 표현식은 선언 전에 사용 가능하다.

C) 둘 다 동일하게 동작한다.

D) 표현식은 `return`이 불가능하다.

- 정답: A
- 풀이: 함수 선언식은 코드 실행 전에 호이스팅되어 선언 이전에 호출이 가능하다.

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

- 정답: B
- 풀이: 매개변수로 2와 3을 받는다. -> 2 + 3 = 5

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

- 정답: C
- 풀이: greet 함수를 호출해 매개변수 name으로 문자열 "Yumi"를 전달한다.
  <br>문자열 "Hi"와 합쳐져 "Hi Yumi"를 반환한다.

<br>

12 다음 중 기본 매개변수를 사용하는 올바른 예시는?

A) function f(a=10, b){}

B) function f(a,b=10){}

C) function f(a,b==10){}

D) function f(a,b=10:){}

- 정답: B
- 매개변수 문법은 param = 값. A는 기본 매개변수가 앞에 오더라도 가능하긴 하지만 매개변수 순서상 문제가 있다.

<br>

13 함수 내부에서 선언된 변수는 어떤 범위를 가진다?

A) 전역 범위

B) 지역 범위

C) 파일 전체

D) 함수 외부

- 정답: B
- 풀이: 지역 범위로 함수가 종료되면 변수의 수명 주기도 끝난다.

<br>

14 다음 중 전역변수(global variable)의 올바른 사용은?

A) 함수 안에서만 사용된다.

B) 함수 외부에서 선언되어 모든 함수가 접근 가능하다.

C) return 뒤에서만 가능하다.

D) 블록 안에서만 유효하다.

- 정답: B
- 풀이: 전역변수는 말그대로 프로그램의 전역에서 선언된 변수이다. 따라서 모든 함수가 접근 가능하다.

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

- 정답: B
- 풀이: test() 내부에서 `let x = 5;`가 로컬 변수를 가리켜 `console.log(x);`는 5를 출력한다.

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

- 정답: A
- 풀이: 매개변수가 없기 때문에 x는 undefined 값을 가진다.
  <br>-> 따라서 x \* x = undefined \* undefined -> NaN 가 출력됩니다.

<br>

17 화살표 함수(Arrow Function)를 정의한 올바른 예시는?

A) const add = (a,b) => a + b;

B) function add(a,b) => a + b;

C) add = (a,b) { return a + b; }

D) const add(a,b) -> { return a+b }

- 정답: A
- 풀이: 화살표 함수는 `const 함수이름 = (매개변수) => {함수내용};` 또는 `const 함수이름 = (매개변수) => 반환할 표현식;` 으로 표현가능하다.

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

- 정답: A
- 풀이: multiply(5)에서 매개변수가 하나이기 때문에 b는 기본값 2를 값으로 가진다.
  <br>→ 5 \* 2 = 10

<br>

19 아래 중 함수 표현식에 대한 설명으로 올바른 것은?

A) 반드시 이름이 있어야 한다.

B) 선언 전에 호출해도 된다.

C) 변수에 할당할 수 있다.

D) return문을 쓸 수 없다.

- 정답: C
- 풀이: 함수 표현식은 변수에 할당할 수 있다.
  <br> 예: `const sum = function(a,b){return a+b;}`

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

- 정답: A
- 풀이: 변수 say에 저장된 익명함수를 호출하여 Hello를 반환한다.

<br>

21 콜백 함수(Callback Function)란?

A) 호출되지 않는 함수

B) 함수의 인수로 전달되는 함수

C) 반환되는 함수

D) 전역함수

- 정답: B
- 풀이: 콜백 함수는 다른 함수의 인수로 전달되어 필요 시 호출되는 함수이다.

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

- 정답: C
- 풀이: run() 함수는 함수를 객체로 받아서 실행하는 함수이기에 안에 콜백함수가 들어가야 한다. 따라서 함수가 C가 정답입니다.

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

- 정답: C
- 풀이: 함수 안에 또다른 함수가 정의된 중첩 함수 구조이다. outer 함수를 호출하고 함수내에서 inner 함수가 선언된 후에 inner를 다시 호출하여 문자열 "inside"를 반환한다.

<br>

24 다음 중 즉시 실행 함수(IIFE)의 올바른 예시는?

A) function test()();

B) function(){}();

C) (function(){ console.log("run"); })();

D) run(){};

- 정답: C
- 풀이: 즉시 실행 함수는 선언과 동시에 `(function(){ ... })();` 형태로 호출된다.

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

- 정답: A
- 풀이: 즉시 실행 함수로 3과 4를 매개변수로 갖는다. -> 3 + 4 = 7

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

- 정답: C
- 풀이: 자바스크립트의 클로저를 보여주는 예제이다. makeAdder 함수를 5라는 인자와 함께 호출하여 x의 값은 5가 된다. add5는 2라는 인자와 함께 호출했으므로 y의 값에 2가 들어가고 x+y는 7의 값을 반환한다.

<br>

27 클로저(Closure)의 특징은?

A) 함수 외부 변수를 수정할 수 있다.

B) 함수 내부의 변수를 외부에서 직접 접근할 수 있다.

C) 외부 함수의 변수를 기억하는 함수이다.

D) return이 없는 함수이다.

- 정답: C
- 풀이: 클로저는 자신이 생성될 때의 외부 스코프 변수들을 기억하는 함수이다.

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

- 정답: C
- 풀이: return 객체 function의 num은 counter() 함수 내의 num
  <br>-> 처음에 0 + 1 = 1 값 반환
  <br>-> 두 번째에 1 + 1 = 2 값 반환

<br>

29 다음 중 함수가 일급 객체(First-Class Object)라는 뜻이 아닌 것은?

A) 변수에 저장 가능

B) 매개변수로 전달 가능

C) 반환값으로 사용 가능

D) 반드시 이름을 가져야 함

- 정답: D
- 풀이: 익명함수로 사용가능하므로 반드시 이름을 가지지 않아도 된다.

<br>

30 setTimeout() 함수에 전달되는 첫 번째 인수는?

A) 시간

B) 함수

C) 문자열

D) 숫자

- 정답: B
- 풀이: setTimeout() 함수의 첫 번째 인수는 실행할 함수(두 번째 인수가 시간(ms))다.

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

- 정답: A
- 풀이: 일반함수로 호출
  <br>-> 이때 this는 전역 객체(상위 객체)에 바인딩됨
  <br>-> 상위 객체가 브라우저
  <br>-> this는 브라우저 환경 window 객체 (호출될 때 this가 정의됨)

<br>

32 화살표 함수에서 this는?

A) 새로운 this를 바인딩한다

B) 상위 스코프의 this를 사용한다

C) 항상 undefined이다

D) 전역 객체를 가리킨다

- 정답: B
- 풀이: 화살표 함수는 일반함수와 달리 자신만의 this를 가지지 않고 상위스코프의 this 값을 그대로 물려받아 사용한다. (화살표 함수는 함수가 정의될 때 this가 정의됨)

33 map() 함수의 인수는?

A) 콜백 함수

B) 객체

C) 숫자

D) 배열

- 정답: A
- 풀이: map() 함수의 인수는 배열의 각 요소에 실행될 콜백 함수이다. 이 콜백의 결과값들로 이루어진 새 배열을 반환한다.

<br>

34 filter() 함수의 반환값은?

A) 조건을 만족하는 요소만 모은 새 배열

B) true/false

C) 객체

D) 문자열

- 정답: A
- 풀이: filter() 함수는 기존 배열에서 조건을 만족하는 배열을 필터링하여 새 배열을 만드는 함수이다.

<br>

35 아래 코드의 출력은?

```jsx
[1, 2, 3].map((x) => x * 2);
```

A) [2,4,6]

B) [1,2,3]

C) 6

D) undefined

- 정답: A
- 풀이: map은 모든 요소에 대해 주어진 함수를 순서대로 호출하여 반환값들로 새로운 배열을 만들어낸다. 따라서 2를 곱한값들로 새로운 배열을 만든다.

<br>

36 아래 코드의 출력은?

```jsx
[1, 2, 3, 4].filter((n) => n % 2 === 0);
```

A) [1,3]

B) [2,4]

C) [0,2,4]

D) [1,2,3,4]

- 정답: B
- 풀이: n값을 2로 나눈 나머지 값이 0이 되는 것만 필터링된다. 따라서 짝수만 걸러서 새 배열을 반환한다.

<br>

37 아래 코드의 결과는?

```jsx
[1, 2, 3].reduce((acc, cur) => acc + cur, 0);
```

A) 6

B) [1,2,3]

C) undefined

D) Error

- 정답: A
- 풀이: 초기 값: 0, 누적값(acc) + 현재값(cur) 형태로
  <br>-> reduce() 함수는 배열 값들 누적한 합을 구하는 함수이다. <br>-> 1 + 2+ 3 = 6

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

- 정답: B
- 풀이: 화살표 함수의 본문이 한 줄의 표현식만 있으면 return 없어도 해당 값 자동으로 반환
  <br>-> 화살표함수에서 소괄호로 감싸주어 {name: "Yumi"} 객체를 그대로 반환한다.

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

- 정답: A
- 풀이: 기본 매개변수 `name="Guest"`가 적용되어 Hello Guest가 출력된다.

<br>

40 함수 안에서 return문이 없을 때 결과는?

A) null

B) undefined

C) 0

D) Error

- 정답: B
- 풀이: Javascript에서 반환 값이 없을 때 기본 값은 _undefined_ 이다.

---
