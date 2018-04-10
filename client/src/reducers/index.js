import { combineReducers } from 'redux';
import networkReducers from './networkReducers';
import applicationReducers from './applicationReducers';
import dashboardReducers from './dashboardReducers';
const rootReducer = combineReducers({
  myNetwork: networkReducers,
  myApplications: applicationReducers,
  dashboardReducers: dashboardReducers
});

export default rootReducer;
