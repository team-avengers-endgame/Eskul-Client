import React from 'react';
import LoginImg from '../Login_Img/Login-img.svg';
const Login = () => {
    return (
        <div className="container" style={{ height: '100vh' }}>
            <div className="
  grid 
  lg:grid-cols-3 
  md:grid-cols-3 
  sm:grid-12 
  p-3">
                <div className='col-span-2'>
                    <img src={LoginImg} alt="Register feature" />
                </div>
                <div className="sm:col-span-1 col-start-1 col-end-7 flex items-center">
                    <div className=''>
                        <div>
                            <h1 className=' text-center font-bold text-3xl pb-7'>Get Start Now</h1>
                            <p className='text-center'>It`s Free to join and gain full access to thousands of exciting teaching opportunities</p>
                        </div>
                        <form >

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
                                className=" mt-4 p-1 pl-3 rounded  bg-blue-100 w-full"
                                type="email" name="email" placeholder="Email" /> <br />

                            <input
                                className=" mt-4 p-1 pl-3 rounded bg-blue-100 w-full"
                                type="password" name="password" placeholder="Password" /> <br />

                            <div className=' py-2'>
                                <input type="checkbox" name="teacherCheck" id=""
                                    className=' rounded-full bottom-0'
                                />
                                <p className='inline ml-2'>I certify to that I am an accredited Teacher</p>
                            </div>
                            <button
                                className=" btn p-1 rounded text-white  bg-violet-500 hover:bg-violet-600 mt-4 w-full"
                                type="submit" >Sing In</button>
                        </form>
                        <div className=' text-center'>
                            <p>Not have a account? <span className='text-violet-500'> Sing up here</span></p>
                            <p>or</p>
                            <p>Continue With</p>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;