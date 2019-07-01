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
  data: [
    {
      id: 1,
      productTypeSizes: [
        { description: 'Médio', url: 'https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg' },
        { description: '2L', url: 'https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg' },
        { description: 'Médio', url: 'https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg' },
        { description: '2L', url: 'https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg' },
        { description: 'Médio', url: 'https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg' },
        { description: '2L', url: 'https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg' },
      ],
    },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ],
});

/* Reducers */
export const listOrderSuccessReducer = (state, { token }) => state.merge({ signedIn: true, token });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_ORDERS_REQUEST]: listOrderSuccessReducer,
});
