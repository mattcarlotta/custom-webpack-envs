import React from 'react';
import PropTypes from 'prop-types';
import { displayUserContainer } from './styles.scss';

const DisplayUser = ({ currentUser }) => (
  <pre className={displayUserContainer}>
    <code>{JSON.stringify(currentUser, null, 4)}</code>
  </pre>
);

DisplayUser.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      geo: PropTypes.objectOf(PropTypes.string).isRequired,
    }).isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.objectOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default DisplayUser;
