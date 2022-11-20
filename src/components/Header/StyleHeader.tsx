import styled from "styled-components";

const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  width: 100vw;
  box-shadow: 0px 1px 10px black;
  background-color: #22333B;
  @media (min-width: 700px) {
   height: 80px;
  }
  h1 {
   text-align: center;
   font-size: 1.4em;
   color: #00FFFF;
   font-weight: 100;
   mark {
    background: none;
    color: #40FFC2;
    font-weight: 600;
   }
   @media (min-width: 700px) {
    font-size: 1.7em;
   }
  }
  button {
   background-color: transparent;
   border: 0px;
   font-size: 30px;
   button:active {
    background: none;
    border: none;
   }
   @media (min-width: 700px) {
    font-size: 40px;
   }
  }
`;

export default StyleHeader;