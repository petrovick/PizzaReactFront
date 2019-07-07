import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 10px;
  height: 100px;
  width: 250px;
  border: 1px solid #96909d;
  border-radius: 10px;
`;

export const ContainerProd = styled.div`
  width: 250px;
  padding: 5px;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

export const ProdImage = styled.img`
  height: 90px;
  widtth: 90px;
`;

export const ContainerProdDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
`;

export const ProdTypeName = styled.span`
  color: #000;
  font-size: 12px;
`;

export const ProdSizeDescription = styled.span`
  color: #666;
  font-size: 10px;
  margin-top: 5px;
`;
