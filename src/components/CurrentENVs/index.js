import React, { Fragment } from 'react';
import { container } from './styles.scss';

const CurrentENVs = () => (
  <Fragment>
    <h2>Current ENVs</h2>
    <pre className={container}>
      <code>{JSON.stringify(process.env, null, 4)}</code>
    </pre>
  </Fragment>
);

export default CurrentENVs;
