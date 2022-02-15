import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Zoom from "react-reveal/Zoom";
import { LightSpeed, Roll } from "react-reveal";
import swal from 'sweetalert';

const ContactUs = () => {
  const [setAlerted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const successAlert = () => {
    setAlerted(swal({
      title: "Good job! 🥰",
      text: 'Message success to send',
      icon: "success",

    }));
  }
  const errorAlert = () => {
    setAlerted(swal({
      title: "Failed 🥵",
      text: 'Message failed to send',
      icon: "failed",
    }));
  }
  const sendEmail = (formData) => {

    emailjs.send("service_es28khp", "template_1fmwbhh", formData, "user_bJFVwTvtJQe23vqEilEMy")
      .then(
        (result) => {

          result.text && successAlert() && setAlerted(true);
        },
        (error) => {

          error.text && errorAlert() && setAlerted(true);
        }
      );
    reset();
  };


  return (
    <div className="pt-20 px-3">
      <Zoom top>
        <h1 className="font-mono text-4xl mb-20 font-bold text-orange-400">
          Contact Us
          <hr
            style={{
              color: "black",
              width: "75%",
              margin: "0 auto ",
            }}
          />
        </h1>
      </Zoom>
      <div className="container lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 md:w-3/4 mx-auto bg-yellow-400 grid  gap-4 pb-10">
        <LightSpeed left>
          <div>
            <img
              className="w-50 -translate-y-6 drop-shadow-xl"
              src="https://i.ibb.co/GWDGGmw/Smiling-schoolgirl-with-backpack-looking-at-camera.jpg"
              alt=""
            />
          </div>
        </LightSpeed>
        <Roll right>
          <div>
            <h1 className="font-mono text-4xl mt-20 font-bold">
              Send A Message
            </h1>
            <form onSubmit={handleSubmit(sendEmail)}>
              <input
                className=" mx-auto mt-10 block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-lg font-semibold shadow-lg placeholder-slate-400 font-mono "
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span className=" text-red-500">This field is required</span>}
              <input
                className=" mx-auto mt-8 block w-3/4 px-3 py-2 bg-white border border-slate-300 font-semibold  rounded-md text-lg shadow-lg placeholder-slate-400 font-mono "
                placeholder="Email"
                type='email'
                {...register("email", { required: true })}
              />
              {errors.email && <span className=" text-red-500">This field is required</span>}
              <input
                className=" mx-auto mt-8 block w-3/4 px-3 py-2 bg-white border border-slate-300 font-semibold  rounded-md text-lg shadow-lg placeholder-slate-400 font-mono "
                placeholder="Title"
                type='title'
                {...register("title", { required: true })}
              />
              {errors.title && <span className=" text-red-500">This field is required</span>}
              <textarea
                className=" mx-auto mt-8 block w-3/4 h-32 px-3 py-2 bg-white border border-slate-300 font-semibold rounded-md text-lg shadow-lg placeholder-slate-400"
                placeholder="Write Message "
                type='text'
                {...register("message", { required: true })}
              />

              {errors.message && <span className=" text-red-500">This field is required</span>}
              <br />
              <input
                className="rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 px-8 py-2  text-xl p-4 text-white cursor-pointer shadow-lg font-mono transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
                type="submit"
              />
            </form>
          </div>
        </Roll>
      </div>
    </div>
  );
};

export default ContactUs;
