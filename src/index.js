import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = <h1>hello free react :D</h1>;

ReactDOM.render(
    <App />,
  document.getElementById('app')
);

module.hot.accept();
