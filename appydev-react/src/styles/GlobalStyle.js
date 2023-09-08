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
`;

export default GlobalStyle;