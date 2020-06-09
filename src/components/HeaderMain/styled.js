import styled from "styled-components";
import { theme } from "../../styles/theme";
import {
  LocationOn,
  ArrowDropDown,
  ShoppingCart,
  Store,
  PersonOutline,
  CardTravel,
  PowerSettingsNew,
} from "@styled-icons/material";

export const HeaderWrapper = styled.header`
  height: 80px;
  padding: 0.3em 60px;
  border-bottom: 1px solid ${theme.color.quinary};
  display: grid;
  grid-template-columns: 90px 1fr 15em 15em 10em;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-items: center;
  grid-gap: 0.8em;

  @media (max-width: 767px) {
    padding: 0.3em 15px;
    grid-template-columns: 80px 12em 5em;
    grid-gap: 0.3em;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 42px;
  background: ${theme.color.sixth};
  border: 1px solid ${theme.color.quinary};
  border-radius: 4px;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 20px;
  background: ${theme.color.sixth};
  border: 1px solid ${theme.color.quinary};
  border-radius: 4px;
`;

export const AddressWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.1em;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1em;
`;

export const AddressTitle = styled.p`
  font-size: 15px;
  color: ${theme.color.primary};
  text-transform: uppercase;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const LocationIcon = styled(LocationOn)`
  width: 20px;
  height: 20px;
  color: ${theme.color.primary};

  @media (max-width: 767px) {
    width: 18px;
    height: 18px;
  }
`;

export const ArrowDropIcon = styled(ArrowDropDown)`
  width: 28px;
  height: 28px;
  color: ${theme.color.primary};

  @media (max-width: 767px) {
    width: 22px;
    height: 22px;
  }
`;

export const Span = styled.span`
  font-size: 1em;
  color: ${theme.color.primary};

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.8em;
  justify-content: center;
  justify-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const BasketIcon = styled(ShoppingCart)`
  width: 28px;
  height: 28px;
  margin-right: 0.2em;
  color: ${theme.color.primary};
`;

export const StoreIcon = styled(Store)`
  width: 28px;
  height: 28px;
  margin-right: 0.2em;
  color: ${theme.color.primary};
`;

export const ButtonLogin = styled.a`
  padding: 10px 40px;
  font-size: 1.125em;
  color: ${theme.color.tertiary};
  border: 2px solid ${theme.color.tertiary};
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    background: ${theme.color.tertiary};
    color: ${theme.color.secondary};
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ProfileAvatar = styled.img`
  width: 45px;
  height: 45px;
  border: 1px solid ${theme.color.primary};
  border-radius: 50%;
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 3.8em;
  width: 120px;
  max-width: 120px;
  min-height: 200px;
  padding: 2em;
  background: ${theme.color.secondary};
  border: 1px solid ${theme.color.quinary};
  display: ${(props) => (props.openProfile ? "grid" : "none")};
  grid-template-columns: 1fr;
  grid-gap: 0.5em;
`;

export const ProfileIcon = styled(PersonOutline)`
  width: 28px;
  height: 28px;
  color: ${theme.color.primary};
`;

export const NotificationIcon = styled(CardTravel)`
  width: 28px;
  height: 28px;
  color: ${theme.color.primary};
`;

export const CloseIcon = styled(PowerSettingsNew)`
  width: 28px;
  height: 28px;
  color: ${theme.color.primary};
`;
