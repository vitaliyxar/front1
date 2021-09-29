import React from 'react';
import { Provider } from 'react-redux';
import { render, hydrate } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './store/reducer';
import store from './store/index';
import Routes from './routes';

import './index.css';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

const renderApp = () => {
  const rootElement = document.getElementById('root');
  const renderedElement = (
    <App />
  );
  if (rootElement.hasChildNodes()) {
    hydrate(renderedElement, rootElement);
  } else {
    render(renderedElement, rootElement);
  }
};

renderApp();
