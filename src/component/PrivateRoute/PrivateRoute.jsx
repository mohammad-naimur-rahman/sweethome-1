import React from 'react';
import { Redirect, Route } from 'react-router';
import { connect } from 'react-redux'

const mapStateToProps = state =>{
  return {
    loggedUserData: state.loggedUserData
  }
}

const PrivateRoute = (props) => {
const { loggedUserData, children, ...rest } = props
  return (
    <Route
      {...rest}
      render={({ location }) =>
      props.loggedUserData.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default connect(mapStateToProps)(PrivateRoute);
