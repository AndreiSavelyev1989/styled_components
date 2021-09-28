import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin: 0 auto;
    }
    html {
        background: #E5E5E5;
    }
`;

export const MainContainer = styled.div`
  width: 1080px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 85px;
`;
