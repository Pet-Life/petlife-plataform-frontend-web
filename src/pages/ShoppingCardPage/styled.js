import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
  min-height: 200px;
  padding: 4em 60px;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-gap: 0.5em;
`;

export const Text = styled.p`
  color: ${theme.color.primary};
  font-size: 1.5em;
  line-height: 1.3em;
  text-align: center;
`;

export const ProductWrapper = styled.div`
  width: 100%;
  height: 145px;
  max-height: 145px;
  min-height: 145px;
  border: 1px solid ${theme.color.quinary};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr;
`;

export const ProductContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20% 40% 20% 20%;
  grid-gap: 0.5em;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  padding: 1em;
`;

export const ProductImage = styled.img`
  width: 60px;
  height: auto;
`;

export const TitleWrapper = styled.div`
  padding: 1em;
`;

export const ProductTitle = styled.h3`
  margin-bottom: 0.6em;
  color: ${theme.color.primary};
  font-size: 1em;
  line-height: 1.3em;
`;

export const Span = styled.span`
  color: ${theme.color.primary};
  font-size: 17px;
`;

export const QuantifyWrapper = styled.div`
  padding: 1em;
`;

export const ButtonWrapper = styled.div`
  padding: 1em;
`;

export const ButtonRemove = styled.button`
  width: 40px;
  height: 36px;
  margin-left: 0.5em;
  color: ${theme.color.secondary};
  font-size: 1em;
  background: ${theme.color.tertiary};
  border: 1px solid ${theme.color.tertiary};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${theme.color.secondary};
    color: ${theme.color.tertiary};
  }
`;

export const TotalWrapper = styled.div`
  width: 100%;
  height: 220px;
  max-height: 220px;
  min-height: 220px;
  padding: 1em;
  border: 1px solid ${theme.color.quinary};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.3em;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 38px;
  background: ${theme.color.secondary};
  border: 1px solid ${theme.color.tertiary};
  border-radius: 4px;
  font-size: 1em;
  color: ${theme.color.tertiary};
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background: ${theme.color.tertiary};
    color: ${theme.color.secondary};
  }
`;
