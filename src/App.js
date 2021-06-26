import React from 'react';
import { hot } from 'react-hot-loader';
// import cx from 'classnames';
import Button from 'Components/Button';
import './app.scss';

const App = () => (
  <div className="app">
    React Starter
    <div className="sassyDiv bar">Get Sassy!</div>
    <Button />
  </div>
);

export default hot(module)(App);
