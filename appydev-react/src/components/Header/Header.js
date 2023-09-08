import './Header.scss';
// import GlobalStyle from '../../styles/GlobalStyle';
import styled from 'styled-components';

const NavBtn = styled.div`
  width: ${props => props.wid || '50px'}; height: ${props => props.hei || '50px'};
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

function Header () {
  return (
    <>
      {/* <GlobalStyle/> */}
      <header>
        <NavBtn />
        <div className='logo navBtn' wid={'30px'}>
          <span>#</span>
        </div>
      </header>
    </>
  )
};

export default Header;