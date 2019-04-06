import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DisplaySignUp = () => (
  <Fragment>
    <p className="lead text-muted">Welcome traveler!</p>
    <p>You have not yet setup a profile, please add some info</p>
    <Link to="/create-profile" className="btn btn-lg btn-info">
      Create Profile
    </Link>
  </Fragment>
);

export default DisplaySignUp;
