import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import { FaSpinner } from 'react-icons/fa';

import FundoIcon from '~/assets/images/fundo.jpg';
import PizzaLoginIcon from '~/assets/images/pizzalogin.png';

import Button from '~/styles/components/Button';
import Input from '~/styles/components/Input';

import { Container, BackgroundImage, SignForm } from './styles';

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
    const { loading } = this.props.auth;
    return (
      <Container>
        <BackgroundImage src={FundoIcon} />
        <SignForm onSubmit={this.handleSubmit}>
            <img src={PizzaLoginIcon} alt="Pizza Login" />
          <div>

          <Input
            size="default"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Seu e-mail"/>

          <Input
            size="default"
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Senha secreta"
          />

          <Button size="big" color="red" type="submit" loading={loading ? 'loading' : ''} >
            {loading ? 'Carregando...' : 'Entrar'}
            
          </Button>
          </div>
        </SignForm>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
