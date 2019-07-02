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
      <ProdImage src={prodTypeSize.product_type_url} alt={prodTypeSize.product_name} />
      <ContainerProdDetail>
        <ProdTypeName>{prodTypeSize.product_type_name}</ProdTypeName>
        <ProdSizeDescription>{prodTypeSize.product_sizes_description}</ProdSizeDescription>
      </ContainerProdDetail>
    </ContainerProd>
  </Container>
);

export default ProductTypeSizeItem;
