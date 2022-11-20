import styled from "styled-components";

const StyleBanner = styled.div`
  .capa {
   height: 40vh;
   width: 100vw;
   margin: 20px 0px;
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
    }
    p {
     font-size: 1em;
     font-weight: 300;
     text-align: left;
    }
   }
  }

  .info {
   width: 100vw;
   div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0px 0px;
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
    }
    p {
     font-size: 1.3em;
     font-weight: 300;
     margin: 0px 10px;
    }
    .logo-studio {
     margin: 0px 10px;
     max-height: 60px;
     max-width: 100px;
     border: none;
     border-radius: 10px;
     background: white;
    }
   }
   .sinopse {
    display: block;
    width: 100vw;
    margin-top: 10px;
    padding: 20px;
    h2 {
     font-size: 1.6em;
     font-weight: bold;
     text-align: left;
    }
    p {
     margin: 10px 0px;
     font-size: 1em;
     font-weight: 400;
     text-align: left;
    }
   }
   footer {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    a {
     background: none;
     color: white;
     font-size: 0.8em;
    }
   }
  }
`;

export default StyleBanner;