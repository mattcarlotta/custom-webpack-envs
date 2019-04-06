import React from 'react';
import Dashboard from '../../containers/Dashboard';

export default () => (
  <div className="dashboard">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4">Dashboard</h1>
          <Dashboard />
        </div>
      </div>
    </div>
  </div>
);
