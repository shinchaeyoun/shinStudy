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