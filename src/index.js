import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'

import App from './App';
// In every single application we have to mount our application to root div
// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />);
