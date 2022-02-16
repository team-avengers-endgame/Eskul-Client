import React from 'react';
import { useForm } from "react-hook-form";
import AddedImg from './img/SchoolAddedImg.svg'
const AddedSchoolData = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault()
        console.log(data)
        reset()
    };
    return (
        <div className='container md:px-36 py-8 px-3'>
            <div >
                <div className=' grid md:grid-cols-2 mt-10'>
                    <div>
                        <img src={AddedImg} alt="" />            </div>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className=' grid grid-cols-1 gap-3'
                    >
                        <input
                            className=" mt-1 w-full
                 block  px-3 py-2 
                 bg-white border 
                 border-slate-300 
                 rounded-md text-lg 
                 font-semibold shadow-lg 
                 placeholder-slate-400
                  font-mono "
                            placeholder='School Name'
                            {...register("schoolName",
                                { required: true })} />

                        <input
                            className="  w-full mt-1 
                 block  px-3 py-2 
                 bg-white border 
                 border-slate-300 
                 rounded-md text-lg 
                 font-semibold shadow-lg 
                 placeholder-slate-400
                  font-mono "
                            placeholder='School Address'
                            {...register("schoolAddress",
                                { required: true })} />

                        <div className=' grid md:grid-cols-2 gap-3'>
                            <input
                                className=" mt-1 
                             w-full
                 px-3 py-2 
                bg-white border 
                border-slate-300 
                rounded-md text-lg 
                font-semibold shadow-lg 
                placeholder-slate-400
                 font-mono "
                                placeholder='School Email'
                                {...register("schoolEmail",
                                    { required: true })} />

                            <input
                                className="  mt-1 
                            w-full px-3 py-2 
                 bg-white border 
                 border-slate-300 
                 rounded-md text-lg 
                 font-semibold shadow-lg 
                 placeholder-slate-400
                  font-mono "
                                type='number'
                                placeholder='School Phone Number'
                                {...register("schoolPhoneNumber",
                                    { required: true })} />
                        </div>



                        <div className=' grid md:grid-cols-2 gap-3'>

                            <input
                                className=" mx-auto mt-1 
                        w-full px-3 py-2 
                 bg-white border 
                 border-slate-300 
                 rounded-md text-lg 
                 font-semibold shadow-lg 
                 placeholder-slate-400
                  font-mono "
                                placeholder='School Web Site Link'
                                {...register("schoolWebsiteLink",
                                    { required: true })} />
                            <input
                                className=" mx-auto mt-1 
                        w-full  px-3 py-2 
                bg-white border 
                border-slate-300 
                rounded-md text-lg 
                font-semibold shadow-lg 
                placeholder-slate-400
                 font-mono "
                                placeholder='Total Student Seat'
                                {...register("totalStudentSeat",
                                    { required: true })} />
                        </div>


                        <textarea

                            className="mt-1 
w-full  px-3 py-2 
bg-white border 
border-slate-300 
rounded-md text-lg 
font-semibold shadow-lg 
placeholder-slate-400
font-mono "
                            placeholder='About the school'
                            {...register("AboutTheSchool",
                                { required: true })} />

                        <div className=' grid md:grid-cols-2 gap-3'>

                            <select
                                className="
                            md:col-span-1
                   w-full
                   bg-white border 
                   border-slate-300 
                   rounded-md text-lg 
                   font-semibold shadow-lg 
                   placeholder-slate-400
                   
                     text-gray-400 leading-tight  focus:bg-white focus:border-gray-500"
                                {...register("SchoolType", { required: true })}>
                                <option value="Co-Education">Co-Education</option>
                                <option value="BoysSchool">Boys School</option>
                                <option value="GirlsSchool">Girls school</option>
                                <option value="Technical">Technical</option>
                            </select>
                            <input
                                className="mt-1 px-3 
                           bg-white border 
                           border-slate-300 
                           rounded-md text-lg 
                           font-semibold shadow-lg 
                           placeholder-slate-400
                            font-mono "
                                {...register} type="file" name="schoolPhoto" />
                        </div>



                        <div className='grid grid-cols-6 gap-4'>
                            <input

                                type="submit"
                                className="
                                col-start-2 col-span-4
                              w-full
                            mx-auto mt-1 
                    block  px-3 py-2 
                    bg-white border 
                    border-slate-300 
                    rounded-md text-lg 
                    font-semibold shadow-lg 
                    placeholder-slate-400
                     font-mono "
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddedSchoolData;