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
  border-bottom: 1px solid ${theme.colorQuinary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    padding: 0 30px;
  }
`;

export const HeaderContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 42px;
  margin-right: 1em;
  margin-left: 1em;
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

export const ProfileAvatar = styled.img`
  width: 35px;
  height: 35px;
  background: ${theme.colorPrimary};
  border: 1px solid ${theme.colorPrimary};
  border-radius: 50%;
`;
