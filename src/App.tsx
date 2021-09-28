import React from "react";
import styled from "styled-components";
import FlexContainer from "./components/common/FlexContainer";
import Header from "./components/header/header";
import Poster from "./components/poster/poster";
import GlobalStyles from "./components/styles/global";

const Line = styled.div`
  border-bottom: 1px solid #eaeaea;
  margin-top: 44px;
`;

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <FlexContainer
      width={"1080px"}
      height={"100vh"}
      flexDirection={"column"}
      background={"#ffffff"}
      margin={"85px auto 0"}
      borderRadius={"20px"}
      boxShadow={'0px 10px 20px rgba(0, 0, 0, 0.04)'}
    >
      <Header />
      <Line />
      <Poster />
    </FlexContainer>
  </>
);

export default App;
