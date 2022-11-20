import styled from "styled-components";

const StyleFooter = styled.div`
  height: 60px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  p {
   font-size: 0.8em;
   font-weight: 300;
   text-align: center;
  }
  a {
   font-size: 0.7em;
   font-weight: 300;
   text-align: center;
   img {
    width: 100px;
   }
  }
`;

export default StyleFooter;