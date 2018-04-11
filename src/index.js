import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Store from './components/Store';
import Dairy from './components/main'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dairy />, document.getElementById('root'));
registerServiceWorker();
