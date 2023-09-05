/* eslint-disable */
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

function TabsBlock () {
  let [tab, setTab] = useState(0);

  return (
    // <Tabs
    //   defaultActiveKey="profile"
    //   id="uncontrolled-tab-example"
    //   className="mb-3"
    // >
    //   <Tab eventKey="home" title="Home">
    //     Tab content for Home
    //   </Tab>
    //   <Tab eventKey="profile" title="Profile">
    //     Tab content for Profile
    //   </Tab>
    //   <Tab eventKey="contact" title="Contact">
    //     Tab content for Contact
    //   </Tab>
    // </Tabs>
    <>
      <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
      </Nav>
      <div>내용0</div>
      <div>내용1</div>
      <div>내용2</div> 
    </>
  );
};

export default TabsBlock