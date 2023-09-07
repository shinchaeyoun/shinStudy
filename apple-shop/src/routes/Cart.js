/* eslint-disable */
import Table from 'react-bootstrap/Table';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { changeAge } from './../store/userSlice';
import { addCount } from './../store.js';

let Btn = styled.button`
  width: 50px;
  background-color: lemonchiffon !important;
  border: none !important;
`

function Cart() {
  let state = useSelector((state) => state );
  // let stock = useSelector((state) => state.stock );
  let cartItem = useSelector((state) => state.cartItem );
  console.log('cartItem',cartItem);

  let dispatch = useDispatch();

  // increase

  return (
    <div>
      {state.user.name}
      {state.user.age}
      <button onClick={()=>{
        dispatch(changeAge(100))
        console.log(state.user.age);
      }}>set age</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItem.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{cartItem[idx].id}</td>
                  <td>{cartItem[idx].name}</td>
                  <td>{cartItem[idx].count}</td>
                  <Btn onClick={()=>{
                    let itemIdx = cartItem[idx].id;
                    console.log('cartItem id',itemIdx);
                    dispatch(addCount(itemIdx));
                  }}>+</Btn>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;