1. 목록 컴포넌트화
2. 컴포넌트 데이터 바인딩
3. map 반복문

--
상세페이지 컴포넌트

현재 url에 입력한 번호와 같은 번호를 가진 상품을 찾아서 데이터 바인딩.
현재 url에 입력한 번호 = id /app.js에 :id로 파라미터 값 받아온 것.
상품 영구번호 = shoes의 id

----
# useParams()
App.js에서 보낸 id 라는 파라미터를 받아오는 것

useParams()를 이용하여 url에 입력한 번호와 상품 아이디 값이 동일한 아이템 보여주기.

방법 1.
```
let {id} = useParams();
let idx = Number(id);

function isId (e){
 if(e.id === shoes[idx].id) {
   return true; 
 }
};

const idFind = shoes.find(isId);
const nowId = idFind.id;

<h4 className="pt-5">{shoes[nowId].title}</h4>
<p>{shoes[nowId].content}</p>
<p>{shoes[nowId].price}</p>
```

방법 2.
```
let {id} = useParams();
let findItem = shoes.find((x) => x.id == id);
let imgIdx = findItem.id + 1;

<h4 className="pt-5">{findItem.title}</h4>
<p>{findItem.content}</p>
<p>{findItem.price}</p>
```

----
# styled-components
npm install styled-components

```
var 변수명 = styled.div`
    styling
`;

<변수명 />
```

```
let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px;
`;
```

----
# useEffect()
useEffect 안에 코드를 작성하면 html 화면을 우선 보여준 후 useEffect 안에 있는 반복문을 돌리기 때문에
코드의 실행 시점을 조절 할 수 있어서 html 렌더링이 빨라진다.


```
useEffect(()=>{ }) // 1. 재렌더링마다 코드 실행
useEffect(()=>{ }, []) // 2. mount시 1회 코드 실행
useEffect(()=>{
 return ()=>{}
}) // 3. unmount시 1회 코드 실행

useEffect(()=>{
 return ()=>{}
}) // 4. useEffect 실행 전에 뭔가 실행하려면 언제나 return ()=>{}
```

----
ajax

서버에 GET, POST 요청할 때 새로고침 없이 데이터를 주고받을  수 있게 도와주는 간단한 브라우저 기능
새로고침 없이 데이터를 주고 받을 수 있음

AJAX로 GET/POST 요청 3가지 방법
1. XMLHttpRequest라는 옛날 문법.
2. fetch() 최신 문법
3. axios 외부 라이브러리

axios 외부 라이브러리 사용 시
```npm install axios```

axios 사용
1. axios를 상단에서 import 해오고
2. axios.get(URL) <- 해당 URL로 GET 요청됨
3. 데이터 가져온 결과는 결과.data 안에 들어있다.
4. 서버 데이터 연결이 실패할 때에 실행할 코드는 .catch() 안에 작성


--
ajax 문제
1. 버튼을 2번 누르면 7,8,9번 상품 가져와서 html로 보여주기
   - 버튼을 몇번 눌렀는지 변수나 state에 기록해두기
2. 버튼 3번 누르면 상품이 없다는 안내문 띄우기
   1. 버튼을 숨기거나
   2. 안내를 띄우거나
3. 버튼을 누른 직후에 '로딩중입니다'라는 글자를 주변에 띄우기
   1. 요청이 성공하거나 실패한 직후엔 '로딩중입니다' 글자 제거

---

#### POST 요청하는 법

axios.post('URL', {name: 'Kim'});
-> 서버로 {name: 'Kim'}자료가 전송됨.
axios.post('URL', {name: 'Kim'}).then()
-> 완료시 특정 코드를 실행하고 싶을 때

#### 동시에 AJAX 요청 여러개 날리려면
Promise.all([axios.get('URL1'), axios.get('URL2')])
둘 다 완료시 특정 코드를 실행하고 싶으면
-> Promise.all([axios.get('URL1'), axios.get('URL2')]).then();

#### 원래 서버와 문자자료만 주고받을 수 있음
object, array같은 자료형은 주고받을 수 없는데
object, array 자료에 따옴표를 쳐놓으면 됨
"{'name': 'Kim'}"
이걸 JSON 이라고 한다
JSON은 문자 취급을 받기 때문에 서버와 자유롭게 주고 받을 수 있다.

axios 라이브러리가 JSON -> object/array 변환작업을 자동으로 해줘서 출력해보면 object/array가 나옴

자바스크립트 문법인 fetch()를 이용해도 GET/POST 요청 가능
fetch()는 JSON -> object/array로 안바꿔줘서 직접 바꾸는 작업이 필요함.

### ajax 데이터 html에서 에러
1. ajax 요청으로 데이터 가져와서
2. state에 저장하라는 코드
3. state를 html에 넣어서 보여달라는 코드
에서 에러가 나는 경우는
ajax 요청보다 html 렌더링이 더 빨라서 그럴 수 있음.
state 안에 내용이 있으면 보여달라는 조건을 추가하면 됨

====
# 탭 UI
스테이트 변경 함수들이 근처에 있으면 최종적으로 한번만 변경해줌
스테이드 변경이 완료 된 후 마지막에 재렌더링 됨

# context API
이유로 인해서 잘 쓰지는 않음

state 보관함

특징
1. state 변경시 쓸데없는 것까지 재렌더링
비효율적인 리랜더링으로 성능 이휴가 생김
2. 나중에 컴포넌트 재사용이 어려워짐

Redux 쓰는게 나음

# Redux
컴포넌트들이 props 없이 state 공유 가능

```npm install @reduxjs/toolkit react-redux```


어레이 안에 오브젝트가 들어있는 형태
