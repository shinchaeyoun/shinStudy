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

#### Promise 예시
성공시
var 프로미스 = new Promise(function(resolve, reject){
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

img.addEventListener('load', function (){resolve});
img.addEventListener('error', function (){reject});

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