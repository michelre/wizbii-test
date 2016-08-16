import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';

import App from './components/App';
import './styles/style.css';

ReactDOM.render(
    <App username='decouverte@wizbii.com' password='decouvertewizbii' />,
    document.getElementById('app')
);
