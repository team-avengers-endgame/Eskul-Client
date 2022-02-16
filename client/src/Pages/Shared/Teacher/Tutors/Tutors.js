import React, { useEffect, useState } from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import Tutor from '../Tutor/Tutor';
import './Tutors.css'

const Tutors = () => {
     const [tutors, setTutors] = useState([]);
     useEffect(() => {
            fetch('./tutor.json')
            .then(res => res.json())
            .then(data => setTutors(data));
     }, [])
    return (
        <div id="tutors" className=''>
            <Navigation></Navigation>
             <div className='aboutUs_Banner_Container py-16 '>
            <h1 className=' text-white text-5xl font-bold'> Private Tutor Remotly</h1>
        </div>
            <div className='tutor-container'>
              {
                  tutors.map(tutor => <Tutor
                  key = {tutor.id}
                  tutor={tutor}
                  ></Tutor>)
              }

            </div>
            <Footer/>
        </div>
    );
};

export default Tutors;