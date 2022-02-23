import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Spinner from '../../../Hooks/Spinner'
import useAuth from '../../../Hooks/useAuth';



const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>

            <Route
                {...rest}

                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>}
            >

            </Route>

        </div>
    );
};

export default PrivateRoute;