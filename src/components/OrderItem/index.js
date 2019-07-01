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

import ProductTypeSizeItem from '~/components/ProductTypeSizeItem'

const OrderItem = ({ order }) => (
  <Container>
    <OrderDetail>
      <OrderDetailName>
        Pedido
        {' '}
        <strong>#3</strong>
        {' '}
- Diego Schell Fernandes
      </OrderDetailName>
      <OrderDetailTime>há 2 minutos</OrderDetailTime>
      <OrderDetailPrice>R$ 42,00</OrderDetailPrice>
      <OrderDetailLine />
      <OrderDetailProds>
        {order && order.productTypeSizes && order.productTypeSizes.map(item => (
          <ProductTypeSizeItem prodTypeSize={item}  />
        ))}
      </OrderDetailProds>
      <OrderDetailLine />
      <OrderDetailObs>
        <strong>Observações:</strong>
Favor remover o tomate da pizza
      </OrderDetailObs>
    </OrderDetail>
  </Container>
);

export default OrderItem;
