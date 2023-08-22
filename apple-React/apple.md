title == 0 ? postname[0] : null
title == 1 ? postname[1] : null

setTitle after 3dats

var today = new Date();



var today = new Date();

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

var dateString = year + '-' + month  + '-' + day;

console.log(dateString);

# function 컴포넌트
1. 
```
function Modal () {
  return (
    <div className="modal">
      <h4>{ props.postname[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeName}>post name change</button>
    </div>
  )
}
```

2. 
```
const Modal = () => {
  return (
    <div className="modal">
      <h4>{ props.postname[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeName}>post name change</button>
    </div>
  )
}
```

# class 컴포넌트
```
class Modal2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'Kim',
      age: 20
    }
  }
  render () {
    return (
      <div>
        {this.props.name}
        {this.state.name} {this.state.age}
        <button onClick={()=>{
          this.setState({age: 21})
        }}>버튼</button>
      </div>
    )
  }
}
```


=====
0822

\\1. state로 글 3개 발행
\\2. 첫번째 글 제목 수정하는 버튼
3. 가나다 정렬 버튼
4. 글 제목 클릭할 때 모달 창 토글
\\5. 좋아요 버튼
\\6. 글 삭제 버튼
7. 글 추가 버튼
8. 모달 창에 클릭한 글 제목 나오기

3- 정렬할 때 날짜나 라이크 정보도 같이 갔었나?

====
todo list page

1. 실시간 현재 시간
2. 현재 날씨
3. 배경이미지, 문구 랜덤
4. 사용자 이름 및 할일 목록 로컬스토리지에 저장
to do list 기능 구현 (필터, 수정, 드래그앤 드롭-순서변경)

to do 페이지 먼저
input에 글 입력하고 엔터나 add 버튼 누르면 등록하기
리스트 등록되면 input 내용 다 지워주기


- list css 잡아야하고
  - add 한 날짜 시간 추가하기
  - 메모를 추가할 수 있게 할까 화살표로 열어서 중요 체크하면 타이틀에도 중요표시 나오고, 열린 페이지에서 메모 추가하고 읽을 수 있도록

todolist map 쓰는 것보다 컴포넌트로 추가하는게 나을 것같아서.
벨로어쩌구 강의 들어봐야겠다
