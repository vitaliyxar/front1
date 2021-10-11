import { createAction } from 'typesafe-actions';
import { types } from './actionTypes';

export const changeTestValue = createAction(types.CHANGE_TEST_VALUE)<string>();
