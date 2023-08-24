컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐 props.children을 조회.

Wrapper 이라는 컴포넌트를 만들고
App.js에서 Wrapper안에 컴포넌트를 넣을 때

App {
  Wrapper {
    Hello {}
  }
}

이런 구조일 때 

Wrapper.js에서 props.children을 렌더링해줌

# 조건부 렌더링
특정 조건에 따라 다른 결과물을 렌더링

가장 기본적인 방법은, 삼항연산자를 사용하는 것
삼항연산자를 사용한 조건부 렌더링은 주로 특정 조건에 따라 보여줘야 하는 내용이 다를 때 사용한다.
{ isSpecial ? <b>*</b> : null }

단순히 특정 조건이 true이면 보여주고, 그렇지 않다면 숨겨주는 상황에서는 && 연산자를 사용하여 처리하는 것이 더 간편하다.
{isSpecial && <b>*</b>}

- 참고 https://learnjs.vlpt.us/useful/03-short-circuiting.html

**props 값 설정을 생략하면 ={true}**
컴포넌트의 props 값을 설정하게 될 때 props 이름만 작성하고 값 설정을 생략하면 true로 설정한 것으로 간주한다.
isSpecial
//isSpecial={true} 와 동일

# useState를 통해 컴포넌트에서 바뀌는 값 관리

**함수형 업데이트**
Setter 함수를 사용 할 때, 업데이트 하고 싶은 새로운 값을 파라미터로 넣어주고 있는데, 그 대신에 기존 값을 어떻게 업데이트 할 지에 대한 함수를 등록하는 방식으로도 값을 업데이트 할 수 있다.

setNumber(prevNumber => prevNumber + 1);

그 다음 상태를 파라미터로 넣어준 것이 아니라 값을 업데이트 하는 함수를 파라미터로 넣어주었다..
함수형 업데이트는 주로 나중에 컴포넌트를 최적화 하게 될 때 사용한다.
나중에 다시 설명

# input 상태관리
input에 입력하는 값이 하단에 나타나게 하고, 초기화 버튼을 누리면 input 값이 비워지도록 구현

```
function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e)=>{
    setText(e.target.value)
  };

  const onReset = () => {
    setText('');
  };

  return(
    <div>
      <input 
        onChange={onChange}
        value = {text}
      />
      <button
        onClick={onReset}>
        초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  )
}
```

input이 여러개일 때 관리
input이 비어져 있을 때 input에 대한 설명을 보여주는 placeholder 값 설정

input의 개수가 여러개일 때 단순히 useState를 여러번 사용하고 onChange도 여러개를 만들어서 구현할 수 있지만 좋은 방법은 아니다.
input에 name을 설정하고 이벤트가 발생했을 때 이 값을 참조하는 것이 더 좋은 방법.
useState에서는 문자열이 아니라 객체 형태의 상태를 관리해주어야 한다

# useRef로 특정 DOM 선택하기
javaScript를 사용할 때에는 DOM Selector 함수를 사용해서 선택하는데
리액트에서도 돔을 직업 선택해야하는 상황이 발생했을 때 리액트에서는 ref를 사용한다.

함수형 컴포넌트에서 ref를 사용 할 대에는 useRef라는 Hook 함수를 사용함.
클래스형 컴포넌트에서는 콜백 함수를 사용하거나 React.createRef라는 함수를 사용. 근데 요즘은 클래스형 컴포넌트 잘 안씀


초기화 버튼을 클릭했을 때 이름 input에 포커스가 잡히도록 useRef 사용하여 기능 구현

```
const nameInput = useRef();

const onReset = ()=>{
  setInputs({
    name: '',
    nickname: ''
  });
  nameInput.current.focus();
};

return (
  <input
    name='name'
    placeholder='이름'
    onChange={onChange}
    value={name}
    ref={nameInput} />
)
```

useRef()를 사용하여 ref 객체를 만들고, 이 객체를 선택하고 싶은 DOM에 ref 값으로 설정해주어야 한다

# 배열 렌더링하기
map()함수를 이용하여 렌더링
{
  users.map((user,index) => (
    <User user={user} key={index} />
  ))
}
{
  users.map(function(user){
    return (
      <User user={user}/>
    )
  })
} // 이렇게 써도 되는건지?

# useRef로 컴포넌트 안에 변수 만들기
컴포넌트에서 특정 돔을 선택할 때 ref 를 사용
함수형 컴포넌트에서 이를 설정 할 때 useRef를 사용

useRef Hook은 돔 선택하는 용도 이외에, 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리

useRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않는다.
리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회할 수 있는 반면, useRef로 관리하고 있는 변수는 설정 후 바로 조회 할 수 있다.

useRef로 관리하는 변수는 값이 바껴도 리렌더링 x
상태 변경 함수를 호출하고 나서 그 다름 렌더링 이후에 업데이트 된 상태 조회 가능.
useRef로 관리하고 있는 변수는 설정 후 바로 조회 가능..
먼말이야 안된다며

다음과 같은 값을 관리 할 수 있다
- setTimeout, setInterval을 통해 만들어진 id
- 외부 라이브러리를 사용하요 생성된 인스턴스
- scroll 위치

배열에 새 항목을 추가할 때 새 항목에서 사용할 고유 id를 관리하는 용도.

-> 현재까지는 컴포넌트 내부에서 배열을 직접 선언하고 사용했지만 부모 컴포넌트에서 배열을 선언하고 자식 컴포넌트로 props로 전달하기

App.js에서 useRef() 를 사용하여 nextId 라는 변수를 만들기
const nextId = useRef(4);
const onCreate = () => {
  // 나중에 구현 할 배열에 항목 추가하는 로직
  // ...

  nextId.current += 1;
};

useRef() 를 사용 할 때 파라미터를 넣어주면 // 여기에서는 const nextId = useRef(4); 를 말함
이 값이 .current 값의 기본값이 됨.
이 값을 수정할 때에는 .current 값을 수정하면 되고 조회할 때에는 .current를 조회하면 된다..


**13번 이해는 하겠는데 나중에 응용할 자신은 없음**

## concat 함수
spread 연산자 사용 이외에 다른 방법.
concat 함수는 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 만들어줌

spread 방식
setUsers([...users, user]);

concat 방식
setUsers(users.concat(user));

# 배열 항목 제거하기
**filter**
자식 컴포넌트의 삭제 버튼이 클릭 될 때 user.id 값을 props 로 받아올 onRemove 함수의 파라미터로 넣어서 호출
onRemove 함수는 UserList 에서도 전달받고, User 컴포넌트에게 전달.
onRemove 함수를 props로 전달하니까 App.js에서 onRemove 함수 구현

불변성을 지키면서 특정 원소를 배열에서 제거하기 위해서는 filter 함수를 사용하는 것이 가장 편리한 방법
```
const onRemove = (id) => {
  setUsers(users.filter(user => user.id !== id));
}
```

# 배열 항목 수정하기

계정명을 클릭했을 때 토글로 색상 변환

배열의 불변성을 유지하면서 배열을 업데이트 할 때에도 map 함수를 사용 할 수 있습니다.

const onToggle = id => {
  setUsers(
    users.map(user =>
      user.id === id ? { ...user, active: !user.active } : user
    )
  );
};

const onToggle = (id) => {
  setUsers(
    users.map(user => 
      user.id === id ? { ...user, active: !user.active } : user
    )
  )
}

# useEffect 마운트/언마운트/업데이트시 할 작업 설정하기
컴포넌트가 마운드 되었을때(처음 나타남), 언마운트 되었을때(사라짐), 업데이트(특정 props가 바뀔 때)될 때 특정 작업을 처리하는 법

useEffect를 사용할 때
첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어이는 배열(deps)
=> useEffect(함수, 배열);
deps 배열에 값이 없을 때에는 컴포넌트가 처음 나타날 때에만 useEffect에 등록한 함수가 호출된다.
-> deps에 값이 없을 때는 첫 1번만 호출됨

useEffect에서는 함수를 반환할 수 있음. 이 함수는 cleanup 함수라고 부름
cleanup함수는 useEffect 에 대한 뒷정리를 해줌
deps가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됨

**마운트 시에 하는 작업들로는 다음과 같은 사항이 있음**
- props로 받은 값을 컴포넌트의 로컬 상태로 설정
- 외부 API 요청
- 라이브러리 사용
- setInterval 을 통한 반복 작업 혹은 setTimeout을 통한 작업 예약

**언마운트 시에 하는 작업들은 다음과 같은 사항이 있음**
- setInterval, setTimeout을 사용하여 등록한 작업들 clear하기
- 라이브러리 인스턴스 제거

## deps 에 특정 값 넣기
deps에 특정 값을 넣게 된다면 컴포넌트가 처음 마운트 되었을 때에도 호출이 되고, 지정한 값이 바뀔 때에도 호출이 된다.
deps 안에 특정 값이 있다면 언마운트 시에도 호출이 되고, 값이 바뀌기 직전에도 호출이 된다.

useEffect 안에서 사용하는 상태나, props가 있다면 useEffect의 deps에 넣어주어야 한다. 규칙임
안그러면 useEffect 함수가 실행될 때 최신 props, 상태를 가르키지 않게 됨

## deps 파라미터를 생략하기
deps 파라미터를 생략한다면 컴포넌트가 리렌더링 될 때마다 호출된다.

참고로 리액트 컴포넌트는 기본적으로 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트 또한 바뀐 내용이 없더라도 리렌더링이 된다.

# useMemo 를 사용하여 연산한 값 재사용하기
useMemo라는 Hook을 사용하여 연산된 값 재사용

Memo는 "memoized"를 의미함. 이전에 계산 한 값을 재사용한다는 의미

useMemo의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수, 두번째 파라미터에는 deps 배열을 넣어줌.
-> useMemo(계산함수,배열)
deps안에 넣은 내용이 바뀌면 등록한 계산함수를 호출해서 값을 연산해주고, 내용이 바뀌지 않았으면 이전에 연산한 값을 재사용해줌

const count = useMemo(() => countActiveUsers(users), [users]);

# useCallback을 사용하여 함수 재사용하기
useMemo와 비슷한 Hook임

useMemo는 특정 결과값을 재사용할 때 사용하는데 useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용함

함수 안에서 사용하는 상태나 props가 있다면 꼭 deps 배열 안에 포함시켜야 된다.
props로 받아온 함수가 있다면 이것도 deps에 넣어줘야함

useCallback은 useMemo를 기반으로 만들어졌다. 함수를 위해서 사용 할 때 더욱 편하게 해준 것 뿐
```
const onToggle = useMemo(
  () => () => {
    /* ... */
  },
  [users]
);
```
이렇게 표현 할 수 있음

# React.memo 를 사용한 컴포넌트 리렌더링 방지
컴포넌트 props가 바뀌지 않았다면 리렌더링을 방지하여 컴포넌트 리렌더링 성능 최적화를 해줄 수 있는 React.memo라는 함수

사용법
export default React.memo(CreateUser);

React.memo는 props 변화에만 영향을 준다.
함수 컴포넌트 안에서 구현한 state나 context가 변할 때는 리렌더링 된다.

// 19 이해안됨 다시 보셈

# 20. useReducer 상태 업데이트 로직 분리하기
지금까지는 주요 상태 업데이트 로식은 App 컴포넌트 내부에서 이루어졌음
상태를 업데이트 할 때는 useState를 사용해서 새로운 상태를 설정했음
상태 관리할 때 useState말고 useRedcer를 사용할 수 도 있음

이 Hook 함수는 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리 시킬 수 있음~
상태 업데이트 로직도 컴포넌트 바깥에 작성할수 도 있고, 다른 파일에서 작성하고 불러와서 사용할 수 도 있음!!
- 상태 업데이트 로직 분리 가능
- 상태 업데이트 로직 컴포넌트 밖에 작성 가능
- 다른 파일에 있는 상태 업데이트 로직 불러오기 가능!

reducer 먼저 알아보기
reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수

```
function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState
}
```
reducer에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 된다.

action은 업데이트를 위한 정보를 가지고 있다. 주로 type 값을 지닌 객체 형태로 사용하지만 꼭 따라야 할 규칙은 없다.

액션의 예시
```
// 카운터에 1을 더하는 액션
{
  type: 'INCREMENT'
}
// 카운터에 1을 빼는 액션
{
  type: 'DECREMENT'
}
// input 값을 바꾸는 액션
{
  type: 'CHANGE_INPUT',
  key: 'email',
  value: 'tester@react.com'
}
// 새 할 일을 등록하는 액션
{
  type: 'ADD_TODO',
  todo: {
    id: 1,
    text: 'useReducer 배우기',
    done: false,
  }
}
```
action 객체의 형태는 자유이다.

type 값을 대문자와 _로 구성하는 관습이 있긴 함 근데 꼭 따를 필요도 없음

**useReducer 사용법**
const [state, dispatch] = useReducer(reducer, initialState);
여기서 state는 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키고 dispatch는 액션을 발생시키는 함수.
이 함수는 dispatch({type: 'INCREMENT'})라고 사용한다
-> const[사용 할 수 있는 상태, 액션 함수] = useReducer(reducer, initialState);

// 아직 안써봐서 뭔지 이해가 잘 안가네

useReducer에 넣는 첫번째 파라미터는 reducer 함수이고, 두번째 파라미터는 초기 상태
-> const[사용 할 수 있는 상태, 액션 함수] = useReducer(reducer함수, 초기 상태);

20번도 먼 말인지 모르겠네