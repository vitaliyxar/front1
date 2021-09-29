import { createActions } from 'redux-actions';
import actionsTest from './test/actionTypes';

const types = [
  ...actionsTest,
];

export default createActions(...types);
