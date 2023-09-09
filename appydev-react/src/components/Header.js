import './Header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from 'styled-components';
import { BiGridAlt, BiSearch } from "react-icons/bi";
import { BsMic,BsBookmark } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { FaArrowUpFromBracket } from "react-icons/fa6";

const Btn = style.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.wid || '100%'};
  height: 50px;
  padding: 8px 4px;

  font-size: ${props => props.fz || '16px'};
  text-align: center;
  border: 2px solid #000;
  border-bottom-width: 4px;
  border-radius: 8px;
`


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Btn wid={'50px'} fz={'30px'}>#</Btn>
          <Navbar className='logo' href="#home">
            appydev
          </Navbar>
        </Navbar.Brand>

        <Navbar className='search-area'>
          <BiSearch/>
          <input
            className='searchBar'
          />
        </Navbar>

        <Navbar>
          <Btn>Sponsors</Btn>
        </Navbar>

        <Navbar id="basic-nav-dropdown">
          <Btn>
            <NavDropdown title='Explore'>
              <NavDropdown.Item href="#action/3.1">
                <BiGridAlt/>
                Tools
              </NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                <IoPeopleOutline />
                Communities
              </NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                <BsMic />
                Podcasts
              </NavDropdown.Item>
            </NavDropdown>
          </Btn>
        </Navbar>

        <Navbar>
          <Btn>
            <FaArrowUpFromBracket/>
            Submit
          </Btn>
        </Navbar>
        <Navbar>
          <Btn>
            <BsBookmark/>
            Bookmarks
          </Btn>
        </Navbar>
        {/* <Navbar>Submit</Navbar> */}
        {/* <Navbar>Bookmarks</Navbar> */}
      </Container>
    </Navbar>
  );
}

export default Header;