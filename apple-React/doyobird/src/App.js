/* eslint-disable */
import React, { useState } from 'react';
import './App.scss';

function App() {
  let [todoList, setTodolist] = useState(['hi']);
  let [inputVal, setInputVal] = useState('');
  let [done, setDone] = useState([false]);
  let [checkIcon, setCheckicon] = useState([]);
  let [time, setTime] = useState('00:00:00');


  let today = new Date();
  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);

  let dateString = year + '-' + month + '-' + day;
  
  const currentTimer = () => {
    let today = new Date(); 
    let hours = ('0' + today.getHours()).slice(-2);
    let minutes = ('0' + today.getMinutes()).slice(-2);
    let seconds = ('0' + today.getSeconds()).slice(-2);
    let timeString = hours + ':' + minutes + ':' + seconds;
    setTime(timeString);
  };

  const startTimer = () => setInterval(currentTimer,1000);
  startTimer();
  
  function addList () {
    let txtCheck = inputVal.replace(/\s/g,'').length;
    
    if(txtCheck !== 0) {
      let copyList = [...todoList];
      copyList.unshift(inputVal);
      setTodolist(copyList);
      setInputVal('');
    }
  };

  function textHandler (e) {
    const inputTxt = e.target.value;
    setInputVal(inputTxt);
  };


  return (
    <div className='wrap'>
      <header>HEADER</header>

      <div className='dateArea'>
      { dateString }<br/>
      { time }
      </div>

      <div className='addTodoList'>
        <input 
          placeholder='add list!'
          onChange={textHandler}
          value={inputVal}
          onKeyDown={(e)=>{
            if(e.key === 'Enter'){
              addList();
            }
          }}
          />
        <button
          onClick={addList}
          >Add list!</button>
      </div>

      <div className='todolistWrap'>
        {
          todoList.map(function(item, i){
            return (
              <div className='todoItem' key={i}>
                <div
                  className={`${done == true ? 'active' : 'nonActive'} ${'checkbox'}`}>
                  <div
                    className='checkIcon'
                    onClick={()=> {
                      setDone(!done)

                      console.log('done', done ,item);
                    }}
                    
                    ></div>
                  { todoList[i] }
                </div>
                <span className='delBtn'
                  onClick={()=>{
                    let copyList = [...todoList];
                    copyList.splice(i,1);
                    setTodolist(copyList)
                  }}
                >❌</span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
