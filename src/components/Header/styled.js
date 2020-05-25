import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
  height: 80px;
  padding: 0 60px;
  border-bottom: 1px solid ${theme.color.quinary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;

export const HeaderContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: ${(props) => (props.secondary ? "flex-end" : "flex-start")};
  align-items: center;
`;
