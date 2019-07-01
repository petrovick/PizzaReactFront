import { all, takeLatest } from 'redux-saga/effects';
import {
  signIn, // , signOut, signUp, getPermissions,
} from './auth';
import { listOrders } from './orders';

import { AuthTypes } from '../ducks/auth';
import { OrdersTypes } from '../ducks/orders';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(OrdersTypes.LIST_ORDERS_REQUEST, listOrders),
  ]);
}
