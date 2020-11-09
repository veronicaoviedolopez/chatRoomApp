import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    return(
        <Route {...rest} render={props => (
            isAuth === true ?
                <Component {...props} />
                : <Redirect to="/login" />
            )} />
        );
    };

const mapStateToProps = state => (
{
    isAuth: state.isAuth
});

export default connect(mapStateToProps)(PrivateRoute);