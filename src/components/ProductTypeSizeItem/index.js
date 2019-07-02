import React from 'react';
import PropTypes from 'prop-types';

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
ProductTypeSizeItem.propTypes = {
  prodTypeSize: PropTypes.shape({
    product_type_url: PropTypes.string,
    product_name: PropTypes.string,
    product_type_name: PropTypes.string,
    product_sizes_description: PropTypes.string,
  }),
};
export default ProductTypeSizeItem;
