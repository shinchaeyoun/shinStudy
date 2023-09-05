/* eslint-disable */
import { useParams } from "react-router-dom";
import styled from 'styled-components'

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
`

function DetailCard ({shoes}) {
  let {id} = useParams();
  let findItem = shoes.find((x) => x.id == id);

  let imgIdx = findItem.id + 1;

  return (
    <div className="container">
      <Box>
        <YellowBtn bg='blue'>button</YellowBtn>
        <YellowBtn bg='lightblue'>button</YellowBtn>
        <YellowBtn bg='pink'>button</YellowBtn>
      </Box>

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
    </div>
  )
};

export default DetailCard;

