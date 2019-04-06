import isEmpty from 'lodash/isEmpty';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import DisplayUser from '../../components/DisplayUser';
import DisplaySignUp from '../../components/DisplaySignUp';
import Spinner from '../../components/Spinner';

class Dashboard extends PureComponent {
  componentDidMount = () => {
    this.props.getCurrentProfile(1);
  };

  render = () =>
    this.props.isLoading ? (
      <Spinner />
    ) : !isEmpty(this.props.currentUser) ? (
      <DisplayUser currentUser={this.props.currentUser} />
    ) : (
      <DisplaySignUp />
    );
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
      geo: PropTypes.objectOf(PropTypes.string),
    }),
    phone: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    currentUser: state.profile.currentUser,
    isLoading: state.profile.isLoading,
  }),
  { getCurrentProfile },
)(Dashboard);
