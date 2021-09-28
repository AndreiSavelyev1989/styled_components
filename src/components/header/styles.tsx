import styled from "styled-components";
import logo from "./../../assets/images/logo.png";
import basket from "./../../assets/images/basket.png";
import like from "./../../assets/images/like.png";
import authAvatar from "./../../assets/images/authAvatar.png";

export const Logo = styled.img.attrs({
  src: `${logo}`,
  alt: "logo",
})`
  width: 40px;
  height: 40px;
`;

export const Title = styled.p`
  height: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
`;

export const Description = styled.p`
  height: 17px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #9d9d9d;
`;

export const Basket = styled.img.attrs({
  src: `${basket}`,
})`
  margin-right: 10px;
`;

export const Cost = styled.span`
  margin-right: 30px;
  height: 17px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #5c5c5c;
`;

export const Like = styled.img.attrs({
  src: `${like}`,
  alt: "like",
})`
  margin-right: 36.13px;
`;

export const AuthAvatar = styled.img.attrs({
  src: `${authAvatar}`,
  alt: "avatar",
})`
  margin-right: 63px;
`;
