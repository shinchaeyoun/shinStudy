
-------------
10. ES6-style-function

함수의 default 파라미터

function 더하기 (a,b=10){
  console.log(a + b)
};
더하기(1); // b자리에 파라미터 안넣었을 때만 발동
더하기(1,2); 
더하기(); NaN not a number 

function 더하기 (a, b= 2*5 ){
  console.log(a + b)
};

function 더하기 (a, b= 2*a ){
  console.log(a + b)
};
더하기(1); b자리에 2(2*a)가 들어감

-
function 임시함수(){
  return 10 //함수 실행하고 남길 값
};

function 더하기 (a, b= 임시함수()){ //b자리에 파라미터 안넣었을 때만 발동. 10이 들어가게 됨
  console.log(a + b)
};
더하기(1);

=======
함수의 arguments

function 함수(a,b,c) { -> 파라미터
  console.log(arguments); -> 알규먼트
};
모든 파라미터를 한꺼번에 싸잡아서 다루고 싶을 경우
= arguments 사용

arguments = 모든 파라미터를 []안에 넣은 변수


입력한 파라미터 전부 콘솔창에 출력해주는 함수
function 함수 (a,b,c,d,e,f) {
  for(let i = 0; i<arguments.length; i ++){
    console.log(arguments[i])
  }
}

----------
11. ES6-style-function2
rest 파라미터

... 1. spread operator 2. rest parameter
function 함수2(a,b, ...파라미터들){ -> rest파라미터
  console.log(파라미터들); // 모든 파라미터를 []에 보관해줌
  console.log(파라미터들[1]);
};

함수2 (1,2,3,4,5,6,7);
함수 안에 들어온 파라미터를 전부 담은 array 출력

arguments: 모든 파라미터를 []에 담아줌
rest parameter: 원하는 파라미터 왼쪽에 ... 기호를 붇여주면 이 자리에 오는 모든 파라미터를 []에 담아줌

------
...rest vs ...spread 구분하기
1. 함수파라미터 자리에 붙으면 rest
2. 나머지는 spread

-------
예제
모든 파라미터들을 하나씩 콘솔창에 출력해주는 함수

function quiz1(...rest) {
  for(let i=0; i < rest.length; i++){
    console.log(rest[i]);
  };
};
quiz1(1,2,3,4,5,6,7,8)

...rest는 파라미터가 몇개 들어올지 미리 지정안해줘도 됨

...rest 파라미터 주의점
1. 가장 뒤에 써야함 // '여기 뒤에있는 모든 파라미터' 라는 뜻함
2. 두번 이상 사용 금지


===========
연습문제

1. spread 문제 1
var a = [1,2,3];
var b = '김밥';
var c = [...b, ...a];
console.log(c);

위 코드의 출력 결과는?

== ['김','밥',1,2,3]


2. spread 문제 2
var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a,b){
  console.log( [[...a], ...[...b]][1] )
}
c(a,b);
대괄호가 가득한 위 코드의 출력 결과는?

== 'you'

--해설
  console.log( [[1,2,3], 'you', 'are'][1] )
  == 'you'


3. default 파라미터 문제 1
function 함수(a = 5, b = a * 2 ){
  console.log(a + b);
  return 10
}
함수(3);

위 코드의 출력 결과는?

== 9
b자리에 파라미터를 안넣어서 b=a*2 는 다시 말해서 b=3*2
b=6
console.log(3+6) = 9
 디폴트 파라미터가 발동


4. default 파라미터 문제 2
function 함수(a = 5, b = a * 2 ){
  console.log(a + b);
}
함수(undefined, undefined);

위 코드의 출력 결과는?

==
15
a,b 자리에 값이 없어서 걍 5+10
  디폴트 파라미터 발동
  정의 안된 파라미터


5. array를 만들어주는 함수를 제작하고 싶습니다.
실용성은 0이지만 일단 해보도록 합시다.
파라미터로 자료들을 입력하면 그걸 그대로 array를 만들어주는 함수를 만들고 싶습니다. 

function 어레이(){
  (여기 어떤코드가 들어가면 될까요?)
}

var newArray = 어레이(1,2,3,4,5);
console.log(newArray); 

이렇게 작성하면 [1,2,3,4,5]가 출력되어야합니다.
함수에 숫자를 100개 집어넣으면 Array안에 숫자100개가 들어가야하고요.
어레이라는 함수를 어떻게 만들면 될까요? (new 키워드 사용금지)

==
function 어레이(...rest){
  return rest
}
var newArray = 어레이(1,2,3,4,5);
console.log(newArray);

arguments 로도 가능
    function 어레이(){
      return arguments
    }
    var newArray = 어레이(1,2,3,4,5);
    console.log(newArray);
이건가?


6. 최댓값 구하기
자바스크립트에서 최댓값을 구하고 싶으면.. Math.max()라는 기본 내장함수를 쓸 수 있습니다. 

Math.max(5,6,4,3) 
이렇게 쓰시면 6이라고 최댓값을 출력해줍니다. 그냥 소괄호 안에 있는 모든 숫자 중에 가장 큰 숫자를 퉤 뱉는다는 소리입니다. 

근데 최댓값을 검사하고 싶은 숫자들이 좀 많습니다. 

var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
numbers 안에 있는 숫자들을 Math.max()에 집어넣어서 쓰고 싶은데
직접 소괄호 안에 10개넘는 숫자를 손수 기입하기 귀찮습니다.
이럴 땐 어떻게 코드를 짜면 좋을까요?

== 
Math.max(...numbers)

-- 해석
apply로도 가능


7. 글자를 알파벳순으로 정렬해주는 함수를 만들고 싶습니다. 
일단 자바스크립트는 array 내의 데이터를 알파벳순으로 정렬하고 싶을 때
sort()라는 array 내장함수를 붙여 사용합니다. (array에만 적용가능)

 console.log( [ 'b', 'c', 'a' ].sort() );
//[ 'a', 'b', 'c' ] 출력됨

이렇게 sort()만 붙이면 쉽게 정렬이 가능합니다. 끝입니다. 

그런데 우리는 array가 아니라 문자열에도 적용할 수 있는 알파벳순 정렬함수를 하나 만들고 싶습니다. 

function 정렬(){
  (여기 어떤 코드가 들어가야할까요?)
}

정렬('bear'); 

정렬('bear')라고 사용하면
콘솔창에 a b e r 이렇게 입력한 문자를 알파벳 순으로 출력되게 만들고 싶으면 어떻게 해야할까요? 
(sort() 함수 사용가능)

==
function 정렬(a){
  console.log([...a].sort())
}
정렬('bear'); 

--해석
문자 자료형은 .sort()붙이기 불가능 array에만 사용 가능

1.
function 정렬(a){
  console.log([...a].sort().join())
}
정렬('bear'); // a,b,e,r
2.
function 정렬(a){
  console.log(...[...a].sort())
}
정렬('bear'); //a b e r


8. 데이터마이닝 기능 만들기 
데이터분석 하는 사람들이 자주 만들어 쓰는 함수가 있습니다. 
알파벳들의 출현 갯수를 세어주는 함수입니다. 우리도 한번 만들어봅시다. 

글자세기('aacbbb') 라고 입력하면 콘솔창에
{ a : 2, b : 3, c : 1 }
▲ 이렇게 출력해주는 글자세기() 라는 함수를 만들고 싶습니다.
쉽게말하자면 입력한단어에 들어있는 알파벳의 갯수를 세어서 오브젝트에 기록해주고 출력까지 해주는 함수입니다. 
글자세기라는 함수를 어떻게 만들면 될까요? 

==
function 글자세기(){
  console.log()
};
글자세기('aacbbb')

-- 해석
function 글자세기(txt){
  .forEach는 array에만 사용 가능
  [...txt]
};

글자엔 반복문을 돌릴 수 없는데 글자에 반복문을 돌리고 싶면 [...글자]로 array로 변경하여 사용

function 글자세기(txt){

  var 결과 = {};
  [...txt].forEach(function(i){
    만약에 결과에 i가 있으면 +1 해주시고
    없으면 i : 1 집어넣으세요
    if(결과[i] > 0){
      결과[i] = 결과[i] + 1;
    } else {
      결과[i] = 1;
    }
  });

  console.log(결과)
};


12. Primitive/Reference data types
프리미티브/레퍼런스 데이터 타입

그냥 문자와 숫자는 프리미티브 데이터 타입
var 변수 = 'dddd';
- 변수에 값이 그대로 저장됨
- array
var array = [1,2,3];

array, Object는 변수에 값이 저장이 안된다.
변수에 reference가 저장된다. //[1,2,3]이 저기에 있다는 화살표

reference data type
var obj = {name : 'kim'};

--------------
reference data type 다루기 : 복사
레퍼런스 데이터 타입은 이름1에 데이터가 전달밖는 것

--------
Primitive data type 다루기 : 복사

var name1 = 'Kim';
var name2 = name1; // copy

name2를 출력하면? 'kim'
name1를 출력하면? 'kim'

name1 = 'park';

console.log('name1',name1); // 'kim'
console.log('name2',name2); // 'park'

--
reference data type 다루기 : 복사

var name1 = { name : 'Kim' };
var name2 = name1;

name1.name = 'park'

console.log(name1); // 'park'
console.log(name2); // 'park'


오브젝트나 어레이는 레퍼런스 데이터 타입이라
변수에 저장되는게 아니라 pc 메모리의 화살표가 저장 됨
var name1 = name:김 저기 저장됨; 이라는 뜻

var name1 = { name : 'Kim' };
var name2 = name1; // 이름2에 이름1의 화살표를 복사한 것

그래서 array, object 함부로 복사하면 클남~
그럼 복사하고 싶으면 어케?
- object 복사 기계 --다음에

var name1 = { name : 'Kim' };
var name2 = { name : 'park' };

--
reference data type 다루기 예시2

var name1 = { name : 'Kim' };
var name2 = { name : 'Kim' };

name1 == name2; // false
오브젝트가 저장된게 아니라 화살표를 저장한거라 false
각각 다른 자료를 가르키는 화살표라서~

오브젝트를 변경해주는 함수
function 변경 (obj){
  obj.name = 'Park';
};
변경(name1); // Park

// 오브젝트를 재할당해주는 함수
function 변경 (obj){
  obj = {name: 'park'}
};
변경(name1); // Park
- 실패.. 안바뀜
레퍼런스와 파라미터의 합작이라 바뀌지 않음
파라미터는 변수생성&할당과 똑같음
변경 (var obj = 이름1); 과 동일한 것

이름1에 저장된 것은 화살표
똑같은 위치를 가르키는 화살표

새로운 오브젝트 할당
var name1 = {name : 'kim'};
function 변경(obj) {
  obj = { name : 'park' }
};
변경(name1);

파라미터 변수에 ={} 해봤자 원래 name1 오브젝트는 변화가 없다.

============
13. constructor
Object 생성기계인 constructor
 
constructor 문법의 용도
- Object를 마구 복사하고 싶을 때 사용
- 비슷한 object 여러개 만들 때

예시: 학생 출석부를 만들어보자

var 학생1 = { name: 'Kim', age: 15 }

// 대문자로 적음 ex)Student
function 기계(){
  this.name = 'Kim';
  this.age = 15;
};

new 기계();

constructor 안에서 쓰는 this는 새로생성되는 object를 뜻함
새로생성되는 오브젝트들의 에이지에는 15를 넣어주세요 라는 뜻
새로생성되는 오브젝트에 값 부여가능

var 학생1 = new 기계();
var 학생2 = new 기계();
console.log(학생1, 학생2)
반복문 사용 가능. 오브젝트 안에 내용이 많을 경우 편리

Q.기계로 생성과는 모든 학생 오브젝트에 sayHi()함수 추가

var 학생1 = {
  name: 'Kim',
  age : 15,
  sayHi: function (){
    console.log('안녕하세요 '+this.name+'입니다.')
  }
};

function 기계(){
  this.name = 'Kim';
  this.age = 15;
  this.sayHi = function(){
    console.log('안녕하세요 '+this.name+'입니다.')
  };
};

학생1.sayHi(); // 안녕하세요 Kim입니다.
학생2.sayHi(); // 안녕하세요 Kim입니다.

문자나 함수나 별걸 다 넣어서 오브젝트 생성 기계를 만들 수 있음

Q. 기계로 학생을 뽑을 때 name을 다르게 설정해주고 싶어요

function 기계(이름){
  this.name = 이름;
  this.age = 15;
  this.sayHi = function(){
    console.log('안녕하세요 '+this.name+'입니다.')
  };
};

기계('lee');

var 학생1 = new 기계('Park')
var 학생2 = new 기계('Lee')


 this: 기계에서 새로생성되는 Object (instance)
 기계: object생성기계(constructor, 생성자)

=====
연습문제
쇼핑몰에 쓸 상품데이터를 오브젝트로 여러개 만들고 싶습니다. 

Q1. 위처럼 생긴 상품오브젝트들을 뽑아낼 수 있는 constructor를 제작해보세요.
그리고 실제 상품 두개를 뽑아보십시오.

function 기계 (name, price){
  this.name = name;
  this.price = price;
};

var product1 = new 기계('shirts', 50000)
var product2 = new 기계('pants', 60000)

console.log(product1,product2);

Q2. 상품마다 부가세() 라는 내부 함수를 실행하면 콘솔창에 상품가격 * 10% 만큼의 부가세금액이 출력되도록 하고 싶으면
constructor를 어떻게 수정해야할까요?

function 기계 (name, price){
  this.name = name;
  this.price = price;
  this.부가세 = function (){
    return price / 10
  }
};

var product1 = new 기계('shirts', 50000)
var product2 = new 기계('pants', 60000)

console.log(product1.부가세());


function Product(상품명, 가격){
  this.name = 상품명;
  this.price = 가격;
  this.부가세 = function(){
    console.log(this.price * 0.1)
  }
}

var product1 = new Product('shirts', 50000);
var product2 = new Product('pants', 60000);

==================
14. prototype

constructor = 상속이라고 함
상속을 받은 것임 기계로부터. 기계가 가지고 있는 속성들을 물려받음

상속을 구현할 수 있는 또 하나의 문법 prototype
prototype은 유전자
prototype에 값을 추가하면 모든 자식들이 물려받기 가능

기계(constructor)를 만들면 prototype이라는 공간이 자동으로 생김
기계는 일종의 오브젝트라 console창에 .prototype


function 기계(이름){
  this.name = 이름;
  this.age = 15;
  this.sayHi = function(){
    console.log('안녕하세요 '+this.name+'입니다.')
  };
};

기계.prototype.gender = 'male'; // 키와 벨류 추가

var 학생1 = new 기계('Park');

----
prototype의 동작원리
:내장함수는 어떻게 동작하는가

내가 만든 array에 arr.toString() 이렇게 붙일 수 있는 이유는 

내가 만든 array의 부모 유전자가 toString()을 가지고 있기 때문입니다. (혹은 부모의 부모요)

Q. 그럼 prototype으로 상속시키는거랑 constructor로 상속시키는거랑 차이가 뭐죠?

A. 자식들이 값을 직접 소유하게 만들고 싶으면 constructor로 상속시키시면 되고
부모만 가지고 있고 그걸 참조해서 쓰게 만들고 싶으면 prototype으로 상속시키면 되겠쥬?
보통은 그래서 상속할 수 있는 함수 같은 것들은 prototype으로 많이 만들어놓습니다. 

==================
15. prototype2

1. prototype은 함수에만 몰래 생성됨
2. 내 부모 유전자(부모의 prototype)를 검사하고 싶다면 __proto__
3. __proto__를 이용해 부모 강제 등록하기
4. 콘솔창에서 알려주는 prototype chain


3. -> 프로토는 이런 역할을 한다 예시
var 부모 = {name: 'kim'};
var 자식 = {};
자식.__proto__ = 부모;
자식.name;

===============
constructor, prototype 연습문제 4개

0. 오브젝트 자료 여러개를 만들고 싶습니다.
var 학생1 = { name : 'Kim', age : 20 }
var 학생2 = { name : 'Park', age : 21 }
var 학생3 = { name : 'Lee', age : 22 }

constructor문법을 사용해서 위의 오브젝트와 똑같은 오브젝트 3개를 한번 뽑아보십시오. 

+ 여기에 학생1.sayHi()라고 사용하면 "안녕 나는 Kim이야" 라는 글자가 콘솔창에 나오도록 sayHi()라는 함수도 constructor 안에 추가해보세요.

==
function Student ($name, $age){
  this.name = $name;
  this.age = $age;
  this.sayHi = function (){
    console.log('hi my name is ' + this.name);
  }
};

var 학생1 = new Student('Kim',20);
var 학생2 = new Student('Park', 21);
var 학생3 = new Student('Lee', 22);

학생1.sayHi();


1. 다음 코드의 출력 결과는 무엇일까요?
function Parent(){
  this.name = 'Kim';
};
var a = new Parent();

a.__proto__.name = 'Park';
console.log(a.name)

==해설
첫 4줄에 의해서 a = { name : 'Kim' } 이 되고 
a.__proto__.name = 'Park'; 이건 부모 prototype에 { name : 'Park' } 이걸 추가하라는 뜻입니다.
그럼 이제 a.name 이라고 사용했을 때 
내가 직접 가지고 있는 { name : 'Kim' } 이걸 우선 출력해줍니다.


2. 함수가 안들어가요 엉엉

위에 0번 문제에서 Student라는 부모에 sayHi라는 함수를 하나 추가하라고 했죠?
그래서 sayHi()라고 사용하면 "안녕 나는 ~~이야" 라고 내 이름을 출력해주는 함수를 prototype에 추가했습니다. 
하단처럼 만들었는데 의도한 대로 이름이 출력되지 않고 있습니다. 
원인은 무엇일까요? 

function Student(이름, 나이){
  this.name = 이름;
  this.age = 나이;
}
Student.prototype.sayHi = () => {
    console.log('안녕 나는 ' + this.name + '이야');
  }
var 학생1 = new Student('Kim', 20);

학생1.sayHi(); //왜 이 코드가 제대로 안나오죠?

== 해설
sayHi 함수를 만들 때 arrow function을 사용해서 내부에 있던 this라는 값이 이상해짐.
sayHi 함수를 출력하면 this의 값은 window가 나옴.

함수안에서 this 키워드의 뜻은 매번 재정의됨.
object안에 들어있는 함수안에 있는 this는 함수를 부른 object가 됨.
arrow function의 경우 함수 안에서 this 뜻이 재정의되지 않고 바깥에 있던 this를 사용한다.

var 오브젝트 = {
  sayHi: () => { console.log(this) }
}
그래서 위 코드의 this는 window가 출력된다.


3. 모든 array에 적용할 수 있는 함수를 직접 새로 만들려면 어떻게 해야할까요?
모든 array에 붙일 수 있는,
array 내에 있는 3이라는 값을 제거해주는 유용한 함수를 하나 만들고 싶습니다. 

var arr = [1,2,3,4];
arr.remove3();

console.log(arr); //[1,2]

이렇게 array뒤에 붙이기만 하면 array 내의 3이라는 모든 숫자 자료들이 삭제됩니다. 
멋있게 이름은 remove3() 이라고 하겠습니다. 
remove3()함수는 어떻게, 어디에 만들어야 모든 array에 쓸 수 있을까요?

== 해설
Array.prototype.remove3 = function(){
  for(var i = 0; i < this.length; i++){
    if(this[i] === 3){
      this.splice(i,1);
    }
  }
}
var arr = [1,2,3,4];
arr.remove3();

console.log(arr);

모든 array 자료형은 부모가 Array로부터 new Array() 이런 식으로 만들어지기 때문에 Array라는 부모의 prototype에 있는 함수를 자유롭게 가져다 쓸 수 있다.

그래서 Array의 prototype에 remove3라는 함수를 추가해줘야한다.


===============
16. ES5 : Object.create

상속기능을 구현하는 다른 방법

prototype
function 기계(){}; 옛날문법임

Object.create(); ES5문법

// Object.create(프로토타입object);

var 부모 = { name: 'Kim', age: 50 };

var 자식 = Object.create(부모);

  console.log(자식); // {}
  console.log(자식.name); // Kim
  console.log(자식.age); // 50

  (1) 자식이 name을 직접 가지고 있는지? x
  (2) 부모에 name이 있는지? o

자식.age = 20;

var 손자 = Object.create(자식);
손자.name; // Kim
손자.age; // 20

- 함수 또한 넣을 수 있음

=================
17. ES6:class

#### constructor 만드는 신문법
```
class 부모 {
  constructor(){
    this.name = 'Kim';
  }
}

var 자식 = new 부모();
```

함수를 추가하고 싶으면
1. 자식이 직접 함수를 가짐
  새로생성되는 자식은 sayHi() 함수를 직접 가지게 되며 자유롭게 쓸 수 있습니다
```
class 부모 {
  constructor(){
    this.name = 'Kim';
    this.sayHi = function (){console.log('hello')}
  }
}
```
2. 부모.prototype에 추가됨
  부모의 prototype에 있던 sayHi() 함수를 쓸 수 있습니다.
```
class 부모 {
  constructor(){
    this.name = 'Kim';
  }
  sayHi(){
    console.log('hi')
  }
}
```

**차이점**
2번은 물려받는게 아님. 자식 오브젝트에 추가되지않음 부모의 프로토타입에 추가됨

자식.__proto__;
Object.getPrototypeOf(자식); // 둘이 동일함

// 함수를 더 추가하고 싶을 때
```
class 부모 {
  constructor(){
    this.name = 'Kim';
  }
  sayHi(){
    console.log('hi')
  }
  sayHello(){
    console.log('hello')
  }
}
```

// 직접 추가도 가능
```
부모.prototype.sayHello = function(){}

class의 콘스트럭트 안에 파라미터 추가
class 부모 {
  constructor($val){
    this.name = $val;
  }
  sayHi(){
    console.log('hi')
  }
}
```


```
class 부모 {
  constructor(이름, 나이){
    this.name = 이름;
    this.age = 나이;
  }
  sayHi(){
    console.log('안녕');
  }
  sayHello(){
    console.log('안녕하세요');
  }
}
```
var 자식 = new 부모('Park');

**디폴트 파라미터도 사용가능**

============
1.  extends / super

extends == class 상속/복사

class grandFather {
  constructor (name){
    this.lastName = 'Kim';
    this.firstName = name;
  }
};

var grandF1 = new grandFather('one');

class father extends grandFather {
  constructor(name){
    super(name); // 여기엔 this를 쓸 수 없음 super() 다음에 써야함. // grandFather의 constructor를 펼침
    this.age = 50;
  }
};

var father1 = new father('two');

----------
파라미터 2개 이상 쓰기

class grandFather {
  constructor (name, name2){
    this.lastName = 'Kim';
    this.firstName = name;
    this.firstName2 = name2;
  }
};

class father extends grandFather {
  constructor(name, name2){ // 잘 명시해주기
    super(name, name2);
    this.age = 50;
  }
};

-----
super()의 또 다른 용도

class grandFather {
  constructor (name){
    this.lastName = 'Kim';
    this.firstName = name;
  }
  sayHi(){
    console.log('hi')
  }
};

class father extends grandFather {
  constructor(name){
    super(name);  // 부모 class의 constructor를 의미
    this.age = 50;
  }
  sayHi(){
    console.log('hello')
    super.sayHi(); // 부모 class의 prototype을 의미
  }
};

father1.sayHi() // hello


==============
19. getter / setter

var person = {
  name: 'Park',
  age: 30
};

person.age; // 30

자료를 꺼내고 싶을 때
- 자료를 꺼내는 법을 만들어서 꺼낸다.

var person = {
  name: 'Park',
  age: 30,
  nextAge(){
    return this.age + 1;
  }
};

person.nextAge(); // 31
person.age +1 과 동일

함수를 만들어서 object 데이터를 다루는 이유는
1. object 자료가 복잡할 때
2. object 자료 수정시 편리

나이를 변경할 수 있는 함수
var person = {
  name: 'Park',
  age: 30,
  nextAge(){
    return this.age + 1;
  },
  setAge($age){
    this.age = parseInt($age); //안전장치 기능개발 가능
  }
};

person.setAge(20); 

데이터를 꺼내거나 수정할 때 편리&실수방지&관리가능

---------
복잡한 소괄호가 싫다면. set/get 키워드
var person = {
  name: 'Park',
  age: 30,
  get nextAge(){
    return this.age + 1;
  },
  set setAge($age){
    this.age = parseInt($age);
  }
};

person.setAge = '25'; //소괄호 쓰지않기
person.nextAge;

set은 데이터를 변경하는 함수에.
get은 데이터를 꺼내쓰는 함수에.

-------
get 함수들(getter)
- return이 있어야한다.
- 파라미터를 넣을 수 없음

set 함수들 (setter)
- 파라미터가 1개 있어야한다.

------------
class에서 사용하는 get/set

class Person {
  constructor(){
    this.name = 'park';
    this.age = 20;
  }
  get nextAge(){
    return this.age + 1
  }
  set setAge($age) {
    this.age = parseInt($age)
  }
}

var person1 = new Person();

person1.nextAge;
person1.setAge = 25;

꺼내 쓸 데이터를 미리 정의해두는 것..

================
class, extends, getter, setter 연습문제 5개

1. 직접 class 구조 만들어보기
var 강아지1 = { type : '말티즈', color : 'white' };
var 강아지2 = { type : '진돗개', color : 'brown' }; 
이렇게 쭉 많이 만들고 싶은데 하드코딩하기 싫어서 class를 만들어 강아지 오브젝트들을 뽑고 싶습니다.

그럼 class를 어떻게 만드는게 좋을까요? 

==
class Dog {
  constructor (type,color){
    this.type = type;
    this.color = color;
  };
};
var 강아지1 = new Dog('말티즈','white')
var 강아지2 = new Dog('진돗개','brown')

---------
2. 이번엔 고양이관련 object들을 만들고 싶습니다. 
var 고양이1 = { type : '코숏', color : 'white', age : 5 };
var 고양이2 = { type : '러시안블루', color : 'brown', age : 2 }; 
type, color는 이전에 만든 강아지 object와 유사한데

고양이들만 특별하게 age라는 속성을 하나 더 추가하고 싶습니다. 어떻게 class를 만들면 될까요? 

1번 문제에서 만들었던 강아지 class와 유사하기 때문에 extends라는 문법을 쓰는 것도 좋겠군요. 

==
class Dog {
  constructor (type,color){
    this.type = type;
    this.color = color;
  };
};

class Cat extends Dog {
  constructor(type,color,age){
    super(type,color,age);
    this.age = age;
  }
}

var 고양이1 = new Cat('코숏','white',5)
var 고양이2 = new Cat('러시안블루','brown',2)

------
3. 고양이와 강아지 object들에 기능을 하나 추가하고 싶습니다. 
모든 고양이와 강아지 object들은 .한살먹기() 라는 함수를 사용할 수 있습니다. 

(1) 한살먹기 함수는 강아지 class로부터 생성된 오브젝트가 사용하면 콘솔창에 에러를 출력해주어야합니다. 

(2) 한살먹기 함수는 고양이 class로 부터 생성된 오브젝트가 사용하면 현재 가지고있는 age 속성에 1을 더해주는 기능을 실행해야합니다.

한살먹기 함수는 어떻게 만들면 좋을까요? (검색이 필요할 수 있습니다)

==
class Dog {
  constructor (type,color){
    this.type = type;
    this.color = color;
  };
  한살먹기 () {
    if( this instanceof Cat) {
      this.age++
    }
  }
};
class Cat extends Dog {
  constructor(type,color,age){
    super(type,color,age);
    this.age = age;
  }
};
== 해설
자바스크립트는 instanceof 라는 고마운 연산자가 있습니다.

a instanceof b 이렇게 쓰시면 a가 b로부터 생성된 오브젝트인지 아닌지를 true/false로 알려주는 연산자입니다.

그래서 한살먹기()라는 함수를 만들고 this.age++를 해주는 기능을 넣었는데 이 기능은 this가 instanceof Cat인 경우에만 실행하도록 if문을 추가했습니다.

그럼 이제 Cat으로 부터 생성된 오브젝트들만 한살먹기() 내부 기능을 사용가능합니다.


----
4. get/set을 이용해봅시다
자바스크립트로 간단한 게임 기능을 가진 오브젝트를 뽑는 class를 만들고 싶습니다. 
다음 조건에 따라 class를 만들어보세요. class 이름은 Unit이라고 합시다.

(1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정되어 있어야 합니다.
(2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있습니다.
console.log( 인스턴스.battlePoint ) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력해주어야합니다.
(3) 모든 Unit의 인스턴스는 heal이라는 setter가 있습니다.
인스턴스.heal = 50 이렇게 사용하면 체력 속성이 50 증가해야합니다. 

*인스턴스는 class로부터 새로생성되는 오브젝트를 뜻합니다.

==
class Unit {
  constructor (){
    this.공격력 = 5;
    this.체력 = 100
  }
  get battlePoint (){
    return this.공격력 + this.체력
  }
  set heal ($val){
    this.체력 = this.체력 + $val
  }
}

var ins = new Unit();

console.log(ins.battlePoint);
ins.heal = 50;
console.log(ins.체력);

----------
5. get/set을 이용해봅시다2 
다음과 같은 오브젝트가 있습니다. 

var data = {
  odd : [],
  even : []
}
 
(1) data 오브젝트안에 setter 역할 함수를 하나 만들어보십시오.
setter 함수에 1,2,3,4 이렇게 아무 자연수나 파라미터로 입력하면 홀수는 odd, 짝수는 even 이라는 속성에 array 형태로 저장되어야합니다.   

(2) data 오브젝트안에 getter 역할 함수를 하나 만들어보십시오.
getter 함수를 사용하면 odd, even에 저장된 모든 데이터들이 숫자순으로 정렬되어 출력되어야합니다. 

예를 들면
data.setter함수(1,2,3,4,5) 이렇게 입력하면 

data = { odd : [1,3,5], even : [2,4] }

이렇게 저장이 되어야합니다. 

빨리 위의 역할을 하는 함수 두개를 data 오브젝트 내에 만들어보십시오. 

==
var data = {
  odd : [],
  even : [],
  numSet (...num){
    for(let i = 0; i<num.length; i++){
      if(i % 2 == 1 ){
        data.odd.push(i)
      } else {
        data.even.push(i)
      }
    }
  }
}

console.log(data.odd);
console.log(data.even);