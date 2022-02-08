import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Navigation = () => {
    const { logOut, user } = useAuth();
    return (
        <div>
            <h1>navbar  </h1>
            {user.email ? <button onClick={logOut}>Logout</button> :
                <Link to='/login'>Login</Link>}
            <h3>{user.displayName}</h3>
        </div>
    );
};

export default Navigation;