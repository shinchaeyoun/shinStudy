# 20.Destructuring
// 패턴 매칭이라고도 부름

var arr = [2,3,4];

#### array 데이터를 전부 변수에 담으려면?
var a = arr[0];
var b = arr[1];
var c = arr[2];
or
var a,b,c = [2,3,4];
or
var [a,b,c] = [2,3,4];

* array destructuring
* 직관적으로 변수를 만들 수 있음

var [a,b,c=10] = [2,3] // c=10;
var [a,b,c=10] = [] // a=undefined;

- 등호로 기본값 지정 가능
- 디폴트 변수값 지정 가능

#### object 데이터를 꺼내 변수에 담으려면?
- 변수명을 key명과 똑같이 써야한다
- (기본값)디폴트 파라미터 적용 가능
- 변수를 만들 때 이름을 바꿀 수 있음
- 오브젝트나 어레이를 해체해서 사용 가능

var obj = { name : 'Kim', age : 30 };

var name = obj.name;
var age = obj.age;
or
var {name,age} = { name : 'Kim', age : 30 };

- (기본값)디폴트 파라미터 적용 가능
var {name,age = 31} = { name : 'Kim'};


var {name: 나이 = 'park'} = { name : 'Kim'};
var {name: 나이 = 'park'} = {};

#### 반대로 변수들을 object에 집어넣고 싶은 경우

var name = 'Kim';
var age = 20;

var obj = { name : name, age : age };

ES6문법
- key값과 value값이 동일하면 가넝

var obj = { name , age };

파라미터에도 똑같이 사용 가능

#### 함수 파라미터 만들 때도 destructrion 문법 사용 가능

- 파라미터는 변수와 동일
  

var obj = { name : 'Kim', age : 30 };

function 함수(){
  console.log(파라미터)
};

함수 (obj);

function 함수( {name, age} ){
  console.log(name)
  console.log(age)
};

함수 ({ name : 'Kim', age : 30 });

함수 파라미터 변수를 만들 때도 디스트럭처링 문법 사용 가능

- array의 경우
function 함수( [name, age] ){
  console.log(name)
  console.log(age)
};
함수 ([1,2,]);

===============
연습문제

Q1. 변수를 마구 만들었는데 말입니다..
var [number, address] = [ 30, 'seoul' ];
var {address : a , number = 20 } = { address, number };
약간 복잡해서 여러분께 물어보겠습니다.
a와 address와 number라는 변수는 각각 무슨 값을 가지고 있을까요? 

==
a = seoul;
address = seoul;
number = 30;

--
Q2. 다음과 같은 Object에서 데이터를 뽑아서 변수를 만들고 싶습니다. 

let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};

여기서 키, 몸무게, 상의사이즈, 하의사이즈 정보를 각각 뽑아서 4개의 변수를 만들고 싶습니다.

(참고 : 데이터가 얼마나 복잡하든간에 좌우 형태를 똑같이 맞추시면 destructuring 문법으로 변수를 만들 수 있습니다.)

==
let {
  body: {
    height, 
    weight
  },
  size: [ 상의, 하의 ]
} = 신체정보;

=============
# 21. import/export
(library.js)
var a = 10;
export default a; // a라는 변수를 기본으로 익스폴드 하겠다는 뜻

(index.html)
<script type="module">
  import a from 'library.js';
  console.log(a);
</script>

import 가져올거 from '경로'
가져올거=>특정한 변수
import시 가져올거라는 변수명은 여러분 아무렇게나 작명이 가능합니다.

#### 1. 하나만 내보내는 export default 문법
import 가져올거 from '경로'
export default 내보낼거
  * export default를 쓰면 import할 때 이름 변경은 상관 없음
  * export default는 파일당 1회 사용

#### 2. 여러개를 내보내는 export문법
export 라는 키워드를 여러번 사용

(library.js)
var a = 10;
var b = 20;
export {a, b};

(index.html)

<script type="module">
  import {a,b} from 'library.js';
  console.log(a);
</script>

export {변수명1, 변수명2 ...} 이렇게 담아주셔야합니다.
혹은 export var a = 10;

export 키워드로 내보낸 것들을 import 하실 땐 
import {변수명1, 변수명2 ...} from '경로' 이렇게 가져오셔야합니다.

  - export default는 한번만 쓸 수 있고 import시엔 변수명을 새롭게 작명가능하다
  - export는 {변수명1, 변수명2 ...} 이렇게 담아야하고 import 할 때도 정확히 변수명을 써줘야한다

라는 특징이 있습니다. 

#### 3. export와 export default 동시 사용

(library.js)

var a = 10;
var b = 20;
var c = 30;
export {a, b};
export default c;

(index.html)

<script type="module">
  import c, {a,b} from 'library.js';
  console.log(c);
</script>

export default 한건 맨 왼쪽에 써주시면 되고 
그 다음부터 이제 {} 중괄호 안에 export 했던 변수들을 적어주시면 됩니다.

#### 4. 변수명이 마음에 안들면 as로 새로 짓자
import {변수 as 새변수명} from '/.js'

(library.js)

var a = 10;
var c = 30;
export {a};
export default c;

(index.html)

<script type="module">
  import c, {a as 폭발} from 'library.js';
  console.log(폭발);
</script>

* 5. 모든걸 다 import 해오는 '*'기호
import * 변수들명 from '경로'

(library.js)

var a = 10;
var b = 20;
var c = 30;
export {a,b};
export default c;

(index.html)

<script type="module">
  import c, * as 변수모음 from 'library.js';
  console.log(변수모음.a);
  console.log(c);
</script>

* 이라는 기호는 export { } 했던 애들을 그냥 다 import 해주세요~ 라는 뜻입니다. 
근데 그냥 쓰면 안되고 as로 별명을 꼭 지어주어야합니다. 
(export default 했던건 그냥 원래대로 import 하시면 되고요)


#### 옛날 방식 : var 변수 = require('경로');
(export 하는 js파일)
module.exports.a = 10 ;

(import 하는 js파일)
var 가져온거 = require('/library.js'); 


import/export는 당연 IE 호환성이 없기 때문에
단순한 html css js 프론트엔드 개발시 JS파일을 HTML에 첨부하시려면
<script src="경로"></script> 이걸 쓰도록 합시다. 이것이 원조 import 문법 아니겠습니까. 

혹은 모던 브라우저에선 <script type="module" src="경로"></script> 이렇게 하면 import export 문법이 사용가능해지는데
대부분은 리액트 뷰 nodejs 이런거할 때 많이 사용하게 됩니다. 

------

# Stack, Queue를 이용한 웹브라우저 동작원리

처리가 오래 걸리는 코드= 서버로의 Ajax 요청, 이벤트 리스너, setTimeout 이런 코드들.

처리가 오래 걸리는 코드들은 Stack에 쌓아서 실행하지 않고 잠깐 보류해두었다가 완료 되는 시점에서 Stack으로 보내진다.

Stack이 텅 빈 시점에서 코드가 들어가된다.
처리가 오래 걸리는 코드들이 실행 준비가 되면 Queue라는 곳에 집어넣고 Queue에 있던 코드는 Stack으로 옮겨서 실행하게 된다. Stack이 비어있을 때만 차례로 집어 넣어서 실행하게 됨.
Queue는 들어온 순서대로 차례로 Stack으로 옮겨줌.

Stack을 바쁘게하면 웹사이트가 버벅이겠구나 라는 생각을 하며 코드짜도록 합시다. 

-------

# 22. sync/async & callback

#### 자바스크립트는 항상 동기식 처리 (synchronous)
동기식 처리가 뭐냐면 한번에 코드 한줄씩 차례차례 실행된다는 소리입니다.

##### 비동기처리 (asynchronous)라는 것도 가능합니다
비동기식 처리
  - 오래 걸리는 작업이 있으면 제껴두고 다른 것부터 처리하는 방식
  - 이벤트리스너, setTimeout, Ajax 서버 통신
빨리 처리되는거 먼저 실행하여서 사이트가 멈추는 일이 없어짐

#### 콜백함수를 이용한 순차적 실행
자바스크립트는 비동기상황 등에서 코드를 순차적으로 실행하고 싶을 때 콜백함수를 적극 활용
  *함수안에 들어가는 함수는 전부 콜백함수

콜백함수를 이용한 함수 디자인
콜백함수는 동기, 비동기가 아니라 함수 디자인 패턴일 뿐.

function 첫째함수(콜백){
  console.log(1);
  콜백();
}
function 둘째함수(){
  console.log(2)
}
첫째함수(둘째함수);

함수에 파라미터를 하나 뚫고 파라미터에 소괄호로 실행.
함수안에 함수를 집어 넣어서 실행이 가능해짐.

미리 만들어 놓은 함수를 집어 넣을 수도 있고,
첫째함수(function(){
  console.log(2)
});
직업 함수선언문을 집어넣을 수도 있다.

* 콜백함수의 문제점
  순차적으로 실행하려고 콜백함수를 여러개 사용시 단점
  코드가 옆으로 길어지게 된다.
  => ES6 신문법인 Promise라는 기계를 만들어 사용하면 해결 가능
  더 쉽게 쓰기 위한 Promise 패턴

콜백대신 쓸 수 있는 Promise 디자인 패턴

첫째함수().then(function(){
  next code
}).then(function(){
  next code
});

then이라는 키워드 덕에 옆으로 길어지지도 않고 뭘 하는지도 파악이 쉬워짐

===========

# 23. Promise
Promise = 성공/ 실패 판정 기계

var 프로미스 = new Promise();

> 프로미스.then(function(){
  first
}).then(function(){
  secone
});

>프로미스.catch(function(){
  실패할 경우
});

>프로미스.finally(function(){
  성공이든 실패이든 결과가 일어날 경우
});

 - 옆으로 길어지지 않아서 가독성이 좋음
 - 실패할 경우에도 코드 실행 가능

(일반 콜백함수)
1번 실행 후 2번 실행
(Promise로 만든거)
1번 실행 후 성공시 2번 실행~ 실패시 3번 실행~

var 프로미스 = new Promise(); = 성공/실패 판정 기계

프로미스.then(function(){
  // 프로미스가 성공일 경우 실행할 코드
}).catch(function(){
  // 실패할 경우에도 코드실행 가능
});

Promise를 를 쉽게 정의하자면 성공&실패 판정기계

성공/실패 판정 기계인 Promise 디자인하는 법
> var 프로미스 = new Promise(function(resolve, reject){
  resolve(); // 성공 판정 내리는 법 -> then 실행
  reject(); // 실패 판정 내리는 법 -> catch 실행
});

콜백함수 대신에 씀.

#### Promise 예시
성공시
>var 프로미스 = new Promise(function(resolve, reject){
  var hard = 1 + 1;
  resolve();
});
프로미스.then(function(){
  console.log('resolve')
});

실패시
var 프로미스 = new Promise(function(resolve, reject){
  var hard = 1 + 1;
  reject();
});
프로미스.catch(function(){
  console.log('reject')
});

1. 콜백 대신 예쁜 코드
2. 성공/실패의 경우에 맞춰 각각 다른 코드 사용 가능

파라미터 사용.
var 프로미스 = new Promise(function(resolve, reject){
  var hard = 1 + 1;
  reject(10); // then 함수까지 값이 전해짐
});
프로미스.then(function(result){
  console.log(result)
}).then(function(){
  console.log('reject')
});

#### Promise 예시2
1초 대기 성공 후에 특정 코드를 실행하려면?

var 프로미스 = new Promise(function(성공, 실패){
  setTimeout(function(){
    성공();
  }, 1000);
});

프로미스.then(function(){
  console.log('1초 대기 성공했습니다')
}).catch(function(){
  console.log('실패했습니다')
});


#### Promise의 몇가지 특징
1. new Promise()로 생성된 변수를 콘솔창에 출력해보시면 현재 상태를 알 수 있습니다.
   1. 성공하면 <resolved>
   2. 판정 대기중이면 <pending>
   3. 실패하면 <rejected>

2. Promise는 동기를 비동기로 만들어주는 코드가 아닙니다. 
일종의 디자인 패턴입니다. 비동기 실행을 지원하는 특수한 함수들 덕분에 가끔 비동기적 실행이 될 뿐.
콜백함수 디자인의 대체품일 뿐

Promise가 적용된 곳들
>jQuery.ajax();
fetch().then().catch();

====
# ES6 Promise 간단 연습문제

Q1. <img> 이미지 로딩 성공시 특정 코드를 실행하고 싶습니다. 
HTML 안에 있는 이미지 로딩이 끝나면 무언가 코드를 실행하고 싶습니다. 

<img id="test" src="https://codingapple1.github.io/kona.jpg"> 

이 이미지가 로드가 되면 콘솔창에 성공, 로드가 실패하면 콘솔창에 실패를 출력하고 싶은데
Promise 문법의 then, catch 함수를 사용해 만들고 싶습니다. 어떻게 코드를 짜면 될까요?

(참고) 이미지 로딩이 끝났다는 것은 <img>에 load라는 이벤트리스너를 붙여서 체크가 가능합니다. 

(참고) 이미지 로딩이 실패했다는 것은 <img>에 error라는 이벤트리스너를 붙여서 체크가 가능합니다.

--
let img = document.getElementById('test');

Promise를 이용해서 로딩성공시 .then() 실패시 .catch()를 실행하도록 코드
var imgLoad = new Promise(function (resolve, reject){
  let img = document.getElementById('test');
  img.addEventListener('load', function(){
    resolve();
  });
  img.addEventListener('error', function(){
    reject();
  });
});

imgLoad.then(function(){
  console.log('resolve');
}).catch(function(){
  console.log('reject');
});

=====
Q2. Ajax 요청이 성공하면 무언가 코드를 실행하고 싶습니다. 

https://codingapple1.github.io/hello.txt 라는 경로로 GET 요청을 하면 인삿말이 하나 딸려옵니다.

여기로 GET 요청을 해서 성공하면
Promise의 then 함수를 이용해서 Ajax로 받아온 인삿말을 콘솔창에 출력해주고 싶습니다.
어떻게 하면 될까요?
(jQuery done함수 자체에 Promise 기능이 있기 때문에 코드가 약간 중복도 많고 쓸데없을 수 있지만 연습삼아 해봅시다.)

이것은 jQuery Ajax 편리하니까 jQuery CDN 파일

--
(html 파일)
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> 

<script type="module">

let promise = new Promise(function (resolve, reject){
  $.get('https://codingapple1.github.io/hello.txt').done(function(결과){
    resolve(결과)
  });
});

promise.then(function(결과){
  console.log(결과);
});
</script>

====
Q3. Promise chaining 
2번 문제에서 https://codingapple1.github.io/hello.txt 라는 경로로 GET 요청을 한 뒤에
.then을 이용해 인삿말을 콘솔창에 출력해보았습니다. 

이번엔 그 직후 https://codingapple1.github.io/hello2.txt 라는 경로로 GET 요청을 또 하고
.then을 이용해 인삿말을 또 출력해보고 싶습니다. 

쉽게 말하면 
1. hello.txt GET 요청
2. 그게 완료되면 hello2.txt GET 요청
3. 그게 완료되면 hello2.txt 결과를 콘솔창에 출력
을 하고 싶다는 말입니다. 

2번에서 만든 코드를 어떻게 업데이트하면 될까요?

힌트1) 프로미스.then(()=>{둘째실행할거}).then(()=>{셋째실행할거})

이렇게 then을 여러개 이어붙여 만들어봅시다.

힌트2) .then()은 당연히 new Promise()로 생성한 프로미스 오브젝트들에 붙일 수 있습니다.

--
(html 파일)
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<script type="module">

  var 프로미스 = new Promise(function (성공, 실패) {
    $.get('https://codingapple1.github.io/hello.txt').done(function (결과) {
      성공(결과)
    });
  });

  프로미스.then(function (결과) {
    console.log(결과);

    var 프로미스2 = new Promise(function (성공, 실패) {
      $.get('https://codingapple1.github.io/hello2.txt').done(function (결과) {
        성공(결과)
      })
    });

    return 프로미스2;

  }).then(function (결과) {
    console.log(결과);
  }) 
</script>

함수로 싸매기
>var 프로미스 = ajax해주는함수('https://codingapple1.github.io/hello.txt');<br/>
프로미스.then(function (결과) {
 console.log(결과);
 return ajax해주는함수('https://codingapple1.github.io/hello2.txt');
}).then(function (결과) {
 console.log(결과);
});<br/>
function ajax해주는함수(URL){
 return new Promise(function (resolve, rejcet) {
   $.get(URL).done(function (결과) {
     resolve(결과);
    });
 });
}

-- 
var getUrl = setUrl('https://codingapple1.github.io/hello.txt');

getUrl.then(function (val) {
  console.log(val);

  return setUrl('https://codingapple1.github.io/hello2.txt');
}).then(function (val) {
  console.log(val);
});

function setUrl(url){
  return new Promise(function (resolve, reject) {
    $.get(url).done(function (result) {
      resolve(result);
    });
  });
};


===========
# 24.async/await

#### async
Promise와 then을 매우 쉽게 만들어주는 문법

async 키워드를 쓰면 Promise 오브젝트가 절로 생성됨
*근데 이 키워드는 function 선언 앞에만 붙일 수 있음

async function 어려운연산 (){
  1 + 1 
}
이 함수 자체가 Promise가 되어버립니다. 
그래서 이 함수를 실행할 때 뒤에 then을 붙일 수 있습니다. Promise니까요. 
*함수를 실행하면 그 자리에 Promise 인스턴스 (new Promise() 로 만든 오브젝트)가 남습니다.

async function 더하기(){
  1 + 1 
};
더하기().then(function(){
  console.log('더하기 성공했어요')
});
콜백이나 new Promise 디자인 안해도 Promise를 리턴함

함수안에서 연산한 결과를 then 안에서 사용하고 싶다면
async function 더하기(){
  return 1 + 1;
};
더하기().then(function(결과){
  console.log(결과);
});
return 오른쪽에 결과를 적어주면, then 함수로 값 보내기 가능

성공만 판정 가능. / 실패 사용 가능. 강제로 실패를 보내줄 순 있음
async function 더하기(){
  return Promise.reject('실패임')
};

#### await
async 함수 안에서만 사용할 수 있는 await 키워드

함수 안에서 Promise 쓰기
await는 프로미스.then() 대체품으로 생각하면 됨
하지만 then보다 문법이 훨씬 간단함.

async function 더하기(){
  var 프로미스 = new Promise(function(성공, 실패){
    var 힘든연산 = 1 + 1;
    성공();
  });

  프로미스.then(function(){
    console.log('성공했어요');
  }); // 프로미스 내의 연산이 성공하면 이 코드를 실행해주세요~
};
더하기();
프로미스.then() 문법

await를 사용하면
async function 더하기(){
  var 프로미스 = new Promise(function(성공, 실패){
    var 결과 = 1 + 1;
    성공();
  });
  var 결과 = await 프로미스;
};
프로미스.then()과 매우 유사한 문법.
await의 정확한 뜻은 '프로미스 Promise를 기다린 다음에 완료되면 결과를 변수에 담아주세요'라는 뜻

연산 결과를 출력하고 싶다면 성공 함수에 파라미터 담기.
async function 더하기 (){
  var 어려운연산 = new Promise(function(resolve, reject){
    var 결과 = 1 + 1;
    resolve(결과);
  });
  var 결과 = await 어려운연산;
  console.log(결과);
};
더하기();
resolve()함수 안에 있던 2라는 파라미터는 var 결과라는 변수에 저장됨.
그럼 Promise의 연산 결과도 출력 가능

*비동기식처리되는 코드를 담는다면 await 기다리는 동안 브라우저가 잠시 멈출 수 있음

await을 쓰려면 async functinon 안에서만 쓸 수 있음
await 프로미스; 코드를 async function을 하나 만들어서 감싸기

#### await는 실패하면 에러가 나고 코드가 멈춤

async function 더하기(){
  var 어려운연산 = new Promise((성공, 실패)=>{
    실패();
  });
  var 결과 = await 어려운연산;
  console.log(결과);
}
더하기();
어려운연산이라는 Promise가 실패할 경우
await 어려운연산이라는 코드는 에러가 나고 코드 실행을 멈춤

await 하단에 있는 코드들은 실행되지 않게 됨.

그래서 Promise가 실패할 경우 코드실행을 멈추지 않고 싶다면 try catch 문법 사용.

try { 이걸해보고에러나면 } catch { 이걸실행해주세요 }

=========
예제 : <button>을 누르면 성공하는 Promise 만들기

Q. HTML 페이지 내에 버튼 아무거나 하나 만들고
그걸 클릭하면 성공하는 Promise를 만들고 싶습니다. 
성공하면 콘솔창에 '성공했어요'를 출력하고요.
어떻게 코드를 짜면 될까요? 
(async, await이 필요하면 써봅시다)

--
<button id="btn">button</button>

<script>
  let btn = document.getElementById('btn');

  async function btnEvent (){
    return console.log('성공했어요');
  };

  btn.addEventListener('click', btnEvent);
</script>

==해설
<button id="btn">button</button>

<script>
  let btn = document.getElementById('btn');

  var 프로미스 = new Promise(function(resolve, reject){
    btn.addEventListener('click', function(){
      resolve();
    });
  });
  async function clickButton(){
    var result = await 프로미스;
    console.log('성공했어요');
  };

  clickButton();
</script>
1. 일단 위의 버튼을 누르면 성공판정을 내리는 Promise를 만들었습니다.

2. 근데 이제 그게 성공하면 console.log()를 해주는 코드를 짜려고 봤더니 then을 쓰기 싫어서
await 프로미스;  이렇게 작성했습니다. 

3. 근데 await 을 쓰려면 async functinon 안에서만 쓸 수 있댔죠?
그래서 await 프로미스; 코드를 async function을 하나 만들어서 감쌌을 뿐입니다. 

** ?? then을 쓰기 싫어서 awairt를 쓰는건가..?

-- 또 다른 방법.
<button id="test">버튼</button>

<script>
  async function 프로미스(){
    document.getElementById('test').addEventListener('click', function(){
      return '성공했어요'
    });
  }
  async function 버튼누르기(){
    var 결과 = await 프로미스();
    console.log(결과)
  }
  버튼누르기();
</script>
▲근데 위의 코드는 잘 동작하지 않습니다.

여기서의 return의 이미는 async function의 return이 아니라 이벤트리스너안의 함수의 return문이라 문제가 되며, 더 중요한 문제는 

  1. 이벤트리스너안의 코드는 버튼이 눌릴 때 실행됨.
  2. 컴퓨터가 코드를 읽을 때 async function 프로미스() 함수 내부는 빈칸과 동일함.
  3. 자바스크립트는 function 안이 빈칸이면 자동으로 return undefined를 채워 실행함.
  (3번으로 인해서 async function 프로미스()는 0초만에 자동으로 성동()판정이 되어버림)

그래서 하단의
var 결과 = await 프로미스();
이 코드는 프로미스()가 0초만에 성공 판정이 내려져서 var 결과 = undefined와 동일한 뜻이 되어버림

하지만 Promise로 만들어서 직접 성공(), 실패() 경우를 지정해준다면 await이 잘 기다려줍니다.

============
# 25. for in / for of

반복문의 용도
1. 코드 단순 반복
2. 자료형에 담긴 자료들을 하나씩 꺼내고 싶을 때

>그냥 for 반복문
array 전용 forEach()
Object 전용 for in
iterable 전용 for of

#### for in
for in 반복문은 Object 자료형에 저장된 자료들을 하나씩 꺼내고 싶을 때 사용

var Obj = { name : 'Kim', age : 30 };
for (var key in Obj) {
  console.log(Obj[key]);
};

##### for in 반복문의 특징
1. enumerable한 것만 출력
* enumerable을 번역하면 '셀수있는' 이라는 뜻

Object 자료형을 만들 때
{name:'Kim'} 이걸 저장하면 Kim이라는 자료만 저장되는 것이 아니라
Kim과 함께 비밀스러운 속성들 3개가 저장된다.

var 오브젝트 = { name : 'Kim', age : 30 };
console.log( Object.getOwnPropertyDescriptor(오브젝트, 'name') ); 
==> {value: "Kim", writable: true, enumerable: true, configurable: true} 
위의 세가지가 Kim과 함께 저장되는 속성들이다. (그래서 Object 자료형이 좀 무거움)
여기서 enumerable이라는 것이 있는데 이게 true인 자료들만 for in 반복문이 출력할 수 있다.
이걸 강제로 false로 만들면 for in 반복문이 거르게 됨
이런 동작원리를 가진게 for in 반복문임

2. 부모의 prototype도 반복해준다.

>class 부모 {}
부모.prototyle.name = 'park';<br/>
var obj = new 부모();
for (var key in obj){
   console.log(obj[key]);
};
park이라는 자료는 부모가 가지고 있는 것인데도 출력이 됨. 이게 단점임.
부모가 가진 자료를 출력하지 않으려면 if문 추가

>class 부모 {}
부모.prototyle.name = 'park';<br/>
var obj = new 부모();
for (var key in obj){
  obj.hasOwnProperty(key) // 내가 직접 가지고 있는 값만 반복시키고 싶으면.
  if(obj.hasOwnProperty(key)){
     console.log(obj[key]);
  };
};

obj.hasOwnProperty() 함수는 오브젝트가 이 key값을 직접 가지고 있는지 물어보는 함수
가지고 있다묜 true, 없다면 false를 뱉어줌
내가 가진 것만 반복시키고 싶다면 obj.hasOwnProperty()를 써야함

#### for of 반복문
Array, 문자, argmen, NodeList, Map, Set 이라는 자료형에 적용할 수 있는 반복문

>var arr = [1,2,3,4,5];
for (var data of arr){
  console.log(data);
};
<br/>
for (var data of '문자도 쓸 수 있음'){
  console.log(data);
};

##### for of 특징
iterable인 자료형에만 적용 가능한 반복문

iterable한 자료형은 [Symbol.iterator]() 이라는 일종의 메소드를 가지고 있는 자료형들을 뜻함
반복문 출력을 도와주는 일종의 함수. 이걸 가지고 있으면 for of 반복문을 쓸 수 있구나~ 정도

for of는 NodeList라는 곳에도 사용할 수 있는데
우리가 흔히 document.getElementsByClassName()이나 document.querySelectorAll() 이런 셀렉터로 찾은 요소들이 [] 대괄호안에 담겨오는데 array는 아니고 NodeList라는 자료형이라고 부릅니다. 
NodeList에 있는 HTML요소들을 하나씩 꺼내서 처리할 때 매우 자주 쓸 수 있는 반복문이라고 보시면 됩니다. (하지만 for of의 호환성 주의)

-------
Q1. for of 반복문을 이용해서 2단부터 9단까지의 구구단을 콘솔창에 한번 출력해보십시오.

--
>let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]<br/>
for (var i of data) {
 for (var j of data) {
   console.log(`${i} x ${j} = ${i*j}`)
 }
}

----------
var products = [
  {
    name1 : 'chair',
    price1 : 7000,
  },
  {
    name2 : 'sofa',
    price : 5000,
  },
  {
    name1 : 'desk',
    price3 : 9000,
  },
]; 

Q. 어떤 놈이 object자료의 key값에 오타를 섞어놨습니다.
key값 마지막 문자에 한자릿수 숫자가 섞여있으면 그걸 다 제거하고 싶습니다. 
어떻게 코드를 짜면 될까요? 
마지막 글자가 숫자인지 판단하는 방법도 잘 찾아봐야겠군요.
 
(예시)
array안의 object안에 들어있는 
name1 : 'chair' 이게
name : 'chair' 이렇게 숫자만 깔끔하게 없어져야합니다.

--
let newValue;
let newKey;

for (let item of products) {
 for (let key in item) {
   if (isNaN(parseInt(체리 MX 1.1 TKLkey.slice(-1))) == false) {
     newValue = item[key];
     newKey = key.slice(0, -1);
     item[newKey] = newValue;
     delete item[key];
   }
 }
}
console.log(products);

숫자가 붙은 key값을 찾아내서 slice로 숫자 제거
newValue 변수에 기존의 아이템 값을 담고,
newKey로 기존 키값에 숫자 제거 후 아이템 값 재설절 하고
기존 값은 그냥 지워버림

=============

# 26. Symbol
Symbol의 사용 목적은 객체의 고유한 프로퍼티 키를 만들기 위해 사용됩니다.

자바스크립트에는 string, number, boolean, null, undefined, object 6개의 데이터 타입이 있었다. 그리고 es6에서 새로운 데이터 타입 Symbol이 추가 됨

심볼은 변경 불가능한 원시 타입의 값이며, 다른 값과 중복되지 않는 고유한 값.
충돌 위험이 없는 오브젝트의 유일한 프로퍼티 키를 만들기 위해 사용할 수 있다.
하위호환성을 유지하면서 표준을 확장하거나 고유한 상수값을 만드는 데 사용할 수 있다.

Symbol 값은 Symbol 함수를 호출하여 생성. Symbol 함수에 의해 동적으로 생성되며 다른 값과 중복되지 않는 고유한 값. 생성된 심볼 값은 외부로 노출되지 않아서 확인 할 수 없는 값.

Symbol 자료형 만드는 법
var 심볼 = Symbol('설명아무거나적기');

오브젝트 안에 주석을 다는 것 / 주석 하나만 달랑 저장할 수 있는 자료형

Symbol은 Object자료형에 비밀스러운 Key 값을 담을 때 사용

오브젝트자료[심볼명] = 넣을자료;
라는 식으로 Key값으로 입력 가능. Object자료형에 Symbol을 이름으로 가진 자료를 저장할 수 있다.

> var person = { name : 'Kim' };
person.weight = 100;
<br/>
var weight = Symbol('내 진짜 몸무게');
person[weight] = 200;
<br/>
console.log(person);

Symbol 자료형의 특징은 for문에 등장하지 않음.
Symbol은 반복문에서 감지하지 못한다. 시크릿한 내용을 저장하고 싶을 때 Symbol을 이용해서 자료를 저장하면 된다~

심볼을 직접 입력하려면 

>var height = Symbol('내 키임');
var person = { name : 'Kim', [height] : 160 };

Object 자료형에 직접 입력하실 때는 저렇게 대괄호안에 심볼명을 담아주면 됨. 


#### Symbol 특징
1. Symbol('') 에 들어가는 설명이 동일해도 같은 symbol이 아님
   var a = Symbol('hi');
   var b = Symbol('hi');
   console.log(a === b); / false

   Symbol은 Symbol()이라고 사용할 때마다 각각 유니크한 Symbol이 생성됨

2. 전역변수 같은 전역 Symbol
   같은 값을 가지면 같은 변수로 취급해주는 전역 심볼을 만들어서 사용 가능
   Symbol.for(), Symbol.keyFor()

   var a = Symbol.for('hello');
   var b = Symbol.for('hello');
   console.log(a === b); / true

   Symbol.for()로 새로운 Symbol을 만들 때 설명이 같으면 이미 그 설명을 가진 Symbol을 그 자리에 넣게 됨.
   위 코드에선 b자리에 a가 들어간 것임. > var b = a;

   Symbol.for 메서드는 인수로 전달받은 문자열을 키로 사용해서 전역 심볼 레지스트레 해당 키와 일치하는 심볼 값을 검색한다.
   레지스트리에 이미 심볼이 있다면 해당 심볼을 반환하고, 없으면 새로 생성하여 반환한다.



3. 기본 내장 Symbol들
   Array, Object 자료형을 만들 때 몰래 붙어있는 기본 Symbol들도 있다.
   
   심볼을 몰래 자료를 저장할 때 쓰는 자료형이라 반복문을 써도 전혀 출력이 되지 않음~

   Symbol.iterator라는 심볼은 for of를 쓸 수 있게 도와주는 Symbol이다.

==========
# 27. Map/Set

#### Map 자료형
매핑을 할 수 있는 Map 자료형
Object 자료형과 똑같이 Key, value 형태로 자료를 저장할 수 있는 자료형.
**자료들 간의 연관성을 표현하기 위해 사용하는 자료형.**

> var person = new Map();
  person.set('name', 'Kim');
  person.set('age', 20);

출력시
> person
  Map(2) { 'name' => 'Kim', 'age' => 20 }

Map 자료형은 자료간의 연관성을 표현하기 위해 사용.
그냥 key, value형식으로 저장하려면 Object를 사용하고
name이 Kim과 연관되어있다~ 라고 저장할 때 Map 사용.

#### Map 자료형은 key, value값에 모든 자료를 집어넣을 수 있다.

key값란에 숫자와 어레이도 넣을 수 있다.
자료의 이름으로 array도 되고 object도 된다.

#### Map 다루는 법
```
var map = new Map();
  map.set(key, value);

  map.set(key, value) // 새로운 엔트리를 map에 추가
  map.get(key) // 자료 꺼내는 법
  map.has(key) // value가 존재하는지 true or false로 리턴
  map.size // 자료가 몇개인지 알려줌
  map.delete(key) // 자료 삭제하는 법
  map.clear() // map에서 모든 엔트리를 삭제

  // Map자료 반복문 돌리기
  for (var key of map.keys()){
    console.log(key)
  }
  for (var key of map.values()){
    console.log(key)
  }

  // 자료를 직접 집어 넣을 때
  var map2 = new Map([
    ['name', 'park'],
    ['age', 23]
  ]);
```

Map 엔트리는 삽입된 순서로 Iterating 된다.
for-each loop는 [key, value] 짝의 배열을 리턴
'for...of' 연산자는 각각 keys, values, entries를 iterating 할 수 있다.

1. map.keys() // keys로 iterating
2. map.values() // values로 iterating
3. map.entries() // entries로 iterating
4. map // map entries를 iterating 하기 위해 객체 디스트럭쳐링 사용

#### forEach()를 이용한 Map 타입의 filtering
Map 타입을 필터링하려면 일단 Array.from() 메서드로 Map 타입을 배열로 가져와야함

Map 타입을 Array.from() 메서드로 배열로 전환하는 법
```
const map1 = new Map([
  ['num1', 1],
  ['num2', 2],
  ['num3', 3]
]);
console.log(Array.from(map1));

const map1 = new Map([
 ['num1', 1],
 ['num2', 2],
 ['num3', 3]
]);

map1.forEach((value, key) => {
 if(value > 1){
   map1.delete(key);
 };
});
console.log(map1);
```

map1의 value 값이 1을 초과하는 엔트리를 map1.delete 함수로 삭제하는 코드.
iterating을 위해 forEach() 메소드 사용.

맵을 변환해서 배열의 filter 메서드를 사용하는 방법
```
const map2 = new Map([
 ['num1',1],
 ['num2',2],
 ['num3',3]
]);

const filtered = new Map(
 Array.from(map2).filter(([key, value]) => {
   if(value > 1) {
     return true;
   }

   return false;
 })
);

console.log(filtered);
```

#### Object를 Map 타입으로 변환하기
객체를 맵 타입으로 변환하기 위해서는 객체가 맵 타입처럼 key-value 형식의 관계를 맺고 있어야한다.

Object.entries() 메서드를 쓰면 key-value 형식의 배열을 얻을 수 있는데 그거 Map() 컨스트럭터에 넣으면 된다.

Object.entries 메서드는 객체의 항목을 key-value 항목으로 변환해서 배열로 리턴한다.
```
console.log(Object.entries({id: 456, name: 'name1'}));
```

위 코드처럼 Object.entries() 메서드를 거친 배열의 첫 번째 항목도 배열, 순차적으로 배열을 Map Constructor에 넣어서 Map 생성.
```
const obj = {
 id: 123,
 name: 'name2',
};

const map3 = new Map(Object.entries(obj));

console.log(map3);
```
#### 반대로 Map 형식을 다시 Object 형식으로 변환하기
다시 Object.fromEntries() 메서드 사용
```
console.log(
 Object.fromEntries([
   ['id', 123],
   ['name', 'name1']
 ])
);
```

### Map 병합하기
맵을 병합하기 위해서는 자바스크립트의 스프레트 연산자(...)를 써서 배열로 만들어서 합치고 그걸 다시 맵의 Constructor에 넣어서 다시 만들기.

..https://mycodings.fly.dev/blog/2022-07-30-javascript-map-type-in-a-nutshell#%EB%A7%B5-iterating 참고.. 강의에서 다루지 않은 내용이 너무 많다

#### Set 자료형
자료를 일렬로 쭉 저장할 수 있다.

```
var name = new Set(['john', 'tom', 'andy', 'tom']);
console.log(name); // Set(3) {'john', 'tom', 'andy'}
```
중괄호로 표현이 되지만 Array와 유사하게 생김

**Set 자료형은 중복자료를 절대 허용하지 않음**
중복 데이터를 방지하고 싶을 때 쓰는 자료형

#### Set 자료형 다루기
```
let name2 = new Set([ 'john' , 'tom', 'andy', 'tom' ]);

 name2.add('sally'); //자료더하기 
 name2.has('tom'); //자료있는지 확인
 name2.size;  //자료 몇갠지 세기
```
forEach 혹은 for of 반복문 사용가능

#### 특히 Array의 데이터 중복제거할 때 많이 사용
Array를 Set으로 바꾸는게 매우 쉽기 때문.
```
 let nameArr = ['john', 'tom', 'andy', 'tom'];
 let nameArr2 = new Set(nameArr);

 nameArr = [...nameArr2]
 console.log(nameArr); // ['john', 'tom', 'andy']
```

nameArr이라는 Array 자료형을 Set으로 바꿨다가 다시 바로 Array로 바꾸는 예제.
nameArr에 있던 중복자료들이 자동으로 제거가 된다~

----
### map 벨로퍼트 설명

map은 배열 안의 각 원소를 변환할 때 사용되며, 이 과정에서 새로운 배열이 만들어짐.

const array = [1,2,3,4,5,6,7,8];
다음과 같은 배열이 있고, 배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들고 싶을 때

for문
```
const array = [1,2,3,4,5,6,7,8];

const squared = [];
for (let i = 0; i < array.length; i++){
  squared.push(array[i] * array[i]);
};

console.log(squared);
```

forEach문
```
const array = [1,2,3,4,5,6,7,8];

const squared = [];
array.forEach(n=>{
  squared.push(n * n);
});

console.log(squared);
```

map 사용시
```
const array = [1,2,3,4,5,6,7,8];

const square = n => n*n;
const squared = array.map(square);

console.log(squared);
```

map 함수의 파라미터로는 변화를 주는 함수를 전달한다. 이를 변화함수라고 부른다.
변화함수 square는 파라미터 n을 받아와서 이를 제곱해준다.
array.map 함수를 사용할 때 square를 변화함수로 사용함으로서, 내부의 모든 값에 대하여 제곱을 해서 새로운 배열을 생성함.

변화함수를 꼭 이름을 붙여서 선언할 필요는 없다. 다음과 같이 작성해도 무방하다.
```
const squared = array.map(n => n * n);
console.log(squared);
```


========
# Web Component
커스텀 html 태그

React, Vue 처럼 컴포넌트 만들어서 사용하는 문법.
```
 class 클래스 extends HTMLElement {
   connectedCallback() {
     this.innerHTML = '<label>name input</label><input>' 
   }
 }
 <br/>
 customElements.define('custom-input', 클래스);
 
 <!-- (index.html) -->
 <custom-input></custom-input>
 ```

attribute로 파라미터처럼 코드 구현 가능
```
class 클래스 extends HTMLElement {
   connectedCallback() {
     let name = this.getAttribute('name');
     this.innerHTML = '<label>${name}을 입력하쇼</label><input>'
   }
 }
 
 customElements.define("custom-input", 클래스);

 <!-- (index.html) -->
 <custom-input name="이메일"></custom-input>
 <custom-input name="비번"></custom-input>
```

===========
# shadow Dom과 template으로 HTML 모듈화하기

web Components와 
HTML모듈화

`<input type="range">`안에는 숨겨진 3개의 `<div>`가 있다.
이런 형태를 shadow DOM이라고 하는데 '일반적으로 볼 수 없는 숨겨진 HTML'을 의미한다.

#### shadow DOM 만드는 법
>
```
<div class="mordor"></div>
<script>
  document.querySelector('mordor').attachShadow({mode : 'open'});
  document.querySelector('mordor').shadowRoot.innerHTML = '<p>숨겨진 태그</p>'
</script>
```

이러면 `<div>`안에 `<p>`를 숨길 수 있다.
1. 우선 attachShadow()라는걸 써서 shadowRoot라는 공간을 하나 만들어준다.
2. shadowRoot 여기에 원하는 html을 넣으면 숨겨진다.

거의 모든 <태그>는 shadowRoot를 오픈할 수 있고, shadowRoot안에 넣은걸 전부 shadowDOM이라고 칭하는데,
web component 문법과 합하면 진가를 발휘한다~~

#### Web Component의 단점
**스타일 오염**

스타일까지 함께 컴포넌트화 하고 싶으면 컴포넌트에 `<style>`을 집어넣을 수 있음.
근데 label 태그를 빨간색으로 스타일링 해두면 컴포넌트와 관계없는 label 태그까지 스타일이 지정된다.
그럴 때 shadow DOM을 열어서 스타일을 집어넣으면 shadow DOM 밖에 있는 태그에는 영향을 끼치지 않게 된다.

이러한 이유로 인해서
Web Component를 만들 때 shadow DOM을 활용하게 된다.
진정한 의미의 html 모듈화 개발이 가능하게 된다.
다른 모듈들이 서로 영향을 끼치는 것을 막을 수 있게 된다.

#### html 임시보관함 `<template>` 태그
1. `<template>`은 특수한 태그. 여기에 적은 html은 렌더링되지 않음
2. 여기에 html들을 잠시 보관하고,
3. this.shadowRoot.append(template1.content.cloneNode(true)) 이런 식으로 사용


#### 이벤트리스너를 부착하고 싶다면
>
```
<custom-input></custom-input>
<br/>
  <template id="template1">
    <label>이메일을 입력하쇼</label><input>
    <style>label { color : red }</style>
  </template>
<br/>
  <script>
    class 클래스 extends HTMLElement {
      connectedCallback() {
        this.attachShadow({mode : 'open'});
        this.shadowRoot.append(template1.content.cloneNode(true));
        let el = this.shadowRoot.querySelector('label');
        el.addEventListener('click', function(){
          console.log('클릭함')
        })
      }
    }
    customElements.define("custom-input", 클래스);
  </script>
```


========================
# class로 만들어보는 간단한 2D 게임 1

알고리즘
1. 빨간 네모를 여러개 배치해서 사물을 만들고 초록 네모를 배치해서 내 캐릭터를 만듭니다.
2. 그 다음에 방향키를 입력하면 네모가 어떻게 움직일지 코드짜고
3. 네모끼리 충돌하는지 0.1초마다 (아니면 1프레임마다) 계속 체크해서 충돌시 원하는 작업을 해주면
게임개발 끝임

> 은근 비슷한 object가 많이 필요함
장애물을 그리고 싶으면 우선 > 장애물이 어디서 생성될지 / 장애물의 사이즈는? / 어떤 속도로 움직이는지?
이런 정보들을 object나 array에 저장해두기

3. 충돌체크

------
Q. 점프 여러번 금지?
Q. 공룡이 달리는 것처럼 보이게?
Q. 배경 다가오는건?
Q. 장애물이 나타나는 간격을 랜덤하게?
Q. 점수표기는? done
Q. 시간 지날 때 점수도 오르는 기능은? done
Q. 충돌 기회 3번 주기

=============
# ?. / ?? 연산자 (optional chaining)

### ?. optional chaining
object 자료에서 원하는 데이터를 꺼낼 때 마침표를 찍음.
마침표와 똑같은 역할을 하는 ?. 문법
```
var user = {
    name : 'kim',
    age : 20
}

console.log(user.name);
console.log(user?.name);
```
용도는 마침표와 똑같은데 정확한 기능은
**?. 왼쪽에 있는게 null 혹은 undefined 인 경우 마침표 찍지 말고 undefined 남겨주세요**

#### 사용예
'중첩된 object 자료에서 에러없이 안전하게 데이터를 꺼낼 때'

```
var user = {
    name : 'kim',
    age : { value : 20 }
}

console.log(user.age.value);
```
object안에 object가 들어있는 경우에 마침표를 여러번 찍어야 안에 있는 자료를 꺼낼 수 있는데 자료를 잘못 찾는 경우 에러가 남.
if문을 사용해도 되지만 ?. 사용하면 됨.
"왼쪽에 있는게 null, undefined면 마침표찍지말고 undefined를 남겨주세요" 라는 뜻이라 에러가 나지 않음

중첩된 object는 마침표를 2번 이상 찍으니까 ?.를 쓰면 안전할 수 있다.

**?.이건 에러를 해결해주는 문법이 아니라 에러나지 않게 감추는 문법일 뿐**

---------
### ?? nullish coalescing operator

```
var user;
console.log(user ?? '로딩중')
```

?? 왼쪽이 null, undefined 일 경우 오른쪽을 보여달라는 뜻
img 태그에 alt랑 비슷한듯?
