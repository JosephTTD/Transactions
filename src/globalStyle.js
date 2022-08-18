import { createGlobalStyle } from "styled-components";
import "./font.css";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Sora', sans-serif;
}
html,
body,
#root,
#root>div {
    height: 100%;
    background: #000000;
    overflow: hidden;
}

#root>div {
    display: flex;
    justify-content center;
    align-items: center;
}
`;
export default GlobalStyle;
