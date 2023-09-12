/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark } from '../../store';
import './Main.scss';
import { HiOutlineExternalLink, HiOutlineMinusCircle, HiOutlinePlusCircle } from "react-icons/hi";

function ToolItem() {
  let tools = useSelector((state) => state.tools);
  let [tool,setTool] = useState(tools);
  
  return(
    <>
      {
        tools.map((item, idx) => { 
          return (
            <Item
              item={item}
              idx={idx}
              key={idx}
              title={item.title}
              subTitle={item.subTitle}
            />
          )
        })
      }
    </>
  )
};

function Item ({item, idx, title,subTitle}) {
  let tools = useSelector((state) => state.tools);

  let dispatch = useDispatch();

  return (
    <div className='temItem'>
      <div className='hoverIcon'>
        <div className='bookmark'
          onClick={()=>{
            dispatch(addBookmark([idx, !tools[idx].bookmark]));
            
            let findIndex = tools.filter(e => e.bookmark === true);
            console.log('toolitem bookmark length',findIndex, findIndex.length);  
          }}
        >
          <span>
            {
              tools[idx].bookmark === false ?
              <HiOutlinePlusCircle/>
              : <HiOutlineMinusCircle/>
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
    </div>
  )
}

export default ToolItem;