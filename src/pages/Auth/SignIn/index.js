import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import FundoIcon from '~/assets/images/fundo.jpg';
import PizzaLoginIcon from '~/assets/images/pizzalogin.png';

import Button from '~/styles/components/Button';

import { Container, BackgroundImage, SignForm } from '../styles';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: 'nomeadmin@hotmail.com',
    password: '123456',
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Previnir de redirecionar pra próxima página

    const { email, password } = this.state;
    const { signInRequest } = this.props;
    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container src={FundoIcon}>
        <BackgroundImage src={FundoIcon} />
        <SignForm onSubmit={this.handleSubmit}>
            <img src={PizzaLoginIcon} alt="Pizza Login Image" />
          <div>
            
          <input type="email" 
            name="email" 
            value={email} 
            onChange={this.handleInputChange} 
            placeholder="Seu e-mail"/>

          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Senha secreta"
          />

          <Button size="big" type="submit">
            Entrar
          </Button>
          </div>
        </SignForm>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
