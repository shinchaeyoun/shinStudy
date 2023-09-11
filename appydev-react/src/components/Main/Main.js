/* eslint-disable */
import React, { useState } from 'react';
import ItemTem from './ToolItem.js';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import './Main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from './../../store';

const MainBlock = styled.div`

`

function Main() {
  const dispatch = useDispatch();
  let toolItems = useSelector((state) => state.toolItems);
  console.log('toolItem',toolItems[0].title);
  let [toolItem, setToolItem] = useState(toolItems);

  console.log(toolItem.length,'length');

  return(
    <MainBlock className='mainBlock'>
      <Container>
        <div className='toolNav'>
          <ul>
            <li className='navItem'>All</li>
            {
              toolItem.map((item, i)=>{
                return (
                  <ToolNavItem key={i} title={item.title}/>
                  )
              })
            }
            <li className='navItem'>Editors Choice</li>
          </ul>
        </div>
        <div>
          <div className='actionBtn' wid={'100px'}>??</div>
          <actionBtn wid={'100px'}>!</actionBtn>
          <ItemTem />
        </div>
      </Container>
    </MainBlock>
  )
}

function ToolNavItem ({title}){
  return (
    <li className='navItem'>
      <div className='item'>
        <span className='icon'>⚪</span>
        {title}
      </div>
    </li>
  )
}

export default Main;