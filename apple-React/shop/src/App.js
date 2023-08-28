import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import data from './data';
import Detail from './routes/detail';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate(-1)}}>-1</Nav.Link>
              <Nav.Link onClick={()=>{navigate(1)}}>+1</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
              <Link to='/'>home</Link>
              <Link to='/detail'>detail</Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>

      

      <Routes>
        <Route path='/' element={
          <div>
            <div className='main-bg'></div>
            <button
              onClick={()=>{
              }}
            >Sort</button>
            <Container>
              <Row>
                { shoes.map((item, idx)=>{
                  return <Item key={idx} idx={idx} shoes={shoes} />
                })}
              </Row>
            </Container>
          </div>
        } />

        <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />


        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>member</div>}/>
          <Route path='location' element={<About />}/>
        </Route>

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>page one</div>}/>
          <Route path='two' element={<div>page two</div>}/>
        </Route>

        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  );
}

function Item({shoes, idx}){
  const itemImgIdx = idx+1;
  return (
    <Col xs={6} md={4}>
      <Image src={`/img/item_${idx+1}.png`} width='80%' />
      <h4>{shoes[idx].title}</h4>
      <p>{shoes[idx].content}</p>
      <p>{shoes[idx].price}</p>
    </Col>
  );
};

function About (){
  return (
    <div>
      <h4>office info</h4>
      <Outlet></Outlet>
    </div>
  )
};

function Event () {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
