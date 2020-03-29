import styled from 'styled-components';
import { theme } from '../../styles/theme'

export const Section = styled.section`
   padding: 45px 60px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;

   @media (max-width: 952px) {
     padding: 45px 30px;
   }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SectionContent = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 952px) {
    width: 100%;
    margin-bottom: 1.8em;
  }
`;

export const Title = styled.h2`
  margin-bottom: 1.5em;
  font-size: 1.6em;
  color: ${theme.colorPrimary};
  text-align: center;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: 1.5em;
`;

export const TitleCategory = styled.h3`
  font-size: 1.1em;
  color: ${theme.colorPrimary};
  transition: all 0.3s;

  &:hover {
    color: ${theme.colorTertiary};
  }
`;
