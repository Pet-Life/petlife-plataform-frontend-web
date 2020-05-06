import styled from "styled-components";
import { theme } from "../../styles/theme";
import {
  LocationOn,
  ArrowDropDown,
  ShoppingBasket,
  Notifications,
  Store,
} from "@styled-icons/material";

export const HeaderWrapper = styled.header`
  height: 80px;
  padding: 0 60px;
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: 90px 350px auto 1fr 1fr;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  grid-gap: 2em;

  @media (max-width: 767px) {
    padding: 0 30px;
  }
`;

export const FormWrapper = styled.div`
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
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const AddressTitle = styled.p`
  font-size: 1em;
  color: ${theme.colorPrimary};
`;

export const LocationIcon = styled(LocationOn)`
  width: 18px;
  height: 18px;
  color: ${theme.colorPrimary};
`;

export const ArrowDropIcon = styled(ArrowDropDown)`
  width: 28px;
  height: 28px;
  color: ${theme.colorPrimary};
`;

export const Span = styled.span`
  font-size: 14px;
  color: ${theme.colorPrimary};
  font-weight: bold;
`;

export const IconsWrapper = styled.div`
  width: 120px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationIcon = styled(Notifications)`
  width: 25px;
  height: 25px;
  color: ${theme.colorPrimary};
`;

export const BasketIcon = styled(ShoppingBasket)`
  width: 25px;
  height: 25px;
  color: ${theme.colorPrimary};
`;

export const StoreIcon = styled(Store)`
  width: 25px;
  height: 25px;
  color: ${theme.colorPrimary};
`;

export const ProfileWrapper = styled.div`
  width: 120px;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const ProfileAvatar = styled.img`
  width: 35px;
  height: 35px;
  background: ${theme.colorPrimary};
  border: 1px solid ${theme.colorPrimary};
  border-radius: 50%;
`;
