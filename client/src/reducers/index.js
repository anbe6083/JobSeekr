import { combineReducers } from 'redux';
import networkReducers from './networkReducers';

const rootReducer = combineReducers({
  myNetwork: networkReducers
});

export default rootReducer;
