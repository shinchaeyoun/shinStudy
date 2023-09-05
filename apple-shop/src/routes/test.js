/* eslint-disable */
import { useState, useEffect } from 'react';
import styled from 'styled-components';

let YellowBox = styled.div`
  margin: 0 auto;
  width: 30px; height: 30px;
  background-color: yellow;
  border: 1px solid orange;
  border-radius: 30px;
`

function Test () {
  let [count, setCount] = useState(0);
  let [item, setItem] = useState(true);
  let [inputVal, setInputVal] = useState();
  
  useEffect(()=>{
    let timer = setTimeout(() => {
      setItem(false);
    }, 2000);


    if ( isNaN(inputVal) === true ){
      alert(`don't do that`)
    } else {
      console.log('else');
    }

    return () => {
      clearTimeout(timer);
    };
  }, [inputVal]);

  useEffect(()=>{ }) // 1. 재렌더링마다 코드 실행
  useEffect(()=>{ }, []) // 2. mount시 1회 코드 실행
  useEffect(()=>{
    return ()=>{}
  }) // 3. unmount시 1회 코드 실행

  useEffect(()=>{
    return ()=>{}
  }) // 4. useEffect 실행 전에 뭔가 실행하려면 언제나 return ()=>{}

  return (
    <>
      {
        item === true ? <YellowBox/> : null
      }
      <input
        value={inputVal}
        onChange={(e)=>{
          setInputVal(e.target.value)
        }}
      />
      <button onClick={()=>{setCount(count+1)}}>button</button>
    </>
  )
};

export default Test;