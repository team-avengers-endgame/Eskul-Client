import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='grid justify-items-center '>
            <img  style={{width:"600px"}} src="https://i.ibb.co/dbWvxRy/404.png" alt="" />
            <Link to= "/home"><button className="bg-lime-300  hover:bg-lime-400 text-green-900 font-bold py-2 px-3 border border-lime-400 rounded mb-5" >Go Home</button></Link>
            
        </div>
    );
};

export default NotFound;