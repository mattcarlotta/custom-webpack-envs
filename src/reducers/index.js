import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import profileReducer from './profileReducer';

const reducers = {
  profile: profileReducer,
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    ...reducers,
  });
