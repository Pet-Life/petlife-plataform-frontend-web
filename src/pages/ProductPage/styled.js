import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ProductWrapper = styled.div`
  padding: 2em 60px;
  display: grid;
  grid-template-columns: 1fr 340px;
  grid-gap: 1em;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 1em;
  }
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 0.8em;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductPhoto = styled.img`
  width: 170px;
  height: auto;
`;

export const ProductTitle = styled.h2`
  color: ${theme.color.primary};
  font-size: 1em;
  line-height: 1.2em;
`;

export const DescriptionWrapper = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
`;

export const TitleDescription = styled.h3`
  color: ${theme.color.primary};
  font-size: 1em;
`;

export const DescriptionText = styled.p`
  color: ${theme.color.primary};
  font-size: 16px;
  line-height: 1.5em;
`;

export const PaymentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  border: 1px solid ${theme.color.quinary};
  padding: 2.5em 2em;
  border-radius: 4px;
  align-items: center;
  justify-items: center;
`;

export const PaymentSpan = styled.span`
  color: ${theme.color.primary};
  font-size: 1em;
  font-weight: bold;
`;

export const PaymentText = styled.span`
  color: ${theme.color.primary};
  font-size: 14px;
`;

export const ButtonCar = styled.button`
  width: 200px;
  padding: 10px;
  font-size: 1em;
  background: ${theme.color.tertiary};
  color: ${theme.color.secondary};
  border: 2px solid ${theme.color.tertiary};
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: ${theme.color.secondary};
    color: ${theme.color.tertiary};
  }
`;

export const ButtonPlus = styled.button`
  width: 200px;
  padding: 10px;
  font-size: 1em;
  background: ${theme.color.tertiary};
  color: ${theme.color.secondary};
  border: 2px solid ${theme.color.tertiary};
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: ${theme.color.secondary};
    color: ${theme.color.tertiary};
  }
`;
