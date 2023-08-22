/* eslint-disable */
import { useState } from 'react';
import './App.css';

function App() {
  let [postName, setPostName] = useState(['b post', 'c post', 'a post']);
  let [like, setLike] = useState([0,0,0]);
  let [date, setDate] = useState(['2월 17일','2월 18일', '2월 17일']);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputVal, setInpputVal] = useState('');

  let today = new Date();
  let month = today.getMonth() + 1;
  let days = today.getDate();
  let prtDate = month + '월 ' + days + '일';


  return (
    <div className="App">
      <div className='header'>
        <h4>HEADER</h4>
      </div>

      <button
        style={{marginRight:'5px'}}
        onClick={()=>{
          let copyPost = [...postName];
          copyPost[0] = 'a1-post';
          setPostName(copyPost);
        }}
      >
        change first post name</button>
      <button
        onClick={()=>{
          let copyPost = [...postName];
          let copyLike = [...like];
          let copyDate = [...date];
          copyPost.sort();
          setPostName(copyPost);
        }}
      >
        a-z sort
      </button>

      {
        postName.map((post, i)=>{
          return (
          <div className='list' key={i}>
            <h4 onClick={()=>{
              setModal(!modal);
              setTitle(i);
              console.log(title);
            }}>
              { postName[i] }
              <span
                className='likeBtn'
                onClick={(e)=>{
                  e.stopPropagation();
                  let copyLike = [...like];
                  copyLike[i] = copyLike[i] += 1;
                  setLike(copyLike);

                }}
              > like </span>
              { like[i] }
            </h4>
            <p>{ date[i] }</p>
            <button className='delBtn'
              onClick={()=>{
                let copyPost = [...postName];
                copyPost.splice(i, 1);
                setPostName(copyPost);
              }}
            >
              delete</button>
          </div>
          )
        })
      }

      <div className='inputWrap'>
        <input onChange={(e)=>{
          setInpputVal(e.target.value)
        }}></input>
        <button className='submitBtn'
          onClick={()=>{
            let copyPost = [...postName];
            let copyLike = [...like];
            let copyDate = [...date];
            copyPost.unshift(inputVal);
            copyLike.unshift(0);
            copyDate.unshift(prtDate);
            setPostName(copyPost);
            setLike(copyLike);
            setDate(copyDate);
          }}
        >submit</button>
      </div>

      {
        modal == true ? <Modal postName={postName} title={title} like={like} date={date} /> : null
      }
    </div>
  );
}

const Modal = ( props ) => {
  return (
    <div className='modal'>
      <h4>{ props.postName[props.title] }</h4>
      <p>{ props.like[props.title] }</p>
      <p>{ props.date[props.title] }</p>
    </div>
  )
}

export default App;
