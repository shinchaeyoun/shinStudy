/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Data from './component/Data';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  let [shoes, setShoes] = useState(Data); 
  return (
    <div className="App">  
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className="container">
        <div className="row">
          {
            shoes.map((item, idx)=>{
              return (
                <Card shoes={shoes} key={idx} idx={idx}/>
              )
            })
          }
        </div>
      </div> 

      <Routes>
        <Route path="/detail" element={ <div>상세페이지임</div> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
      </Routes>
    </div>
  );
}

function Card ({shoes, idx}) {
  console.log(idx);
  return (
    <div className="col-md-4">
      <img src={`/img/item${idx+1}.png`} alt={`item${idx+1}`} /> 
      <h4>{shoes[idx].title}</h4>
      <p>{shoes[idx].content}</p>
      <p>{shoes[idx].price}</p>
    </div>
  )
}

export default App;
