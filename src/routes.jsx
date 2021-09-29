import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import App from './components/App';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <App />
        </Switch>
    </BrowserRouter>
);

export default Routes;
