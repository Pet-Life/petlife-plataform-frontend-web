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
  border-bottom: 1px solid ${theme.colorQuinary};
  display: grid;
  grid-template-columns: 90px 1fr 15em 15em 10em;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-items: center;
  grid-gap: 0.8em;

  @media (max-width: 767px) {
    padding: 0 30px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 42px;
  background: ${theme.colorSixth};
  border: 1px solid ${theme.colorQuinary};
  border-radius: 4px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 20px;
  background: ${theme.colorSixth};
  border: 1px solid ${theme.colorQuinary};
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
  color: ${theme.colorPrimary};
  text-transform: uppercase;
`;

export const LocationIcon = styled(LocationOn)`
  width: 20px;
  height: 20px;
  color: ${theme.colorPrimary};
`;

export const ArrowDropIcon = styled(ArrowDropDown)`
  width: 28px;
  height: 28px;
  color: ${theme.colorPrimary};
`;

export const Span = styled.span`
  font-size: 1em;
  color: ${theme.colorPrimary};
`;

export const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.8em;
  justify-content: center;
  justify-items: center;
`;

export const BasketIcon = styled(ShoppingCart)`
  width: 28px;
  height: 28px;
  margin-right: 0.2em;
  color: ${theme.colorPrimary};
`;

export const StoreIcon = styled(Store)`
  width: 28px;
  height: 28px;
  margin-right: 0.2em;
  color: ${theme.colorPrimary};
`;

export const ButtonLogin = styled.a`
  padding: 10px 40px;
  font-size: 1.125em;
  color: ${theme.colorTertiary};
  border: 2px solid #219653;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    background: ${theme.colorTertiary};
    color: ${theme.colorSecondary};
  }
`;

export const ProfileWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-items: center;
`;

export const ProfileAvatar = styled.img`
  width: 45px;
  height: 45px;
  background: ${theme.colorPrimary};
  border: 1px solid ${theme.colorPrimary};
  border-radius: 50%;
`;

export const ProfileDropdown = styled.div`
  position: absolute;
  top: 3.8em;
  width: 120px;
  max-width: 120px;
  min-height: 200px;
  padding: 2em;
  background: ${theme.colorSecondary};
  border: 1px solid ${theme.colorQuinary};
  display: ${(props) => (props.openProfile ? "grid" : "none")};
  grid-template-columns: 1fr;
  grid-gap: 0.5em;
`;

export const ProfileIcon = styled(PersonOutline)`
  width: 28px;
  height: 28px;
  color: ${theme.colorPrimary};
`;

export const NotificationIcon = styled(CardTravel)`
  width: 28px;
  height: 28px;
  color: ${theme.colorPrimary};
`;

export const CloseIcon = styled(PowerSettingsNew)`
  width: 28px;
  height: 28px;
  color: ${theme.colorPrimary};
`;
