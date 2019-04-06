import api from '../utils/axiosConfig';
import * as types from '../types';

export const getCurrentProfile = id => async dispatch => {
  try {
    const res = await api.get(`/users/${id}`);
    setTimeout(() => {
      dispatch({
        type: types.SET_SIGNEDIN_USER,
        payload: res.data,
      });
    }, 1500);
  } catch (e) {
    console.error(e.toString()); // eslint-disable-line no-console
  }
};
