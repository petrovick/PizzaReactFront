import React from 'react';

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
      <OrderDetailPrice>
        {'R$' + order.order_price}
      </OrderDetailPrice>
      <OrderDetailLine />
      <OrderDetailProds>
        {order
          && order.productDetails
          && order.productDetails.map(item => <ProductTypeSizeItem prodTypeSize={item} />)}
      </OrderDetailProds>
      <OrderDetailLine />
      <OrderDetailObs>
        <strong>Observações:</strong>
        {order.order_obs}
      </OrderDetailObs>
    </OrderDetail>
  </Container>
);

export default OrderItem;
