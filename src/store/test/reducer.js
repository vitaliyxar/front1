import actions from '../actionTypes';
import reducerGenerator from '../helpers/reducerGenerator';

export const initialState = {
  test: 'Hello',
};

const HANDLERS = {
  [actions.changeTestValue]: (state, test) => ({
    ...state,
    test,
  }),
};

export default reducerGenerator(initialState, HANDLERS);
