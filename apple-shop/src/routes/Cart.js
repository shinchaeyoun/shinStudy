import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Cart() {

  let state = useSelector((state) => state );
  let stock = useSelector((state) => state.stock );
  let cartItem = useSelector((state) => state.cartItem );

  console.log('cartItem', cartItem);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {
          cartItem.map((item, idx) => {
            return (
              <Item item={item} idx={idx}/>
            )
          })
        }
      </tbody>
    </Table>
  );
};

function Item ({item, idx}){
  console.log(item);
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{item.name}</td>
      <td>{item.count}</td>
    </tr>
  )
}

export default Cart;