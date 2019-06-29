import styled, { css } from 'styled-components';
import colors from '../colors';
import metrics from '../metrics';

const Button = styled.button.attrs({
  type: 'button',
})`
  border-radius: 3px;
  transition: background-color 0.15s ease;
  background: #7289da;
  border: 0;
  color: #fff;
  font-size: 12px;
  passding: 0 10px;
  text-transform: uppercase;
  font-weight: 700;

  ${props => metrics[props.size || 'default']}
  ${props => colors[props.color || 'default']}

  ${props => props.filled === false
    && css`
      background: none;

      &:hover {
        background: none;
        opacity: 0.6;
      }
    `}

`;
export default Button;
