import { ApplicationState } from '../reducer';

const getTestValue = (state: ApplicationState) => state.test.test;

const selectors = {
  getTestValue,
};

export default selectors;
