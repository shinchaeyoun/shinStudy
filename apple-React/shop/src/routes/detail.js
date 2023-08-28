import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : black;
  padding : 10px;
`;

function Detail(){
  let [val,setVal] = useState('');

  useEffect(()=>{
    if(isNaN(val)){
      console.log('??dpd');
    }
  }, [val]);
  
  return (
    <input 
      onChange={(e)=>{
        setVal(e.target.value);
      }}
    />
  )
}

function Detail1 ({shoes}) {
  let {id} = useParams();
  let idx = shoes[id].id;
  let findItem = shoes.find((item)=> item.id == id);

  return (
    <div className="container">
      <Box>
        <YellowBtn bg="yellow">버튼임</YellowBtn>
        <YellowBtn bg="orange">버튼임</YellowBtn>
        <YellowBtn bg="blue">버튼임</YellowBtn>
      </Box>

      <div className="row">
        <div className="col-md-6">
          <img src={`/img/item_${idx+1}.png`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
};

export default Detail;