// 공통 css 설정
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .navBtn {
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
  }

  .actionBtn {
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
  }
`;

export default GlobalStyle;