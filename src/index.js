import React from 'react';
import ReactDOM from 'react-dom';

import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import App from './App';
import './style.css';

window.Alpine = Alpine;
Alpine.start();
Alpine.plugin(intersect);

ReactDOM.render(<App />, document.querySelector('#root'));
