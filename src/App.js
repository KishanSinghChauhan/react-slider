import React from 'react';
import { hot } from 'react-hot-loader';
import cx from 'classnames';
import Button from 'Components/Button';
import styles from './app.scss';

const App = () => (
  <div className={styles.app}>
    React Starter
    <div className={cx(styles.sassyDiv, styles.bar)}>Get Sassy!</div>
    <Button />
  </div>
);

export default hot(module)(App);
