import styled from 'styled-components';
import metrics from '~/styles/metrics';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 600px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  margin: 10px 0 0 0;
  background-color: #fff;
  border-radius: 10px;
`;

export const OrderDetail = styled.div`
  margin-left: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const OrderDetailName = styled.span`
  color: #000;
`;

export const OrderDetailTime = styled.span`
  margin-top: 5px;
  color: #96909d;
  font-weight: bold;
  font-size: 10px;
`;

export const OrderDetailPrice = styled.span`
  color: #000;
  margin-top: 5px;
  font-weight: bold;
  font-size: 16px;
`;

export const OrderDetailLine = styled.hr`
  color: #333;
  width: 100%;
`;

export const OrderDetailProds = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
`;

export const OrderDetailObs = styled.span`
  color: #96909d;
  font-size: 16px;
  margin-bottom: 10px;
`;
