import React from 'react';
import RegisterImg from '../Login_Img/Register-img.svg';
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Registration = () => {
    const { registerUser, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, event) => {
        event.preventDefault()
        registerUser(data?.email, data?.password, data?.name, location, history)
    };





    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="
  grid 
  lg:grid-cols-4 
  md:grid-cols-4 
  sm:grid-12 
  p-3">
                    <div className='col-span-2 text-center'>
                        <img src={RegisterImg} alt="Register feature" />
                    </div>

                    <div className="sm:col-span-2 col-start-1 col-end-7 flex items-center">
                        <div className=''>
                            <div>
                                <h1 className=' text-center font-bold text-3xl pb-7'>Get Start Now</h1>
                                <p className='text-center'>It`s Free to join and gain full access to thousands of exciting teaching opportunities</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className='flex justify-between px-4'>
                                    <div>
                                        <input type="checkbox" name="teacherCheck" id=""
                                            className=' rounded-full bottom-0 bg-violet-500'
                                        /><p className='inline ml-2'>I'm teacher</p>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="teacherCheck" id=""
                                            className=' rounded-full bottom-0'
                                        /><p className='inline ml-2'>I'm Student</p>
                                    </div>
                                </div>

                                <input
                                    {...register("email", { required: true })}
                                    className=" mt-4 p-1 pl-3 rounded  bg-blue-100 w-full"
                                    type="email" name="email" placeholder="Email" /> <br />
                                {errors.email &&
                                    <span className='text-red-500'>This Email field is required</span>}


                                <input
                                    {...register("name", { required: true })}
                                    className=" mt-4 p-1 pl-3 rounded bg-blue-100 w-full"
                                    type="name" name="name" placeholder="Full Name" /> <br />
                                {errors.name &&
                                    <span className='text-red-500'>This Name field is required</span>}


                                <input
                                    {...register("password", { required: true })}
                                    className=" mt-4 p-1 pl-3 rounded bg-blue-100 w-full"
                                    type="password" name="password" placeholder="Password" /> <br />
                                {errors.password &&
                                    <span className='text-red-500'>This password field is required</span>}

                                <div className=' py-2'>
                                    <input type="checkbox" name="teacherCheck" id=""
                                        className=' rounded-full bottom-0'
                                    />
                                    <p className='inline ml-2'>Agree to the website's <span className=' text-purple-500 '> Privacy policy & Terms and Conditions</span></p>
                                </div>
                                <div className=' py-2'>
                                    <input type="checkbox" name="teacherCheck" id=""
                                        className=' rounded-full bottom-0'
                                    />
                                    <p className='inline ml-2'>I certify to that I am an accredited Teacher</p>
                                </div>
                                <button
                                    className=" btn p-1 rounded text-white  bg-violet-500 hover:bg-violet-600 mt-4 w-full"
                                    type="submit" >Sing Up</button>
                            </form>
                            <div className=' text-center'>
                                <p>Already have a account? <span className='text-violet-500'><NavLink to='/login'>Sing up here</NavLink></span></p>
                                <p>or</p>
                                <p>Continue With</p>
                            </div>
                            <div>
                                <i
                                    onClick={() => signInWithGoogle(location, history)}
                                    className="
                            fab fa-google
                            text-3xl
                            px-5 mt-5
                            cursor-pointer
                            btn text-indigo-500
                             hover:text-blue-600"></i>

                                <i className="
                            fab fa-facebook  
                            text-3xl px-5 mt-5 
                            cursor-pointer btn 
                            text-indigo-500"></i>

                                <i className="
                            fab fa-github  
                            text-3xl px-5 
                            mt-5 cursor-pointer
                             btn text-black"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Registration;