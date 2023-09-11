import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';

const NavBtn = styled.div`
  padding: 0px 12px;
  // width: ${props => props.wid};
  height: ${props => props.hei || '50px'};
  color: ${({theme}) => theme.colors.mainColor};
  text-align: center;
  line-height: ${props => props.hei || '50px'};
  border: 2px solid #000;
  border-bottom-width: 4px;
  border-radius: 8px;

  &:active {
    line-height: ${props => props.hei+2 || '50px'};
    border-bottom-width: 2px;
  }
`

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavBtn>
              <Nav.Link href="#home">Home</Nav.Link>

            </NavBtn>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;