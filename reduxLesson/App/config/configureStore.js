import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const middleWare = [];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);
export function makeStore() {
  return createStoreWithMiddleware(reducers);
}

import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

