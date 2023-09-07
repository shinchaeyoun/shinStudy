/* eslint-disable */
import React, { useState, createContext } from 'react';
import { Routes, Route, Link , useNavigate, Outlet} from 'react-router-dom'
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from './component/Data';
import Tabs from './component/Tabs';
import Detail from './routes/Detail';
import Test from './routes/test';
import Cart from './routes/Cart';
import axios from 'axios';

export let Context1 = createContext()

function App() {
  let [shoes, setShoes] = useState(Data);
  let [stock, setStock] = useState([10, 20, 30]);
  let [moreNum, setMoreNum] = useState(0);
  let navigate = useNavigate();



  return (
    <div className="App">  
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/'>Home</Link>
              <Link to='/detail'>Detail</Link>
              <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
              <Nav.Link onClick={()=>{navigate(-1)}}>prev</Nav.Link>
              <Nav.Link onClick={()=>{navigate(1)}}>next</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>

      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="/" element={<MainPage shoes={shoes}/>} />

        <Route path="/test" element={<Test/>} />

        
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ stock, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />

        <Route path="/cart" element={<Cart/>} />

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route>

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>one</div>} />
          <Route path="two" element={<div>two</div>} />
        </Route>
      </Routes>

      {
        moreNum < 4 ?
        <button onClick={()=>{
        setMoreNum(moreNum + 1);

        if(moreNum == 0) {
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((data)=>{
            let copyShoes = [...shoes, ...data.data];
            setShoes(copyShoes);
          })
          .catch(()=>{
            console.log('lost');
          });
        } else if (moreNum == 1) {
          axios.get('https://codingapple1.github.io/shop/data3.json')
          .then((data)=>{
            let copyShoes = [...shoes, ...data.data];
            setShoes(copyShoes);
          })
          .catch(()=>{
            console.log('lost');
          });
        } else if (moreNum > 1) {
          console.log(`We don't hava any more item`);
        }
        
      }}>more {moreNum}</button>
      : null
      }
    </div>
  );
}

function Card ({shoes, idx}) {
  return (
    <Col md={4}>
      <img src={`/img/item${idx+1}.png`} alt={`item${idx+1}`} /> 
      <h4>{shoes[idx].title}</h4>
      <p>{shoes[idx].content}</p>
      <p>{shoes[idx].price}</p>
    </Col>
  )
};

function MainPage ({shoes}) {
  return (
    <div>
      <div className='main-bg'></div>
      <div className="container">
        <Row>
          {
            shoes.map((item, idx)=>{
              return (
                <Card shoes={shoes} key={idx} idx={idx}/>
              )
            })
          }
        </Row>
      </div> 
    </div>
  )
};

function About (){
  return (
    <div>
      <p>office info</p>
      <Outlet />
      <p>office info footer</p>
    </div>
  )
};

function Event () {
  return (
    <div>
      <h4>Today's Event</h4>
      <Outlet/>
    </div>
  )
}
export default App;
