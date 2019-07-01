import React from 'react';

import {
  Container,
  ContainerProd,
  ProdImage,
  ContainerProdDetail,
  ProdTypeName,
  ProdSizeDescription,
} from './styles';

const ProductTypeSizeItem = ({ prodTypeSize }) => (
  <Container>
    <ContainerProd>
      <ProdImage src={prodTypeSize.url} alt="Pizza" />
      <ContainerProdDetail>
        <ProdTypeName>Pizza Calabresa</ProdTypeName>
        <ProdSizeDescription>Tamanho: Média</ProdSizeDescription>
      </ContainerProdDetail>
    </ContainerProd>
  </Container>
);

export default ProductTypeSizeItem;
