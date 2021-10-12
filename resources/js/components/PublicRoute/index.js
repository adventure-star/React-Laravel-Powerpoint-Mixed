import React from 'react'
import { getCurrentUser } from '../../services/auth';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => getCurrentUser() == null
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
        />
    )
}

export default PublicRoute;