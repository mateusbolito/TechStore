import { styled } from "styled-components";

export const HeaderHome = styled.header`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: center;

`
export const ListHome = styled.a`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
font-family: "'Poppins'";

a {

margin: 30px;
color:  #9e9ea7;

}

a:hover {
background: #F5F7FF;
transition: color .2s ease;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.slider {
  background-color: #ffffff2b;
  border-radius: 100px;
  padding: 1px;
  margin: 10px;
  cursor: pointer;
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  align-items: center;
  position: relative;
  display: inline-block;
  width: 51px;
  height: 20px;
  box-shadow: rgba(0, 0, 0, 0.62) 0px 0px 5px inset, rgba(0, 0, 0, 0.21) 0px 0px 0px 24px inset,
        #22cc3f 0px 0px 0px 0px inset, rgba(224, 224, 224, 0.45) 0px 1px 0px 0px;
}

.slider::after {
  content: "";
  display: flex;
  top: 2.3px;
  left: 2px;
  width: 15px;
  height: 15px;
  background-color: #e3e3e3;
  border-radius: 100px;
  position: absolute;
  box-shadow: transparent 0px 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 6px 6px;
  transition: left 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s, background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  will-change: left, background-color;
}

.switch input[type="checkbox"]:checked + .slider {
  box-shadow: rgba(0, 0, 0, 0.62) 0px 0px 5px inset, #000 0px 0px 0px 2px inset, #000 0px 0px 0px 24px inset,
        rgba(224, 224, 224, 0.45) 0px 1px 0px 0px;
}

.switch input[type="checkbox"]:checked + .slider::after {
  left: 24px;
}

.switch input[type="checkbox"] {
  display: none;
}
`
export const ImagemHome = styled.div`

display: flex;
align-items: flex-start;
margin-right: 30px;

img {
margin-right: 40px;
}
`
export const CartCount = styled.span`
width: 20px;
height: 20px;
border-radius: 100%;
padding: 0 5px;
font-size: 12px;
background-color: red;
text-align: center;
padding: 0 5px;
color: ${({theme})=> theme.colors["base-white"]};
margin-top: -34px;
svg {
color: #000;

}

`