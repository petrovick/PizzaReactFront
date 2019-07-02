import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrdersActions from '~/store/ducks/orders';

import PizzaIcon from '~/assets/images/pizzalogin.png';
import {
  Container,
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderRightName,
  ContainerList,
} from './styles';

import OrderItem from '~/components/OrderItem';

class Main extends Component {
  listOrders = () => {
    const { listOrdersRequest } = this.props;
    listOrdersRequest();
  };

  componentDidMount() {
    this.listOrders();
  }

  render() {
    const { data } = this.props.orders;
    return (
      <Container>
        <Header>
          <HeaderLeft>
            <img src={PizzaIcon} alt="Pizza" />
            <div>Pizzaria Don Juan</div>
          </HeaderLeft>
          <HeaderRight>
            <HeaderRightName />
          </HeaderRight>
        </Header>
        <ContainerList>
          {data.map(item => (
            <OrderItem order={item} />
          ))}

          {data.map(item => (
            <OrderItem order={item} />
          ))}
        </ContainerList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
