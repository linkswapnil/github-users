import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import configureStore from 'store/configure-store';
import { Routes } from './routes';
import 'index.scss';
import 'normalize.css';

render(
<Provider store={configureStore()}>
  <Router>
    <Routes/>
  </Router>
</Provider>,
  document.getElementById('root')
)
