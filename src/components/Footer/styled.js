import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, } from '@styled-icons/fa-brands';

import { Heart } from '@styled-icons/fa-solid';

export const FooterWrapper = styled.footer`
  padding: 35px 60px;
  background: #F5F5F5;
  display: flex;
  flex-wrap: wrap;    
  justify-content: space-between;

  @media (max-width: 920px) {
    padding: 35px 30px;
    flex-direction: column;
  }
`;

export const FooterContent = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;

  @media (max-width: 952px) {
    width: 100%;
    margin-bottom: 1.5em;
  }
`;

export const Title = styled.h3`
  margin-bottom: 1.5em;
  font-size: 1em;
  color: ${theme.colorPrimary};
`;

export const Links = styled.a`
  margin-right: 1.2em;
  margin-bottom: 0.4em;
  font-size: 14px;
  color: ${theme.colorPrimary};
  line-height: 1.9em;
  transition: all 0.3s;

  &:hover {
    color: ${theme.colorTertiary};
  }
`;

export const Text = styled.p`
  margin-top: 1.5em;
  font-size: 14px;
  color: ${theme.colorPrimary};
  line-height: 1.9em;
`;

export const SocialWrapper = styled.div`
  width: 100%;
  margin-top: 1.5em;
  display: flex;
`;

export const FacebookIcon = styled(Facebook)`
  width: 28px;
  height: 28px;
  color: ${theme.colorPrimary};
  transition: all 0.3s;

  &:hover {
    color: ${theme.colorTertiary};
  }
`;

export const InstagramIcon = styled(Instagram)`
  width: 28px;
  height: 28px;
  color: ${theme.colorPrimary};
  transition: all 0.3s;

  &:hover {
    color: ${theme.colorTertiary};
  }
`;

export const TwitterIcon = styled(Twitter)`
  width: 28px;
  height: 28px;
  color: ${theme.colorPrimary};
  transition: all 0.3s;

  &:hover {
    color: ${theme.colorTertiary};
  }
`;

export const YoutubeIcon = styled(Youtube)`
  width: 28px;
  height: 28px;
  color: ${theme.colorPrimary};
  transition: all 0.3s;

  &:hover {
    color: ${theme.colorTertiary};
  }
`;

export const HeartIcon = styled(Heart)`
  width: 15px;
  height: 15px;
  color: #cc0000;
`;

export const Copyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 952px) {
    flex-direction: column;
    text-align: center;
  }
`;
