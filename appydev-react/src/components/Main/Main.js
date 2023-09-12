/* eslint-disable */
import React, { useState } from 'react';
import ItemTem from './ToolItem.js';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import './Main.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from './../../store';
import { PiCirclesFourBold, PiCrownSimpleBold, PiFlyingSaucerBold } from "react-icons/pi";

const MainBlock = styled.div`
  padding-bottom: 120px;
`

function Main() {
  const dispatch = useDispatch();
  let toolNavs = useSelector((state) => state.toolNavs);
  let [toolNav, settoolNav] = useState(toolNavs);

  return(
    <MainBlock className='mainBlock'>
      <Container>
        <div className='toolNav'>
          <ul>
            <li className='navItem'>
              <div className='item'>
                <span className='icon'><PiCirclesFourBold/></span>
                All
              </div>
            </li>
            <li className='navItem dontmove'>
              <div className='item'>
                <span className='icon'><PiCrownSimpleBold/></span>
                Featured
              </div>
            </li>
            {
              toolNav.map((item, i)=>{
                return (
                  <ToolNavItem item={item} key={i} title={item.title} icon={item.icon} />
                  )
              })
            }
            <li className='navItem dontmove'>
              <div className='item'>
                <span className='icon'><PiFlyingSaucerBold/></span>
                Editors Choice
              </div>
            </li>
          </ul>
        </div>

        <div className='toolItem'>
          <ItemTem />
        </div>
      </Container>
    </MainBlock>
  )
}

function ToolNavItem ({ item, title, icon }){
  // console.log(item);
  return (
    <li className='navItem'
      onClick={()=>{
        console.log('item', item.id);
      }}
    >
      <div className='item'>
        <span className='icon'>{icon}</span>
        {title}
      </div>
    </li>
  )
}

export default Main;