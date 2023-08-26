import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 outline: none;
 font-family: 'Quicksand', sans-serif;
font-family: 'Roboto', sans-serif;
text-decoration: none;
list-style: none;
scroll-behavior: smooth; 
     
 } 
 body {
background: ${({theme})=> theme.colors["base-white"]};

 -webkit-font-smoothing: antialiased;
 } 
 button {
     cursor: pointer;
 }
 a {
     text-decoration: none;
 }
 .container {
  max-width: 1100px;
  margin: 0 auto;
}
`