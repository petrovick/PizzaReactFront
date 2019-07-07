import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['data'],
  signInError: null,
  signOut: null,
  signUpRequest: ['name', 'email', 'password'],
  getPermissionsSuccess: ['roles', 'permissions'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  loading: false,
  signedIn: !!localStorage.getItem('@Omni:token'),
  token: localStorage.getItem('@Omni:token') || null,
  user: localStorage.getItem('@Omni:user') || null,
  roles: [],
  permissions: [],
});

/* Reducers */
export const signInRequestReducer = state => state.merge({ loading: true });
export const signInErrorReducer = state => state.merge({ loading: false });
export const successReducer = (state, { data }) => state.merge({
  signedIn: true,
  loading: false,
  token: data.token,
  user: data.user.name,
});
export const logoutReducer = state => state.merge({ signedIn: false, loading: false, token: null });

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_ERROR]: signInErrorReducer,
  [Types.SIGN_IN_REQUEST]: signInRequestReducer,
  [Types.SIGN_IN_SUCCESS]: successReducer,
  [Types.SIGN_OUT]: logoutReducer,
});
