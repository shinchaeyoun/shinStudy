/* eslint-disable */
import React, { useState } from 'react';
import { Routes, Route, Link , useNavigate, Outlet} from 'react-router-dom'
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from './component/Data';
import Detail from './routes/Detail';
import Test from './routes/test';

function App() {
  let [shoes, setShoes] = useState(Data);
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
        
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>location</div>} />
        </Route>

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>one</div>} />
          <Route path="two" element={<div>two</div>} />
        </Route>
      </Routes>

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
