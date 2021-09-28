import React from "react";
import {
  AuthBlock,
  Container,
  Description,
  Logo,
  LogoBlock,
  Title,
  DescriptionBlock,
  Basket,
  Cost,
  Like,
  AuthAvatar,
} from "./styles";

const Header: React.FC = () => (
  <Container>
    <LogoBlock>
      <Logo/>
      <DescriptionBlock>
        <Title>REACT SNEAKERS</Title>
        <Description>Магазин лучших кроссовок</Description>
      </DescriptionBlock>
    </LogoBlock>
    <AuthBlock>
        <Basket/>
        <Cost>1200 руб</Cost>
        <Like/>
        <AuthAvatar/>
    </AuthBlock>
  </Container>
);

export default Header;
