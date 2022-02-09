import React from "react";
import { useForm } from "react-hook-form";

import Zoom from "react-reveal/Zoom";
import { LightSpeed, Roll } from "react-reveal";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <Zoom top>
        <h1 className="font-mono text-6xl mb-20 font-bold">
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
      <div class="container lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-3/4 mx-auto bg-yellow-400 grid  gap-4 pb-10">
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className=" mx-auto mt-10 block w-3/4 px-3 py-2 bg-white border border-slate-300 rounded-md text-lg font-semibold shadow-lg placeholder-slate-400 font-mono "
                defaultValue="Your Name"
                {...register("name")}
              />

              <input
                className=" mx-auto mt-8 block w-3/4 px-3 py-2 bg-white border border-slate-300 font-semibold  rounded-md text-lg shadow-lg placeholder-slate-400 font-mono "
                defaultValue="Email"
                {...register("email")}
              />
              <textarea
                className=" mx-auto mt-8 block w-3/4 h-32 px-3 py-2 bg-white border border-slate-300 font-semibold rounded-md text-lg shadow-lg placeholder-slate-400"
                defaultValue="Write Message "
                {...register("message")}
              />

              {/* <input {...register("exampleRequired", { required: true })} /> */}
              {errors.exampleRequired && <span>This field is required</span>}
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
