import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderWrapper = styled.header`
  height: 70px;
  padding: 5px 60px;
  border-bottom: 1px solid ${theme.color.quinary};
  display: grid;
  grid-template-columns: 80% 1fr;
  align-items: center;

  @media (max-width: 767px) {
    padding: 0.3em 15px;
  }
`;

export const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  align-items: center;
  justify-items: end;
`;

export const Button = styled.button`
  width: 150px;
  height: 42px;
  background: ${theme.color.secondary};
  border: 2px solid ${theme.color.tertiary};
  border-radius: 4px;
  color: ${theme.color.tertiary};
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
`;

export const AvatarWraper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  background: ${theme.color.secondary};
  border: 1px solid ${theme.color.primary};
  border-radius: 50%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  cursor: pointer;
`;

export const AvatarProfile = styled.img`
  width: 50px;
  height: auto;
`;

export const DropdownProfile = styled.div`
  display: ${(props) => (props.isOpenProfile ? "grid" : "none")};
  position: absolute;
  top: 4.4em;
  width: 100px;
  max-width: 100px;
  min-height: 200px;
  padding: 2em;
  background: ${theme.color.secondary};
  border: 1px solid ${theme.color.quinary};
  grid-template-columns: 1fr;
  grid-gap: 0.5em;
`;
