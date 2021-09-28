import styled from "styled-components";
import posterImage from "./../../assets/images/posterImage.png";
import posterLogo from "./../../assets/images/posterLogo.png";

export const PosterImage = styled.div`
  background-image: url(${posterImage});
  width: 641.18px;
  height: 300px;
`;

export const PosterLogo = styled.div`
  background-image: url(${posterLogo});
  width: 99px;
  height: 40px;
  margin: 16px 0 0 20px;
`;

export const PosterTitle = styled.p`
  width: 240.55px;
  height: 102.55px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  color: #8bb43c;
  display: flex;
  flex-direction: column;
  &:nth-child(1) {
    display: inline;
  }
`;

export const PosterTitleItem = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  color: #000000;
`;

export const Button = styled.button`
  width: 177.46px;
  height: 47.09px;
  background: #a5d364;
  border-radius: 110px;
  font-family: Inter sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
`;
