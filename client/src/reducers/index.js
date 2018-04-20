import { combineReducers } from 'redux';
import networkReducers from './networkReducers';
import applicationReducers from './applicationReducers';
import dashboardReducers from './dashboardReducers';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  myNetwork: networkReducers,
  myApplications: applicationReducers,
  dashboardReducers: dashboardReducers,
  authReducer: authReducer,
  form: formReducer
});

export default rootReducer;
