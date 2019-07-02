import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  OrderDetail,
  OrderDetailName,
  OrderDetailTime,
  OrderDetailPrice,
  OrderDetailLine,
  OrderDetailProds,
  OrderDetailObs,
} from './styles';

import ProductTypeSizeItem from '~/components/ProductTypeSizeItem';

const OrderItem = ({ order }) => (
  <Container>
    <OrderDetail>
      <OrderDetailName>
        {'Pedido '}
        <strong>{`#${order.order_id}`}</strong>
        {` - ${order.user_name}`}
      </OrderDetailName>
      <OrderDetailTime>{order.order_date}</OrderDetailTime>
      <OrderDetailPrice>{`R$${order.order_price}`}</OrderDetailPrice>
      <OrderDetailLine />
      <OrderDetailProds>
        {order
          && order.productDetails
          && order.productDetails.map(item => (
            <ProductTypeSizeItem key={item.product_type_sizes_id} prodTypeSize={item} />
          ))}
      </OrderDetailProds>
      <OrderDetailLine />
      <OrderDetailObs>
        <strong>Observações:</strong>
        {order.order_obs}
      </OrderDetailObs>
    </OrderDetail>
  </Container>
);

OrderItem.propTypes = {
  order: PropTypes.shape({
    order_id: PropTypes.number,
    user_name: PropTypes.string,
    order_date: PropTypes.string,
    order_price: PropTypes.string,
    order_obs: PropTypes.string,
    productDetails: PropTypes.array,
  }),
};

export default OrderItem;
