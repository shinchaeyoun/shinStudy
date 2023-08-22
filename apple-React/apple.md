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

