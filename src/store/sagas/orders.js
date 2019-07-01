import { call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';
import AuthActions from '../ducks/auth';

export function* listOrders(data) {
  try {
    // const response = yield call(api.post, 'sessions', { email, password });
    localStorage.setItem('@gofinal:token', 'tokenComesHereLater');

    // yield put(AuthActions.signInSuccess(response.data.token));
    yield put(AuthActions.signInSuccess('tokenComesHereLater'));
    yield put(push('/'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/senha',
      }),
    );
  }
}