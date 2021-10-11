import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { testReducer } from './test/reducer';

import { TestState } from './test/reducer';

export type ApplicationState = Readonly<{
  router: RouterState;
  test: TestState;
}>;

export const getApplicationReducers = (history: History) =>
  combineReducers<ApplicationState>({
    router: connectRouter(history),
    test: testReducer,
  });
