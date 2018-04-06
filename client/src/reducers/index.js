import { combineReducers } from 'redux';
import myNetWorkReducer from './reducers';

const rootReducer = combineReducers({
  myNetwork: myNetWorkReducer
});

export default rootReducer;
