import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 150px;
  height: 40px;
  background: ${props => (props.primary ? "#FFF" : "#219653")};
  color: ${props => (props.primary ? "#219653" : "#FFF")};
  font-size: 1em;
  border: 2px solid #219653;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => (props.primary ? "#219653" : "#FFF")};
    color: ${props => (props.primary ? "#FFF" : "#219653")};
  }

  @media (max-width: 952px) {
    width: 100%;
  }
`;
