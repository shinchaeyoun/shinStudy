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
import Detail from './detail';
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  let [shoes] = useState(data);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="me-auto">
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
            <Container>
              <Row>
                {
                  shoes.map((item, idx)=>{
                    return (
                      <Item key={idx} idx={idx} shoes={shoes} />
                    )
                  })
                }
              </Row>
            </Container>
          </div>
        } />
        <Route path='/detail' element={<div><Detail /></div>} />
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
}

export default App;
