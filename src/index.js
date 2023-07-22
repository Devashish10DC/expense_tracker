import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SpeechProvider} from '@speechly/react-client';
import './index.css';

ReactDOM.render(
  
    <SpeechProvider appId="27a407da-8417-40ea-b666-87b6089028e6" language="en-US">
    <App />
    </SpeechProvider>,
  document.getElementById('root')
);


