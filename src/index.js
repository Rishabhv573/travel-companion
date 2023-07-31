import React from 'react';
import { createRoot } from 'react-dom/client'

import App from "./App";
// In every single application we have to mount our application to root div
createRoot(document.getElementById('root')).render(<App />)
// ReactDOM.render(<App />, document.getElementById('root'));
