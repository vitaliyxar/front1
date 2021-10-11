import { ActionType, createReducer } from 'typesafe-actions';

import * as actions from './actions';

import { changeTestValue } from './actions';

type Actions = ActionType<typeof actions>;

export type TestState = {
  test: string;
};

export const initialState = {
  test: 'Hello',
};

export const testReducer = createReducer<TestState, Actions>(initialState).handleAction(
  changeTestValue,
  (state, action) => ({
    ...state,
    test: action.payload,
  })
);
