import styled from "styled-components";

const StyleFooter = styled.div`
  height: 70px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  @media (min-width: 700px) {
    position: fixed;
    bottom: 1px;
  }
  p {
   font-size: 0.8em;
   font-weight: 300;
   text-align: center;
   @media (min-width: 700px) {
    font-size: 1em;
   }
  }
  a {
   font-size: 0.7em;
   font-weight: 300;
   text-align: center;
   img {
    width: 100px;
    @media (min-width: 700px) {
     width: 150px;
    }
   }
  }
`;

export default StyleFooter;