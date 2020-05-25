import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Search } from "@styled-icons/material";

export const SectionWrapper = styled.section`
  padding: 45px 60px;
  display: flex;

  @media (max-width: 952px) {
    padding: 45px 30px 0 30px;
    flex-direction: column;
  }
`;

export const SectionContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.secondary ? "center" : "none")};

  @media (max-width: 952px) {
    width: 100%;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 330px;
  height: 330px;
  display: block;

  @media (max-width: 952px) {
    width: 250px;
    height: 250px;
  }
`;

export const TitleContent = styled.h2`
  width: 68%;
  margin-top: 1.2em;
  margin-bottom: 2em;
  display: block;
  font-size: 1.5em;
  color: ${theme.color.primary};
  text-align: center;
  line-height: 1.8em;

  @media (max-width: 952px) {
    width: 100%;
    line-height: 1.4em;
  }
`;

export const Span = styled.span`
  color: ${theme.color.tertiary};
`;

export const SearchContainer = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5em;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  width: 350px;
  height: 48px;
  padding: 0 20px;
  background: ${theme.color.secondary};
  border: 1px solid ${theme.color.quinary};
  border-radius: 4px;
  font-size: 16px;
  color: ${theme.color.primary};
  text-align: left;
  transition: all 0.3s;
  cursor: pointer;

  @media (max-width: 952px) {
    width: 100%;
  }
`;

export const ButtonSecondary = styled.button`
  width: 100px;
  height: 48px;
  background: ${theme.color.tertiary};
  border: 1px solid ${theme.color.tertiary};
  border-radius: 4px;
  font-size: 16px;
  color: ${theme.color.secondary};
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const SpanSecondary = styled.span`
  margin-right: 0.5em;
  color: ${theme.color.primary};
`;

export const SearchIcon = styled(Search)`
  width: 28px;
  height: 28px;
  color: ${theme.color.primary};
`;

export const Links = styled.a`
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: 14px;
  text-align: center;
  color: ${theme.color.primary};
  transition: all 0.3s;

  &:hover {
    font-weight: bold;
  }
`;
