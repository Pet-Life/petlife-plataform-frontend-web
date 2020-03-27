import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 80px;
  padding: 0 60px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items:center;

  @media (max-width: 767px) {
    padding: 0 30px;
  }
`;

export const HeaderContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: ${props => props.secondary ? "flex-end" : "flex-start" };
  align-items: center;
`;
