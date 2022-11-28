import styled from "styled-components";

const StyleBanner = styled.div`
  padding: 0px;
  margin: 0px;
  overflow-x: hidden;
  .capa {
   height: 40vh;
   width: 100vw;
   margin: 1px 0px;
   position: relative;
   
   img {
    height: 100%;
    width: 100%;
    background-color: gray;
    border: none;
    box-shadow: 1px 1px 5px black;
    object-fit: cover;
   }
   div {
    position: absolute;
    bottom: 10px;
    padding: 10px;
    h1 {
     width: 200px;
     font-size: 1.6em;
     font-weight: bold;
     text-align: left;
     @media (min-width: 700px) {
      font-size: 2em;
     }
    }
    p {
     font-size: 1em;
     font-weight: 300;
     text-align: left;
     @media (min-width: 700px) {
      font-size: 1.2em;
     }
    }
   }
  }

  .info {
   width: 100%;
   margin: 10px 0px;
   div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    mark {
     padding: 15px;
     margin: 0px 10px;
     margin-left: 20px;
     background-color: #40FFC2;
     border-radius: 200px;
     font-size: 1.3em;
     text-align: center;
     color: #22333B;
     @media (min-width: 700px) {
      font-size: 1.9em;
      padding: 20px;
     }
    }
    p {
     font-size: 1.3em;
     font-weight: 300;
     margin: 0px 10px;
     @media (min-width: 700px) {
      font-size: 1.8em;
     }
    }
    .logo-studio {
     margin: 0px 0px;
     max-height: 60px;
     max-width: 100px;
     border: none;
     border-radius: 10px;
     background: white;
     @media (min-width: 700px) {
      max-height: 120px;
      max-width: 200px;
     }
    }
   }
   .sinopse {
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 20px;
    @media (min-width: 700px) {
     width: 60%;
    }
    h2 {
     font-size: 1.6em;
     font-weight: bold;
     text-align: left;
     @media (min-width: 700px) {
      font-size: 2em;
     }
    }
    p {
     margin: 10px auto;
     font-size: 1em;
     font-weight: 400;
     bottom: 1px;
    }
     text-align: left;
     @media (min-width: 700px) {
      font-size: 1.4em;
     }
    }
   }
   footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
    a {
     background: none;
     color: white;
     font-size: 0.9em;
     @media (min-width: 700px) {
      font-size: 1.2em;
     }
    }
   }
  }
`;

export default StyleBanner;