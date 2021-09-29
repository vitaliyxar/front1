import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import test from './test/reducer';

export const history = createBrowserHistory();

const staticReducers = {
    router: connectRouter(history),
    test,
};

export default staticReducers;