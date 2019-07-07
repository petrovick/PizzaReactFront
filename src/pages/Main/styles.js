// import { Fragment } from 'react';
import styled from 'styled-components';

import { FaShoppingBag } from 'react-icons/fa';

// import colors from '~/styles/colors';
// import metrics from '~/styles/metrics';

export const Container = styled.div`
  flex: 1;
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
`;

export const Header = styled.div`
  background-color: #092235;
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  color: #fff;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderLeftImage = styled.img`
  height: 30px;
  width: 30px;
`;

export const HeaderLeftText = styled.p`
  margin-left: 10px;
  font-weight: bold;
  color: #fff;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const HeaderRightName = styled.div`
  flex-direction: row;
`;

export const HeaderRightSignout = styled.a`
  color: #96909d;

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

export const HeaderRightLine = styled.div`
  margin-left: 10px;
  width: 1px;
  background-color: #fff;
  height: 30px;
`;

export const DivIcon = styled.div`
  position: relative;
  margin-left: 10px;
  background-color: #d82545;
  color: #fff;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const DivIconOrange = styled.div`
  display: flex;
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: #f5c62a;
  justify-content: end;
  align-self: flex-start;
  position: absolute;
  right: 0;
`;

export const IconShoppingBag = styled(FaShoppingBag)`
  color: #fff;
  size: 2em;
`;

export const ContainerListTitleText = styled.h3`
  font-weight: bold;
  color: #000;
  width: 600px;
`;

export const ContainerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  autoflow: scroll;
`;
