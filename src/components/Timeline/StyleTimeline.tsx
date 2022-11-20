import styled from "styled-components";

const StyleTimeline = styled.div`
  margin: 30px 10px;
  h1 {
   font-size: 2em;
   font-weight: 100;
   text-align: left;
   color: #40FFC2;
   margin: 20px 0px;
   @media (min-width: 700px) {
    font-size: 2.2em;
   }
  }
  section {
   width: 100vw;
   display: flex;
   flex-wrap: wrap;
   margin-left: -10px;
   text-decoration: none;
   
   .banner {
    margin: 5px;
    @media (min-width: 700px) {
     margin: 20px;
    }
     
    img {
     background-color: white;
     border-radius: 10px;
     width: 120px;
     height: 170px;
     object-fit: cover;
     border-color: transparent;
     box-shadow: 0px 0px 10px black;
     @media (min-width: 700px) {
      height: 200px;
      width: 140px;
     }
    }

    .info-movies {
     width: 115px;
     @media (min-width: 700px) {
      width: 125px;
     }
    }

    h2 {
     font-size: 1.1em;
     font-weight: bold;
     color: white;
     text-align: left;
     @media (min-width: 700px) {
      font-size: 1.3em;
     }
    }
     
    p {
     font-size: 0.9em;
     font-weight: 300;
     color: #9F9F9F;
     text-align: left;
     margin-top: 10px;
     @media (min-width: 700px) {
      font-size: 1.0em;
     }
    }
   }
  }
`;

export default StyleTimeline;