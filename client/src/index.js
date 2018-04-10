import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//react-redux boilerplate
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import registerServiceWorker from './registerServiceWorker';

//setup to persist redux store data
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer);
let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
