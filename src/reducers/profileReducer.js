import * as types from '../types';

const initialState = {
  currentUser: {},
  isLoading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_SIGNEDIN_USER:
      return {
        ...state,
        currentUser: { ...payload },
        isLoading: false,
      };
    default:
      return state;
  }
};
