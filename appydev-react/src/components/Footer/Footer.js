import React from 'react';
import './Footer.scss'
// import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { AiFillApple, AiOutlineApple } from "react-icons/ai";

// const FooterNav = styled.div`
//   display: flex;
//   background-color: #fff;
//   height: 400px;

// `

function Footer() {
  return(
    <footer>
      <div className='footerNav'>
        <Container>
          <div className='leftArea'>
            <p className='logo'>
              <span>#</span>
              appydev
            </p>
            <p>
              A collection of awesome tools, resources<br/>
              and products for people who create and<br/>
              live on the internet.
            </p>
          </div>

          <div className='navArea'>
            <ul>
              <div className='title'>
                Categories
              </div>
              <li>Editors Choice</li>
              <li>Communities</li>
              <li>Podcast</li>
            </ul>
            <ul>
              <div className='title'>
                Submit
              </div>
              <li>Tool</li>
              <li>Community</li>
              <li>Podcast</li>
            </ul>
            <ul>
              <div className='title'>
                About
              </div>
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
            <ul>
              <div className='title'>
                Contact
              </div>
              <li>Follow us on Twitter</li>
              <li>Message us on Telegram</li>
              <li>Contact</li>
            </ul>
          </div>
        </Container>
      </div>
      <Container>
        <div className='footerBottom'>
          <p>
            <span className='lightGray'>2023 Appydev - </span>
            Sell your Project or Setup
          </p>
          <span>
            <AiFillApple/>
            <AiOutlineApple/>
          </span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;