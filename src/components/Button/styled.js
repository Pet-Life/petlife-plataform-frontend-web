import styled from 'styled-components';

export const ButtonStyle = styled.button.attrs({
  className: 'buttonMobile'
})`
  width: 150px;
  height: 48px;
  background: ${props => props.primary ? "#219653" : "#FFF"};
  color: ${props => props.primary ? "#FFF" : "#219653"};
  font-size: 1.125em;
  border: 2px solid #219653;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${props => props.primary ? "#FFF" : "#219653"};
    color: ${props => props.primary ? "#219653" : "#FFF"};    
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
