import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import 'app/sass/all.scss';
import MockHttpService from 'app/common/services/mock-http';
import App from './app';

MockHttpService.init();

const root = document.getElementById('root');

render(<App />, root);
