import styled from "styled-components";
import { theme } from "../../styles/theme";

export const BannerWrapper = styled.section`
  padding: 30px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const BannerContent = styled.div`
  width: 32%;
  height: 180px;
  background: ${theme.colorSixth};
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
`;
