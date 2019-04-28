import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/main';
import Routes from './routes';
import NetworkService from './utils/network-service';

NetworkService.setupInterceptors(store);

function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>  
    </Provider>
  );
}

export default App;
