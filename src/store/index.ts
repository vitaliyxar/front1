import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { getApplicationReducers } from './reducer';
import { sagaMiddleware } from './middleware';
import sagas from './sagas';

export const history = createBrowserHistory();

const configureStore = (preloadedState = {}) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(getApplicationReducers(history), preloadedState, composedEnhancers);

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore();
