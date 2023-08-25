# sass
large, medium, small 크기를 설정해서 맘대로 꺼내 쓸 수 있도록 셋팅하기

**className에 CSS 클래스 이름을 동적으로 넣어주고 싶을 때**
```
className={['Button', size].join(' ')}
// 또는
className={`Button ${size}`}
```

조건부로 css 클래스를 넣고 싶을 떄 문자열을 직접 조합하는 것보다 **classnames 라는 라이브러리**를 사용하는 것이 훨씬 편리하다.
```
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'
classNames(['foo', 'bar']); // => 'foo bar'

// 동시에 여러개의 타입으로 받아올 수 도 있습니다.
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// false, null, 0, undefined 는 무시됩니다.
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

## classname 라이브러리
라이브러리 설치
npm add classnames 


# mixin / include
```
$blue: blue;
$gray: gray;
$pink: pink;

@mixin button-color ($color) {
  background-color: $color

  &:hover {
    background-color: lighten($color, 10%);
  }
  &:active {
    background-color: darken($color, 10%);
  }
}

.button {
  &.blue {
    @include button-color($blue);
  }
}
```

# outline option
outline 값을 props로 받아와서 객체 안에 넣은 후 classNames()에 포함시켰음
outline 값이 true일 경우에만 button에 outline CSS 클래스가 적용된다.

# 전체 너비 차지하는 옵션
fullWidth 라는 옵션으로 전체 너비를 차지하도록 설정가능

근데 fullWidth를 사용할 일이 있을까
굳이 이렇게 사용할 이유가 있을까

# ...rest props 전달하기
이 컴포넌트에 onClick을 설정해주고 싶다면?

props로 onClick 넘겨주기
<button onClick={onClick}>
<button onClick={이벤트함수명}>

onMouseMove 이벤트 관리
<button onMouseMove={onMouseMove}>
<button onMouseMove={이벤트함수명}>

위의 방식으로 넣어주면 귀찮다
이런 분제를 해결할 수 있는 **spread와 rest** 문법

...rest 를 사용하면 지정한 props를 제외한 값들은 rest라는 오브젝트에 모아주고 button xormdp {...rest}해주면 rest 안에 있는 객체의 값들은 모두 button 태그에 설정을 해준다.

# CSS Module
CSS Module은 CSS 클래스가 중첩되는 것을 완벽히 방지해준다.

CSS Module 를 사용할 때에는, CSS파일의 확장자를 .module.css로 작성.

CSS 모듈을 사용할 때에는 style.icon 이런 식으로 객체 안에 있는 값을 조회
클래스명에 - 가 있다면 style['my-class']
여러개가 있다면 ${styles.one} ${styles.two}
조건부 스타일링 ${styles.one} ${condition ? styles.two : ''}

**classnames 라이브러리**의 bind 기능을 사용하면 CSS Module을 조금 더 편하게 이용할 수 있다.

라이브러리 설치
npm add classnames

classnames의 bind 기능을 사용하면 CSS 클래스 이름을 지정해줄 때 cs('클래스이름') 과 같은 형식으로 편하게 사용 가능.

이전 - className={styles.checkbox}
bind - className={cx('checked')}
```
cx('one', 'two')
cx('my-component', {
  condition: true
})
cx('my-component', ['another', 'classnames'])
```

#### 기타 내용
CSS Module은 Sass에서도 사용 가능
scss 파일의 확장자를 .module.scss로 바꿔주면 됨!
그 전에 node-sass 설치해야함

CSS Module 을 사용하고 있는 파일에서 클래스 이름을 고유화 하지 않고 전역적 클래스 이름을 사용하고 싶다면
:global .my-global-name {}

sass 를 사용한다면
:global {
  .my-global-name {}
}

반대로 CSS Module 을 사용하지 않는 곳에서 특정 클래스에서만 고유 이름을 만들고 싶다면
:local .make-this-local {}
scss
:local {
  .make-this-local {}
}

CSS Module 은 레거시 프로젝트에 리액트를 도입할 때 또는 클래스 이름 짓는 규칙을 정하기 힘든 상황이거나 번거로울 때 사용하면 편리함

# 3. styled-components
styled-components 를 사용하면 스타일을 입력함과 동시에 해당 스타일을 가진 컴포넌트를 만들 수 있다.
div를 스타일링 하고 싶으면 styled.div
input을 스타일링 하고 싶으면 styled.input

style-components 부분은 이해가 안가네
진짜 개모르겠다


"react-create-file": {
		"prefix": "react-create",
		"body": [
			"import React from 'react';",
			"",
			"function ${TM_FILENAME_BASE}() {",
			"\treturn(",
			"\t\t<>",
			"",
			"\t\t</>",
			"\t)",
			"}",
			"",
			"export default ${TM_FILENAME_BASE};"
		]
	}