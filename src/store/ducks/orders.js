import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  listOrdersRequest: null,
  listOrdersSuccess: ['data'],
});

export const OrdersTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  loading: false,
  data: [],
});

/* Reducers */
export const listOrderRequestReducer = state => state.merge({ loading: true });
export const listOrderSuccessReducer = (state, { data }) => state.merge({ loading: false, data });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_ORDERS_REQUEST]: listOrderRequestReducer,
  [Types.LIST_ORDERS_SUCCESS]: listOrderSuccessReducer,
});
