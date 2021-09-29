import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import reducers, { history } from './reducer';
import { sagaMiddleware } from './middleware';
import sagas from './sagas';

const createReducer = () => combineReducers({ ...reducers });

const configureStore = (preloadedState = {}) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(createReducer(), preloadedState, composedEnhancers);

  sagaMiddleware.run(sagas);

  return store;
};

export default configureStore();
