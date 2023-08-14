# 4. JSX
JSX는 리액트에서 생김새를 정의할 때 사용하는 문법
html의 생김새지만 JavaScript를 확장한 문법.

리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel이 JSX를 JavaScript로 변환해준다.

JSX는 React '엘리먼트'를 생성한다.


태그와 태그 사이에 내용이 들어가지 않을 때에는 셀프클로징 태그를 사용해야한다.
**태그는 꼭 닫아줘라~**

----
# 5. props 를 통해 컴포넌트에 값 전달하기

App 컴포넌트에서 Hello 컴포넌트를 사용할 때 name이라는 값을 전달하고 싶다면

App.js
```
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello name="react" />
  );
}

export default App;
```

Hello.js
```
import React from 'react';

function Hello(props) {
  return <div>안녕하세요 {props.name}</div>
}

export default Hello;
```

컴포넌트에게 전달되는 props는 파라미터를 통하여 조회 할 수 있다.
props는 객체(오브젝트 ex. {props.name}) 형태로 전달됨.

#### 여러개의 props, 비구조화 할당

App.js
```
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello name="react" color="red"/>
  );
}

export default App;
```

Hello.js
```
import React from 'react';

function Hello(props) {
  return <div style={{ color: props.color }}>안녕하세요 {props.name}</div>
}

export default Hello;
```

props 내부의 값을 조회할 때 마다 props. 을 입력하고 있는데, 함수의 파라미터에서 비구조화 할당 문법을 사용하면 더욱 간결하게 코드를 작성 할 수 있다.


비구조화 할당 문법 코드
Hello.js
```
import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

export default Hello;
```

#### defaultProps 로 기본값 설정

컴포넌트에 props를 지정하기 않았을 때 기본적으로 사용할 값을 설정하고 싶다면 컴포넌트에 defaultProps 라는 값을 설정

Hello.js
```
import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
```

App.js
```
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <>
      <Hello name="react" color="red"/> // 안녕하세요 react
      <Hello color="pink"/> // 안녕하세요 이름없음
    </>
  );
}

export default App;
```

#### props.children

컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, props.children을 조회하면 됨.

Wrapper.js
```
import React from 'react';

function Wrapper() {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>

    </div>
  )
}

export default Wrapper;
```

App.js
```
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
```

Wapper로 감싼 내부에는 Hello 컴포넌트 두개가 있는데, 브라우저를 확인하면 Hello 컴포넌트들은 보여지지 않는다.

내부의 내용이 보여지게 하기 위해서는 Wapper에서 props.children을 렌더링해주어야 한다.

Wapper.js
```
import React from 'react';

function Warpper ({children}) {
  const style = {
    border: '2px solid black',
    padding: '16px'
  };

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;
```

-----
# 6. 조건부 렌더링
특정 조건에 따라 다른 결과물을 렌더링 함.

App.js
```
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App () {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecialk={true}/>
      <Hello color="pink"/>
    </Wrapper>
  )
}

export default App;
```
isSpecial 의 true는 자바스크립트 값이기에 중괄호로 감싸기.
Hello 컴포넌트에서는 isSpecial이 true냐 false냐에 따라서 컴포넌트 좌측에 * 표시하기.
가장 기본적인 방법인 삼향연산자 사용

Hello.js
```
import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
```
isSpecial 값이 true라면 <b>*</b>를, false라면 null을 보여주는 코드.
JSX에서 null, undefined를 렌더링하면 아무것도 나타나지 않음~

보통 삼향연산자를 사용한 조건부 렌더링은 주로 특정 조건에 따라 보여줘야 하는 내용이 다를 때 사용한다.
지금 코드에서는 내용이 달라지는게 아니라 단순히 내용이 보여지고 숨겨지는 코드라 && 연산자를 사용하여 처리하는 것이 간편하다.
// 단순히 내용을 나타내고 숨겨지는 것을 처리할 때는 && 연산자

Hello.js
```
import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial && <b>*</b> }
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
```
isSpecial && <b>*</b>의 결과는 isSpecial이 false일땐 false이고 isSpecial이 true일 땐 <b>*</b>가 된다.

#### props 값 설정을 생락하면 = {true}
컴포넌트의 props 값을 설정할 때 props 이름만 작성하고 값 설정을 생략한다면 이를 true로 간주한다.

ex
App.js
```
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial />
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
```
이렇게 isSpecial 이름만 넣어준다면 true를 반환한다

------
# 7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기
컴포넌트에서 사용자 인터렉션에 따라 바뀌어야하는 값이 있을 때

Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 됨. useState 라는 함수도 리액트의 Hooks 중 하나.

Counter.js
```
import React from 'react';

function Counter() {
  return (
    <div>
      <h1>0</h1>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
}

export default Counter;
```

App.js
```
import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <Counter />
  );
}

export default App;
```

#### 이벤트 설정

Counter에서 버튼이 클릭디는 이벤트가 발생했을 때, 특정 함수가 호출되도록 설정하기

Counter.js
```
import React from 'react';

function Counter() {
  const onIncrease = () => {
    console.log('+1');
  }
  const onDecrease = () => {
    console.log('-1');
  }
  return (
    <div>
      <h1>0</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```
함수를 만들고 button에 onClick으로 각 함수를 연결.
리엑트에서 엘리먼트에 이벤트를 설정해줄 때에는 on이벤트이름={실행하고싶은함수} 형태로 설정
중괄호 안에는 함수 이름만 넣어야함, 함수()라는 식으로 실행하면 안됨 -> 렌더링 된느 시점에서 함수가 호출되기 때문.

#### 동적인 값 끼얹기, useState
리엑트에 있는 useState라는 함수로 컴포넌트에서 상태 관리 가능

Counter.js
```
import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number+1);
  }
  const onDecrease = () => {
    setNumber(number-1);
  }
  
  return (
    <div>
      <h1>0</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```
> import React, { useState } from 'react';
이 코드는 리액트 패키지에서 useState 라는 함수를 불러와준다.
> const [number, setNumber] = useState(0);
useState를 사용할 때에는 상태의 기본값을 파라미터로 넣어서 호출해준다. 이 함수를 호출하면 배열이 반환되는데, 여기서 첫번째 원소는 현재상태, 두번째 원소는 setter 함수이다.

원래는
```
const numberState = useState(0);
const number = numberState[0];
const setNumber = numberState[1];
```
배열 비구조화 할당을 통하여 각 원소를 추출해준 것.

Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정해준다.
> <h1>{number}</h1>
h1 태그에서는 이제 0이 아닌 {number} 값을 보여주어야한다.

#### 함수형 업데이트
지금까지 코드는 Setter 함수를 사용할 때, 업데이트 하고 싶은 값을 파라미터로 넣어주는데 기존의 값을 어떻게 업데이트 할지에 대한 함수를 등록하는 방식으로도 값을 업데이트 할 수 있다.

Counter.js
```
import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```
onIncrease 와 onDecrease 에서 setNumber 를 사용 할 때 그 다음 상태를 파라미터로 넣어준 것이 아닌, 값을 업데이트 하는 함수를 파라미터로 넣어줌.

> const [number, setNumber] = useState(초기값);
> useState() <- 괄호에 들어가는 값은 초기값.
> Counter로 예를 들면 useState(0)은 0부터 값이 오르내리고, Counter(10)은 10부터 값이 오르내림
>   const [names, setNames] = useState([]);
    const [input, setInput] = useState('');
    이런 식으로 배열로 리스트를 만들 수 도 있음

-----
# 8. input 상태 관리하기

InputSample.js
```
import React from 'react';

function InputSample() {
  return (
    <div>
      <input />
      <button>초기화</button>
      <div>
        <b>값: </b>
      </div>
    </div>
  );
}

export default InputSample;
```

App.js
```
import React from 'react';
import InputSample from './InputSample';

function App() {
  return (
    <InputSample />
  );
}

export default App;
```

input에 입력하는 값이 하단에 나타나게 하고, 초기화 버튼을 누르면 input 값이 비워지도록 구현

InputSample.js
```
import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
```

-------
# 9. 여러개의 input 상태 관리하기
input이 여러개일 때 상태 관리

InputSample.js
```
import React, { useState } from 'react';

function InputSample() {
  const onChange = (e) => {
  };

  const onReset = () => {
  };


  return (
    <div>
      <input placeholder="이름" />
      <input placeholder="닉네임" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        이름 (닉네임)
      </div>
    </div>
  );
}

export default InputSample;
```
위 코드에서 input이 여러개일 때 input에 name을 설정하고 이벤트가 발생했을 때 이 값을 참조하기.
useState에서 문자열이 아니라 객체 형태의 상태를 관리하기.

InputSample.js
```
import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
  };


  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

리액트 상태에서 객체를 수정해야 할 때에는 
> inputs[name] = value;

이런 식으로 직접 수정하면 안되고, 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상태로 사용해야한다.

> setInputs({
>   ...inputs,
>   [name]: value
> });

여기서 사용한 스프레드 문법(...)은
객체의 내용을 모두 '펼쳐서' 기존 객체를 복사해줌.

> **spread**
> 스프레드 문법으로 객체 혹은 배열을 펼칠 수 있다.
> **rest**
> 레스트의 생김새는 스프레드와 비슷하지만 역할이 매우 다르다.
> 레스트는 객체, 배열, 함수의 파라미터에서 사용이 가능하다.

이러한 작업을 '불변성을 지킨다'라고 부른다.
불변성을 지켜주어야만 리액트 컴포넌트에서 상태가 업데이트가 되었음을 감지할 수 있고, 이에 따라 필요한 리렌더링이 진행된다.
만약 <code>inputs[name] = value;</code> 이런 식으로 기존 상태를 직접 수정하게 되면, 값을 바꿔도 리렌더링이 되지 않는다.

리액트에서는 불변성을 지켜주어야만 컴포넌트 업데이트 성능 최적화를 제대로 사용할 수 있다.
리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야한다.

----
# 10. useRef로 특정 DOM 선택하기
특정 DOM을 선택할 때 리액트에서 <code>ref</code> 라는 것을 사용한다.
함수형 컴포넌트에서 ref를 사용할 때에는 <code>useRef</code>라는 Hook 함수를 사용한다.
  > 클래스형 컴포넌트에서는 콜백함수를 사용하거나 <code>React.createRef</code> 라는 함수를 사용한다.

InputSample에서 초기화 버튼을 누르면 포커스가 초기화 버튼에 남아있는데, 초기화 버튼을 클릭했을 때 이름 input에 포커스가 잡히도록 <code>useRef</code>를 사용하여 기능 구현해보기.

InputSample.js
```
import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```
<code>useRef()</code> 를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM에 <code>ref</code> 값으로 설정해 주어야한다. 그러면 Ref 객체의 <code>.current</code> 값은 우리가 원하는 DOM을 가르키게 된다.

<code>onReset</code> 함수에서 input에 포커스를 하는 <code>focus()</code> DOM API를 호출하였다.

------
# 11. 배열 렌더링하기

```
const users = [
  {
    id: 1,
    username: 'velopert',
    email: 'public.velopert@gmail.com'
  },
  {
    id: 2,
    username: 'tester',
    email: 'tester@example.com'
  },
  {
    id: 3,
    username: 'liz',
    email: 'liz@example.com'
  }
];
```
이러한 배열이 있을 때 이 내용을 컴포넌트로 렌더링 한다면?

**한 파일에 여러개의 컴포넌트를 선언할 수 있다.**

UserList.js
```
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
}

export default UserList;
```
이런 방식은 배열이 고정적이라면 상관없지만 배열의 인덱스를 하나하나 조회해가며 렌더링하는 방법은 동적인 배열을 렌더링하지 못한다.

동적인 배열을 렌더링해야 할 때에는 자바스크립트 배열의 내장함수 map()을 사용하여 일반 데이터 배열을 리액트 엘리먼트로 이루어진 배열로 변환해주면 된다.

UserList.js
```
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
```
리액트에서 배열을 렌더링 할 때에는 key라는 props를 설정해야한다. key 값은 각 원소들마다 가지고 있는 고유값으로 설정을 해야한다. 지금의 경우 id가 고유값을 가지고 있으므로 <code>key={user.id}</code> 로 설정 가능하다.

만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용할 때 설정하는 콜백함수의 두번째 파라미터 index를 key로 사용하면 된다.

----
# 12. useRef로 컴포넌트 안의 변수 만들기
useRef Hook은 DOM을 선택하는 용도 외에도, 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리함

useRef로 관리하는 변수의 값이 변하더라도 컴포넌트 안에서 리렌더링이 일어나지 않는다.
리액트 컴포넌트에서의 상태는, 상태를 바꾸는 함수가 호출되고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회할 수 있는 반면에, useRef로 관리하는 변수는 설정 후 바로 조회할 수 있다.

이 변수를 사용하여 다음과 같은 값을 관리 할 수 있다
  - setTimeout, setInterval을 통해 만들어진 id
  - 외부 라이브러리를 사용하여 생성된 인스턴스
  - scroll 위치

useRef를 사용하여 변수를 관리하기 전에 해야할 작업
> 지금은 UserList 컴포넌트 내부에서 배열을 직접 선언하고 사용하는데,  UserList에서 선언하고 사용하는 대신에, 이 배열을 App에서 선언하고 UserList에게 props로 전달하기.

App.js
```
import React from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  return <UserList users={users} />;
}

export default App;
```

UserList.js
```
import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
```

App에서 useRef() 를 사용하요 nextId라는 변수 만들기

App.js
```
import React, { useRef } from 'react';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };
  return <UserList users={users} />;
}

export default App;
```
useRef() 를 사용할 때 파라미터를 넣어주면, 이 값이 .current 값의 기본값이 됩니다.

그리고 이 값을 수정 할때에는 .current 값을 수정하면 되고 조회 할 때에는 .current 를 조회하면 됩니다.

----
# 13. 배열에 항목 추가하기
배열에 새로운 항목 추가하는 방법

input 두개와 button 하나로 이루어진 CreateUser.js 라는 컴포넌트 생성

App.js
```
import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
```

배열에 변화를 줄 때에는 객체와 마찬가지로, 불변성을 지켜주어야한다. 그러므로 배열에 push, splice, sort 등의 함수는 사용하면 안되며, 사용하더라도 배열을 한번 복사한 후 사용해야한다.

불변성을 지키면서 배열에 새 항목을 추가하는 방법은 두가지가 있다.

1. spreed 연산자 사용

App.js
```
import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
```

2. concat 함수를 사용하는 것
  > concat 함수는 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열을 만들어준다.
