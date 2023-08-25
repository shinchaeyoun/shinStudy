// var 이름 = 'Kim';

  /*
  var   재선언O 재할당O 범위function
  let   재선언X 재할당O 범위{}
  const 재선언X 재할당X 범위{}
   */

  // const로 오브젝트를 만들었을 때
  // const 사람 = { 이름: 'Kim'}
  // 사람.이름='park'
  // 오브젝트 내부 값 변경은 자유

  // freeze 수정불가능한 오브젝트를 만들고 싶으면
  /* Object.freeze(사람);
  사람.이름='lee' */

  // 변수의 존재 범위


  ========================================
변수의 hoisting 현상
변수의 선언을 변수 범위 맨위로 끌고오는 현상

var age;
age = 25;
------
console.log(age) -> undefined (선언만 하고 할당하지 않은 자료형, 정해지지않은 값)
var age = 25;
console.log(age) -> 25

======
변수 동시에 여러개 만들기

var name, age;
var name='shin', age = 20;
======
전역변수 : 모든 곳에서 쓸 수 있는 변수

var 나이 = 20; <- 바깥에 있는 변수는 함수 안에서도 사용 가능

function 함수(){
  나이; -> 20이 나옴 <-안
  var 이름 = 'Kim'; <- 지역변수 함수 안에서만 사용할 수 있음
};
함수();

window로 전역변수 만들기
window.이름 = 'kim;

window는 자바스크립트 기본 함수를 담은 {오브젝트}

console.log(이름) -> kim
console.log(window.이름) -> kim

window.name = function (){}

전역변수를 만들 때 window.이름 <- better
함수도 마찬가지

함수선언도 호이스팅 현상이 일어난다

======
연습문제

if(true){
  let a = 1;
  var b = 2;
  if(true){
    let b = 3;
    let의 생존 범위는 해당 중괄호. 해당 영역에서만 살고 죽음
  }
  console.log(b)
}

b의 값은 무엇이 출력될까?
- 2

--------- 문제 : 다음 코드의 콘솔창 출력결과는 무엇일까요?
문제1)
함수();
function 함수() {
  console.log(안녕);
  let 안녕 = 'Hello!';
}
== undefined // 에러

함수실행을 함수선언 전에 사용해도 호이스팅되어서 문제 없음.
let 안녕 은 호이스팅이 된다.
하지만 let, const는 hoisting시 언디파인드로 자동으로 할당이 안된다.
실수를 방지해주는 변수(let, const)
var 변수는 호이스팅시 언디파인드 할당 됨
let, const 는 호이스팅시 언디파인드 할당되지 않음


문제2)
함수();
var 함수 = function() {
  console.log(안녕);
  var 안녕 = 'Hello!';
} 
== undefined // 함수가 아니라는 에러

함수 표현식을 사용 전에 실행 가능. 호이스팅 되어서.
차이점
function 함수(){} : 전부 호이스팅됨
var 함수 = function(){} : 선언 부분만 호이스팅

선언만 호이스팅된거라 함수 실행되지 않은 에러


문제3)
let a = 1;
var 함수 = function() {
  a = 2;
}
console.log(a);
== 2 // 함수를 실행하지 않았으므로 a 값은 1


문제4)
let a = 1;
var b = 2;
window.a = 3;
window.b = 4;

console.log(a + b);
== 5
var로 선언한 b는 window.b 에서 값이재할당 됨

전역변수로 만든 var b, window.b는 동일
let a, 전역변수로 만든 window.a는 다르다


문제5)
for (var i = 1; i < 6; i++) { 
  setTimeout(function() { console.log(i); }, i*1000 ); 
}
  논리적으로 완벽한 for 반복문입니다. 
  그런데 반복문으로 축약하자마자 제대로 작동하지 않습니다. 
  계속 5라는 숫자가 1초마다 출력되네요. 
Q. 위 코드는 왜 의도대로 동작하지 않는 것이죠? 설명해보십시오.
그리고 해결할 방법은 무엇일까요?

== 설명
var로 선언해서 그런 것같은데 왜인진 모르겠음

== 해결
for (let i = 1; i < 6; i++) {
  setTimeout(function() { console.log(i); }, i*1000);
}

해석-
실행시점이 달라서.
셋타임아웃에 있는 콘솔로그는 1초후, 조건에 따라서 실행되는 코드.

i값은 반복문이 다 실행되고 전역변수로 남아있음
반복문이 다 돌았으니까 전역변수 i값은 5

let 변수는 중괄호 범위에서 생성됨.
for {} 안에 있는 let i 사용가능


문제6)
<script> 
var 버튼들 = document.querySelectorAll('button');
var 모달창들 = document.querySelectorAll('div');

for (var i = 0; i < 3; i++){
  버튼들[i].addEventListener('click', function(){
    모달창들[i].style.display = 'block';
  });
};
</script>
  이렇게 반복문으로 반복적인 코드를 축약가능합니다. 
  그런데 문법에 맞게 쓰긴 했는데 모달창이 제대로 작동하지않고 있습니다. 

Q. 위 코드는 왜 의도대로 동작하지 않는 것이죠? 설명해보십시오.
그리고 해결할 방법은 무엇일까요?

== 설명
let 으로 변수 선언
== 해결
for (let i = 0; i < 3; i++) {
  버튼들[i].addEventListener('click', function (){
    모달창들[i].style.display = 'block';
  });
};

-해석
for 문에 var로 선언하면 전역변수로 선언된 var 에 for문이 다 돈 후의 값이 저장되어있어서 
반복문이 도는 시점과 선언되는 시점이 다른 문제.

반복문 내 코드 3번 돌림
근데 이벤트리스너 내부 코드는 나중에 실행함 -클릭될 때
버튼을 클릭하면 내부 코드 실행됨
안에 있는 i값을 실제 숫자로 채우려고 봤더니 반복문이 다 돌고 남은 전역변수는 3

--------------

backquote 문자열의 장점
1. 엔터키 가능
2. 중간중간 변수 넣기 쉬움

(예전 방식) '문자'+변수;
(backquote 방식) `문자 ${변수}`; `<div>${변수}</div>`;

=========
tagged literal
`문자`를 해체분석할 수 있음
- 단어 순서를 변경하거나
- 단어를 제거하거나
- ${변수} 위치를 옮기거나
(쉽게 가능)


문자해체분석기 역할



function 해체분석기(문자들, 변수들){
  console.log(문자들);
  console.log(변수들);
};
파라미터를 출력해주는 함수.
tag 실행

해체분석기`안녕하세요 ${변수}입니다`

`안녕하세요 ${변수}입니다`

해체분석기() 파라미터1. 문자들을 array화 해줌
해체분석기() 파라미터2. ${변수}를 뜻함
해체분석기() 파라미터3. 두번째 ${변수}를 뜻함

문자 해체 기준은 중괄호를 기준으로 문자들 분리.
어레이에 담아줌
${} 양옆 문자들은 어레이에 담아줌

-------
tagged literal 사용 예시)
글자의 순서를 변경하고 싶을 때

function 해체분석시(문자들, 변수들){
  console.log(문자들[1]+문자들[0]) == 입니다안녕하세요
  console.log(문자들[1]+변수들+문자들[0]) == 입니다손흥민안녕하세요
};

태그드리터럴


-------------
Q1. 문자 단어 순서 바꾸기

var pants = 20;
var socks = 100;
`바지${pants} 양말${socks}`

function 해체분석기 (text, pants, socks){
  console.log(text[1] + pants + text[0] + socks)
}

해체분석기 `바지${pants} 양말${socks}`

Q2.
function 해체분석기 (text, pants, socks){
  if(pants === 0) {
    ; pants = outOfStock
    console.log(`pants is out of stock Socks` + socks);
  };
};
해체분석기 `바지${pants} 양말${socks}`;

===========
3. Spread Operator
= 괄호 벗겨주세요~
= 중괄호, 대괄호, 소괄호 안에서만 사용 가능

...spread Operator
내용물을 빼고 싶을 때 사용
1. Array에 붙이면 대괄호를 제거해줌
2. 문자에 붙이면 펼쳐준다

var 어레이 = ['hello', 'world'];
console.log(어레이) == ['hello', 'world'];
console.log(...어레이) == hello world //대괄호를 제거하는 문법

var 문자 = 'hello'
console.log(...문자)
console.log('h','e','l','l','o')
console.log(문자[1]) 문자도 array 처럼 인덱싱이 가능

활용)
쓸곳1. 어레이 합치기, 복사 / Deep copy
쓸곳2. 오브젝트 합치기 / Deep copy

var a = [1,2,3];
var b = [4,5];

var c = [...a]; // 1,2,3
var c = [...a, ...b]; // 1,2,3,4,5
어레이를 합치거나 복사하기 유용

-------------
deep copy 할 때 유용함

var a = [1,2,3];
var b = a; <= 그냥 등호로 복사하면 값을 공유함

a[3] = 4;

console.log(a) // 1,2,3,4
console.log(b) // 1,2,3,4

reference data type (array, Object) 값 공유가 일어남

독립적인 값을 가지도록 Array, Object를 복사하려면
Spread operator 이용
var a = [1,2,3];
var b = [...a];

-----------
오브젝트 합치기

var o1 = {a:1, b:2};
var o2 = {...o1, c:3};

console.log(o2); // a:1, b:2, c:3
대괄호 벗기기, 중괄호 벗기기 가능

o1을 o2에 deep copy 하려면
var o1 = {a:1, b:2};
var o2 = { ...o1 };

값 중복이 일어난다면?
- 가장 뒤에 있는걸 적용

var o1 = {a:1, b:2};
var o2 = {a:2, ...o1 }; // a:1, b:2

var o1 = {a:1, b:2};
var o2 = {...o1, a:2}; // a:2

..o1; = 에러

쓸곳3. 함수 파라미터 넣을 때

function 더하기(a,b,c){
  console.log(a+b+c)
};

더하기(1,2,3);

var 어레이 = [10,20,30];

더하기(어레이[0], 어레이[1], 어레이[2]);
더하기.apply(undefined, 어레이);
 -> undefined에 적용을 해서 실행해주세요. 라는 뜻
 그냥 더하기() 함수가 그대로 실행됨.
 apply를 쓴 이유는 파라미터로 array 집어넣기가 가능해서 사용함.

더하기(...어레이);

---------
apply 함수 개념설명
함수를 옮겨와서 실행해주세요.

var person = {
  인사: function(){
    console.log(this.name + '안녕');
  }
};

var person2 = {
  name: '손흥민'
};

person.인사();
person.인사.apply(person2); => 손흥민 안녕 this.name에 값이 들어가 있어서 name이 들어감

------
call
apply와 똑같은 기능을 하는 함수
파라미터

person.인사.apply(person2, [1, 2])
person.인사.call(person2, 1, 2)
apply는 파라미터를 array로 작성
