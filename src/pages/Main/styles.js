import { Fragment } from 'react';
import styled from 'styled-components';
import colors from '~/styles/colors';
import metrics from '~/styles/metrics';

export const Container = styled.div`
  flex: 1;
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
`;

export const Header = styled.div`
  background-color: #092235;
  displa: flex;
  height: 70px;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const HeaderLeft = styled(Fragment)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderRight = styled(Fragment)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderRightName = styled.div`
  flex-direction: row;
`;

export const HeaderRightLine = styled.div`
  width: 2px;
  background-color: #fff;
  height: 50px;
`;

export const ContainerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  autoflow: scroll;
`;
