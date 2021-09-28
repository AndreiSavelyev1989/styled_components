import styled from "styled-components";

interface PropsType {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  background?: string;
  padding?: string;
  boxShadow?: string;
}

const StyledFlex = styled.div<PropsType>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "stretch"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  border-radius: ${({ borderRadius }) => borderRadius || "none"};
  background: ${({ background }) => background || "transparent"};
  padding: ${({ padding }) => padding || "0"};
  box-shadow: ${({ boxShadow }) => boxShadow || "0"};
`;

const FlexContainer: React.FC<PropsType> = (props) => {
  return <StyledFlex {...props} />;
};

export default FlexContainer;
