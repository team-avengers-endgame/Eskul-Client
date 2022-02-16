import React from "react";

const FaqMessage = () => {
  return (
    <div className=" sm:mx-auto md:mx-auto mt-6 ">
      <p className="text-white tracking-wide  text-3xl">
        We want hear from you
      </p>
      <div>
        <input
          type="text"
          id="text"
          class="mx-auto mt-8 block w-3/4 px-3 py-2 border-2 border-amber-500 bg-transparent font-semibold  rounded-md text-lg shadow-lg placeholder-white font-mono italic"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          class="mx-auto mt-8 block w-3/4 px-3 py-2 border-2 border-amber-500 bg-transparent  font-semibold  rounded-md text-lg shadow-lg placeholder-white  italic"
          placeholder="Your Email"
          required
        />
      </div>
      {/* message box */}
      <div>
        <textarea
          type="text"
          id="text"
          class="mx-auto mt-8 block w-3/4 h-32 px-3 py-2 border-2 border-amber-500 bg-transparent  font-semibold rounded-md text-lg shadow-lg placeholder-white font-mono italic"
          placeholder="Write Your Question"
          required
        />
      </div>
      <br />
      {/* button */}
      <button
        type="button"
        class="mx-auto my-8 block w-3/4 px-3 py-2 bg-orange-400 
        font-semibold text-center text-white rounded-md text-2xl shadow-lg
        italic transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300 cursor-pointer
        "
      >
        Send Now
        <svg
          className="w-5 inline mx-2 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="white"
            d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"
          />
        </svg>
      </button>
    </div>
  );
};

export default FaqMessage;
