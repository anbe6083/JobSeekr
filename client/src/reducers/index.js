import { combineReducers } from 'redux';
import networkReducers from './networkReducers';
import applicationReducers from './applicationReducers';
const rootReducer = combineReducers({
  myNetwork: networkReducers,
  myApplications: applicationReducers
});

export default rootReducer;
