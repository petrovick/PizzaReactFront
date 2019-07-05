import styled, { css } from 'styled-components';
import colors from '../colors';
import metrics from '../metrics';

const Button = styled.button.attrs({
  type: 'button',
})`
  border-radius: 10px;
  transition: background-color 0.15s ease;
  background: #7289da;
  border: 0;
  color: #fff;
  font-size: 12px;
  padding: 0 10px;
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

  ${props => props.loading === 'loading'
    && css`
      pointer-events: none;
      background-color: #333;
    `}

`;
export default Button;
