import styled from 'styled-components';
import metrics from '../metrics';

const Input = styled.input`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  color: #000000;
  margin-top: 8px;
  transition: border 0.15s ease;
  ${props => metrics[props.size || 'default']}
`;
export default Input;
