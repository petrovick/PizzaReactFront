import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrdersActions from '~/store/ducks/orders';
import AuthActions from '~/store/ducks/auth';

import PizzaIcon from '~/assets/images/pizzalogin.png';
import {
  Container,
  Header,
  HeaderLeft,
  HeaderLeftImage,
  HeaderLeftText,
  HeaderRight,
  HeaderRightName,
  HeaderRightSignout,
  HeaderRightLine,
  DivIcon,
  DivIconOrange,
  IconShoppingBag,
  ContainerListTitleText,
  ContainerList,
} from './styles';

import OrderItem from '~/components/OrderItem';

class Main extends Component {
  static propTypes = {
    listOrdersRequest: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
    orders: PropTypes.shape({
      data: PropTypes.array
    })
  }

  listOrders = () => {
    const { listOrdersRequest } = this.props;
    listOrdersRequest();
  };

  handleSignoutClick = () => {
    const {signOut} = this.props;
    signOut();
  }

  componentDidMount() {
    this.listOrders();
  }

  render() {
    const { data, loading } = this.props.orders;
    const { user } = this.props.auth;
    if(loading) {
      return (
        <h1>Carregando</h1>
      )
    }
    return (
      <Container>
        <Header>
          <HeaderLeft>
            <HeaderLeftImage src={PizzaIcon} alt="Pizza" />
            <HeaderLeftText>Pizzaria Don Juan</HeaderLeftText>
          </HeaderLeft>
          <HeaderRight>
            <HeaderRightName>
              <div>{user}</div>
              <HeaderRightSignout onClick={this.handleSignoutClick}>Sair do App</HeaderRightSignout>
            </HeaderRightName>

            <HeaderRightLine />
            <DivIcon onClick={this.listOrders}>
              <IconShoppingBag />
              <DivIconOrange />
            </DivIcon>
          </HeaderRight>
        </Header>

        <ContainerList>
          <ContainerListTitleText>Últimos Pedidos</ContainerListTitleText>
          {data.map(item => (
            <OrderItem key={item.order_id} order={item} />
          ))}
        </ContainerList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
  auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({...OrdersActions, ...AuthActions}, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
