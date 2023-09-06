/* eslint-disable */
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav';

import { Context1 } from './../App';

let Box = styled.div`
  padding : 20px;
  background : grey
`;

let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px;
`;

let Title = styled.h4`
  font-size: 24px;
  color: ${ props => props.color };
  border-bottom: 2px dotted #000;
  border-color: ${ props => props.color }
`;

function DetailCard ({shoes}) {

  let a = useContext(Context1);
  let {stock} = useContext(Context1);

  let {id} = useParams();
  let findItem = shoes.find((x) => x.id == id);

  let [tab, setTab] = useState(0);
  // let [tab, setTab] = useState(true);

  let imgIdx = findItem.id + 1;

  let [fade, setFade] = useState('');

  useEffect(()=>{
    let detailTimer = setTimeout(() => { setFade('end'); }, 100);
    
    return () => {
      clearTimeout(detailTimer);
      setFade('');
    };
  }, [tab])

  return (
    <div className={`container start ${fade}`}>
      <Box>
        <YellowBtn bg='blue'>button</YellowBtn>
        <YellowBtn bg='lightblue'>button</YellowBtn>
        <YellowBtn bg='pink'>button</YellowBtn>
      </Box>

      {stock}

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${imgIdx}.jpg`} width="100%" alt="item img"/>
        </div>
        <div className="col-md-6">
          <Title className="pt-5" color='gray'>{findItem.title}</Title>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} shoes={shoes}/>
    </div>
  )
};

function TabContent({tab, shoes}){
  console.log(shoes,'shoes');

  let [fade, setFade] = useState('');
  let {stock} = useContext(Context1);

  useEffect(()=>{
    let tabTimer = setTimeout(() => { setFade('end'); }, 100);
    
    return () => {
      clearTimeout(tabTimer);
      setFade('');
    };
  }, [tab])

  return (
    <div className={`start ${fade}`}>
      { [<div>{stock}</div>, <div>내용1</div>, <div>내용2</div>][tab] }
    </div>
  );
};

export default DetailCard;