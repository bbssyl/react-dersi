import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(prop) => (prop.bgColor ? prop.bgColor : "blue")};
  font-size: ${(prop) => (prop.size ? prop.size + "px" : "12px")};
`;
