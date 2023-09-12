/* eslint-disable */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark } from './../../store';
import styled from 'styled-components';
import './Main.scss';
import { HiOutlineExternalLink, HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";

function ToolItem() {
  let tools = useSelector((state) => state.tools);
  let [tool, setTool] = useState(tools);

  return(
    <>
      {
        tool.map((item, idx) => { 
          return (
            <Item item={item} key={idx} title={item.title} subTitle={item.subTitle}/>
          )
        })
      }
    </>
  )
};

function Item ({title,subTitle}) {
  // let [itemHover, setHover] = useState(false);
  let [bookMark, setBookmark] = useState(false);

  let dispatch = useDispatch();
  return (
    <ItemBox className='temItem'>
      <div className='hoverIcon'>
        <div className='bookmark'
          onClick={()=>{
            setBookmark(!bookMark)
            dispatch(addBookmark(bookMark))
            console.log(bookMark);
          }}
        >
          <span>
            {
              bookMark === true ?
              <HiOutlineMinusCircle/>
              : <HiOutlinePlusCircle/>
            }
          </span>
          bookmark
        </div>
        <div className='link'><HiOutlineExternalLink/></div>
      </div>
      
      <div className='imgBox'>
        img
      </div>
      <div className='shopIcon'>icon</div>

      <div className='textBox'>
        <div className='title'>{title}</div>
        <div className='subTitle'>{subTitle}</div>

        <div className='bottomBox'>
          <div className='tag'>tag</div>
          <div className='byName'>byName</div>
        </div>
      </div>
    </ItemBox>
  )
}

const ItemBox = styled.div``

export default ToolItem;