import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';
import OrdersActions from '../ducks/orders';

export function* listOrders() {
  try {
    console.tron.error('listOrders');
    const { data } = yield call(api.get, 'admin/orders');
    console.tron.error('data listOrders');
    console.tron.error(data);
    // yield put(AuthActions.signInSuccess(response.data.token));
    yield put(OrdersActions.listOrdersSuccess(data));
  } catch (err) {
    console.tron.error('Catch data listOrders');
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao buscar os pedidos',
        message: 'Verifique se voce e',
      }),
    );
  }
}
