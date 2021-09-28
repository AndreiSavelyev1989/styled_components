import FlexContainer from "../common/FlexContainer";
import { Title } from "../header/styles";
import {
  Button,
  PosterImage,
  PosterLogo,
  PosterTitle,
  PosterTitleItem,
} from "./styles";

const Poster = () => (
  <FlexContainer
    width={"960px"}
    height={"300px"}
    background={"#F4EFE9"}
    borderRadius={"20px"}
    margin={"45px auto 0"}
    justifyContent={"space-between"}
  >
    <FlexContainer width={"318,82px"} flexDirection={"column"}>
      <FlexContainer>
        <PosterLogo />
      </FlexContainer>
      <FlexContainer flexDirection={"column"} margin={"32px 0 0 61px"}>
        <PosterTitle>
          Stan Smith<PosterTitleItem>, </PosterTitleItem>
          <PosterTitleItem>Forever!</PosterTitleItem>
        </PosterTitle>
        <Button>Купить</Button>
      </FlexContainer>
    </FlexContainer>
    <FlexContainer alignItems={"flex-end"} width={"641.18px"}>
      <PosterImage />
    </FlexContainer>
  </FlexContainer>
);

export default Poster;
