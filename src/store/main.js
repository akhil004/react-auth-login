// ...
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import sagas from './rootSaga';
import reducers from './rootReducer';

const logger = createLogger({
  // ...options
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware),
);
sagaMiddleware.run(sagas);
const persistor = persistStore(store);
export {
  store,
  persistor,
};
