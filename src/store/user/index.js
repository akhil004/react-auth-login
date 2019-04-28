import {
    INIT, SUCCESS, LOADING, ERROR,
  } from '../../utils/constants';
  import {
    GET_USER, GET_USER_SUCCESS, GET_USER_ERROR, LOGOUT_USER,
  } from './constants';
  
  const initialState = {
    phase: INIT,
    user: null,
    error: null,
  };
  
  /**
   * User Reducer
   * @param {Object} state
   * @param {Object} action
   */
  export function userStore(state = initialState, action) {
    switch (action.type) {
      case GET_USER:
        return {
          ...state,
          phase: LOADING,
        };
      case GET_USER_SUCCESS:
        return {
          ...state,
          phase: SUCCESS,
          user: action.data,
          error: null,
        };
      case GET_USER_ERROR:
        return { ...state, phase: ERROR, error: action.error };
      case LOGOUT_USER:
        return initialState;
      default:
        return state;
    }
  }
  
  /**
   * Get User Info for Login
   * @param {String} email
   */
  export const loginUser = payload => ({
    type: GET_USER,
    payload,
  });
  