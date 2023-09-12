import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.scss';
// import GlobalStyle from '../../styles/GlobalStyle';
// import Nav from 'react-bootstrap/Nav';
// import { addBookmark } from './../../store';
import { BiSearch, BiX, BiBookmark, BiArrowFromBottom, BiGridAlt, BiGroup, BiMicrophone } from "react-icons/bi";

const NavBtn = styled.div`
  padding: 0px 4px;
  width: ${props => props.wid};
  height: ${props => props.hei || '50px'};
  background-color: ${props => props.bgc || '#fff'};
  color: ${props => props.bgc === undefined ? 'black' : 'white'};
  font-size: ${props => props.fz || '16px'};
  text-align: center;
  line-height: ${props => props.hei || '44px'};
  border: 2px solid #000;
  border-bottom-width: 4px;
  border-radius: 8px;

  &:active {
    line-height: 46px;
    border-bottom-width: 2px;
  }
`

function Header () {
  let mark = useSelector((state) => { return state.bookmark } );
  
  let [inputVal, setInputVal] = useState('');
  let [inputFocus, setInputFocus] = useState(false);

  const searchInput = useRef();

  const inputChange = (e) => {
    if(e.target.value.length > 0){
      setInputFocus(true);
      setInputVal(e.target.value)
    } else {
      setInputFocus(false)
      setInputVal('')
    }
  };
  const inputXClick = () => {
    setInputVal('')
    setInputFocus(false);
    searchInput.current.focus();
  };

  return (
    <>
      <header>
        <Container>
          <NavItem title={'#'} wid={'50px'} fz={'30px'}>#</NavItem>

          <div className='logo'>appydev</div>

          <div className='searchArea'>
            <span className='icon'><BiSearch/></span>
            <input
              placeholder='Search Tools, Creators & Communities'
              value={inputVal}
              onChange={(e)=> inputChange(e)}
              ref={searchInput}
            />
            {
              inputFocus === true ?
              <BiX className='inputX' onClick={()=>inputXClick()} />
              : null
            }
          </div>

          <NavItem title={'Sponsors'} bgc={'#667eea'}>Sponsors</NavItem>
          <NavItem title={'Explore'}>
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <span className='icon'><BiGridAlt/></span>
                Tools
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                <span className='icon'><BiGroup/></span>
                Communities
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                <span className='icon'><BiMicrophone/></span>
                Podcasts
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>
          <NavItem title={'Submit'}>
            <span className='icon'><BiArrowFromBottom/></span>
            Submit
          </NavItem>
          <NavItem>
            <span className='icon'><BiBookmark/></span>
            <span className='bookmarkNum'>{mark}</span>
            Bookmark
          </NavItem>
        </Container>
      </header>
    </>
  )
};

function NavItem ({children, wid, hei, fz, bgc}) {
  return (
    <NavBtn className='navItem' wid={wid} hei={hei} fz={fz} bgc={bgc}>
      <span>
        {children}
      </span>
    </NavBtn>
  )
}
export default Header;