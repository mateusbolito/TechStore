import { styled } from "styled-components";

export const InputCenter = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;

.group {
 display: flex;
 line-height: 28px;
 align-items: center;
 position: relative;
 margin-top: 40px;
 max-width: 500px;
}

.input {
 width: 500px;
 height: 40px;
 line-height: 28px;
 padding: 0 1rem;
 padding-left: 2.5rem;
 border: 2px solid transparent;
 border-radius: 8px;
 outline: none;
 background-color: #F5F7FF;
 color: #0d0c22;
 transition: .3s ease;
}

.input::placeholder {
 color: #9e9ea7;
 font-size: 17px;
}

.input:focus, input:hover {
 outline: none;
 border-color:  #9e9ea7; 
 background-color: #F5F7FF;
 
}

.icon {
 position: absolute;
 right: 1rem;
 fill: #000;
 width: 2rem;
 height: 1rem;
}



`