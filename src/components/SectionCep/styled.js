import styled from "styled-components";
import { theme } from "../../styles/theme";

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
  align-items: ${props => (props.secondary ? "center" : "none")};

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
  color: ${theme.colorPrimary};
  text-align: center;
  line-height: 1.8em;

  @media (max-width: 952px) {
    width: 100%;
    line-height: 1.4em;
  }
`;

export const Span = styled.span`
  color: #219653;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 952px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 341px;
  height: 42px;
  margin-right: 1em;
  padding: 0 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: ${theme.colorPrimary};

  @media (max-width: 952px) {
    width: 100%;
    margin-right: 0;
    padding: 0;
    margin-bottom: 2em;
    text-align: center;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 42px;
  background: #219653;
  border: 2px solid #219653;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s;
  cursor: pointer;

  @media (max-width: 952px) {
    width: 100%;
  }
`;

export const Links = styled.a`
  margin-top: 2em;
  margin-bottom: 2em;
  font-size: 14px;
  text-align: center;
  color: #3c3b3b;
  transition: all 0.3s;

  &:hover {
    font-weight: bold;
  }
`;
