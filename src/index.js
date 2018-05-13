import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing.jsx'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
