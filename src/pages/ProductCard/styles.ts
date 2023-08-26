import { styled } from "styled-components";

export const SectionCard = styled.section`
width: 100%;
max-width: 300px;
background-color: white;
display: flex;
flex-direction: column;
cursor: pointer;
margin: 0 auto;
position: relative;


`
export const PhoneCard = styled.img`
width: 100%;

`
export const InfosCard = styled.div`
padding: 20px;
border-top: 1px solid #ddd;


.card__price {
font-size: 30px;
font-weight: 400;
display: block;
margin-bottom: 10px;
}

.card__title {
font-size: 15px;
color: rgba(0, 0, 0, 0.5);
line-height: 1.5;
font-weight: 500;
}

button {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  margin: 11px 14px;
  color: #0c5dd6;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;

}

button:hover {
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

`