import styled from 'styled-components';
import { PRIMARY, SECONDARY, TERTIARY } from '../../constants/colors';

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  padding: 16px 24px;
  min-width: 200px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  border: ${({ type }) =>
    type === 'TERTIARY'
      ? '1px solid ' + colorMap[type].BUTTON.DEFAULT.BORDER
      : 'none'};

  color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.COLOR};
  background-color: ${({ type }) => colorMap[type].BUTTON.DEFAULT.BACKGROUND};

  &:hover {
    color: ${({ type }) => colorMap[type].BUTTON.HOVER.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.HOVER.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? '1px solid ' + colorMap[type].BUTTON.HOVER.BORDER
        : 'none'};
  }
  &:active {
    color: ${({ type }) => colorMap[type].BUTTON.PRESSED.COLOR};
    background-color: ${({ type }) => colorMap[type].BUTTON.PRESSED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? '1px solid ' + colorMap[type].BUTTON.PRESSED.BORDER
        : 'none'};
  }
  &:disabled {
    color: ${({ type }) => colorMap[type].BUTTON.DISABLED.COLOR};
    background-color: ${({ type }) =>
      colorMap[type].BUTTON.DISABLED.BACKGROUND};
    border: ${({ type }) =>
      type === 'TERTIARY'
        ? '1px solid ' + colorMap[type].BUTTON.DISABLED.BORDER
        : 'none'};
    cursor: not-allowed;
  }
`;

export default Button;
