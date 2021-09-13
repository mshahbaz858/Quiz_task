import styled from "styled-components";
const Heading1 = styled.h2`
  color: ${props => (props.color ? props.color : "#ffffff")};
  border: ${props => (props.border ? props.border : "")};
  padding-inline: ${props => (props.paddingInline ? props.paddingInline : "")};
  padding-block: ${props => (props.paddingBlock ? props.paddingBlock : "")};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "")};
  font-size: ${props => (props.size ? props.size : "17px")};
  font-weight: ${props => (props.weight ? props.weight : "400")};
  display: flex;
  width: 100%;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "")};
  justify-content: ${props => (props.JFcontent ? props.JFcontent : "center")};

  @media (max-width: 992px) {
    font-size: ${props => (props.SMsize ? props.SMsize : "28.5px")};
    margin-bottom: ${props =>
      props.SMmarginBottom ? props.SMmarginBottom : "12px"};
    line-height: 1.5;
  }

  @media (max-width: 600px) {
    font-size: ${props => (props.SMsize ? props.SMsize : "23.5px")};
    margin-bottom: ${props =>
      props.SMmarginBottom ? props.SMmarginBottom : "8px"};
    line-height: 1.2;
  }
`;
export default Heading1;
