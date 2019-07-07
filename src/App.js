import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotronconfig';

import { Wrapper, Container, Content } from '~/styles/components';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Content>
            <Routes />
            <ReduxToastr />
          </Content>
        </Container>
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
