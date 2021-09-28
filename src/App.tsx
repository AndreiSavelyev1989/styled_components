import React from "react";
import Header from "./components/header/header";
import GlobalStyles, { MainContainer } from "./components/styles/global";

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <MainContainer>
      <Header/>
    </MainContainer>
  </>
);

export default App;
