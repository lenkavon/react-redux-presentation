import React from 'react';
import ReactDOM from 'react-dom';
import Redux from './redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Redux />, document.getElementById('root'));
registerServiceWorker();
