/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [postname, setPostname] = useState(['a-post', 'c-post', 'b-post']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputVal, setInputVal] = useState('');
  let [date, setDate] = useState(['2월 17일', '2월 17일', '2월 17일'])

  let today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let dateString = month + '월 ' + day + '일';

  function updateLike(i) {
    let copyLike = [...like];
    copyLike[i] = copyLike[i] += 1;
    setLike(copyLike);
  }

  function changeName () {
    let copyName = [...postname];
    copyName[0] = 'e-post';
    setPostname(copyName);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>blog</h4>
      </div>
    
      <button onClick={()=>{
        let copy = [...postname];
        copy.sort();
        setPostname(copy);
      }}>list sort</button>
      <button onClick={()=>{
        let copy = [...postname];
        copy[0] = 'post1-1'
        setPostname(copy)
      }}>post name change</button>

      {
        postname.map(function(post, idx){
          return (
            <div className="list" key={idx}>
              <h4 onClick={()=>{
                setModal (!modal)
                setTitle(idx)
                }}>{postname[idx]}
                <span onClick={(e)=>{
                  e.stopPropagation();
                  updateLike(idx)}}>👍</span>
                { like[idx] } 
              </h4>
              <p>{ date[idx] } 발행</p>
              <button onClick={()=>{
                let copy = [...postname];
                copy.splice(idx,1);
                setPostname(copy)
              }}>delete</button>
            </div>
          )
        })
      }

      <input onChange={(e)=>{
        setInputVal(e.target.value)
      }} />
      <button onClick={(e)=> {
        let copyPost = [...postname];
        let copyLike = [...like];
        let copyDate = [...date];
        if(inputVal !== ''){
          copyPost.unshift(inputVal);
          setPostname(copyPost);
          copyLike.unshift(0);
          setLike(copyLike);
          copyDate.unshift(dateString);
          setDate(copyDate)
        };
      }}>등록</button>
      
      {
        modal == true ? <Modal changeName={changeName} postname={postname} title={title} /> : null
      }

      <Modal2 />
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.postname[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeName}>post name change</button>
    </div>
  )
}

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
        {this.state.name} {this.state.age}
        <button onClick={()=>{
          this.setState({age: 21})
        }}>버튼</button>
      </div>
    )
  }
}


export default App;
