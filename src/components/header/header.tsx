import React from "react";
import FlexContainer from "../common/FlexContainer";
import {
  Description,
  Logo,
  Title,
  Basket,
  Cost,
  Like,
  AuthAvatar,
} from "./styles";

const Header: React.FC = () => (
  <FlexContainer
    alignItems={"center"}
    width={"972px"}
    height={"41px"}
    margin={"43px 0 0 45px"}
  >
    <FlexContainer alignItems={"center"} width={"50%"}>
      <Logo />
      <FlexContainer flexDirection={"column"} margin={"0 0 0 16px"}>
        <Title>REACT SNEAKERS</Title>
        <Description>Магазин лучших кроссовок</Description>
      </FlexContainer>
    </FlexContainer>
    <FlexContainer
      alignItems={"center"}
      justifyContent={"flex-end"}
      width={"50%"}
    >
      <Basket />
      <Cost>1200 руб</Cost>
      <Like />
      <AuthAvatar />
    </FlexContainer>
  </FlexContainer>
);

export default Header;
