import { combineReducers } from 'redux';
import networkReducers from './networkReducers';
import applicationReducers from './applicationReducers';
import dashboardReducers from './dashboardReducers';
import authReducer from './authReducer';
const rootReducer = combineReducers({
  myNetwork: networkReducers,
  myApplications: applicationReducers,
  dashboardReducers: dashboardReducers,
  authReducer: authReducer
});

export default rootReducer;
