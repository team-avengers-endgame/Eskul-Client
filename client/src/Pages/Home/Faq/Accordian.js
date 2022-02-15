import React from "react";

const Accordian = () => {
  return (
    <div className="shadow-lg border-t border-b  md:w-2/3 mx-auto mt-10">
      {/* Tab-1 */}
      <div id="tab1" className="overflow-hidden border-t ">
        <label>
          <input className="absolute opacity-0 peer" type="checkbox" />
          <p className="p-5 text-lg text-white inline-block w-11/12 cursor-pointer tracking-wide">
            How can I purchase book from here?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer  inline-block float-right mt-5 mr-2 border-2 rounded-full rotate-180 bg-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>

          <div
            style={{ transition: "all 1s ease-in-out" }}
            className="bg-orange-400  "
          >
            <p className="p-5 text-white tracking-wide text-lg">
              We have Online Book Shop. You will find all kinds of books
              here.You can purchase book through virtual card system.
            </p>
          </div>
        </label>
      </div>

      {/* Tab-2 */}
      <div className="overflow-hidden border-t">
        <label>
          <input className="absolute opacity-0 peer" type="checkbox" />
          <p className="p-5 text-white inline-block w-11/12 cursor-pointer tracking-wide text-lg">
            How can I hire a teacher from here?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer  inline-block float-right mt-5 mr-2 border-2 rounded-full peer-checked:rotate-180 peer-checked:bg-orange-400 transition-all duration-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <div
            style={{ transition: "all 1s ease-in-out" }}
            className="bg-orange-400 max-h-0 peer-checked:max-h-screen"
          >
            <p className="p-5 text-white tracking-wide text-lg">
              You can hire teacher from our Tutors Pannel. You can choose the
              teacher according to your choice. You can pay the hired teacher
              through virtual card system.
            </p>
          </div>
        </label>
      </div>
      {/* Tab-3 */}
      <div className="overflow-hidden border-t">
        <label>
          <input className="absolute opacity-0 peer" type="checkbox" />
          <p className="p-5 text-white inline-block w-11/12 cursor-pointer tracking-wide text-lg">
            How can I get premium membership?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer  inline-block float-right mt-5 mr-2 border-2 rounded-full peer-checked:rotate-180 peer-checked:bg-orange-400 transition-all duration-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <div
            style={{ transition: "all 1s ease-in-out" }}
            className="bg-orange-400 max-h-0 peer-checked:max-h-screen"
          >
            <p className="p-5 text-white tracking-wide text-lg">
              By purchasing our premium membership plan using virtual card
              system you can get access our premium membership.
            </p>
          </div>
        </label>
      </div>
      {/* Tab-4 */}
      <div className="overflow-hidden border-t">
        <label>
          <input className="absolute opacity-0 peer" type="checkbox" />
          <p className="p-5 text-white inline-block w-11/12 cursor-pointer tracking-wide text-lg">
            Will premium membership have lifetime access or for a limited time?
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 cursor-pointer  inline-block float-right mt-5 mr-2 border-2 rounded-full peer-checked:rotate-180 peer-checked:bg-orange-400 transition-all duration-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
          <div
            style={{ transition: "all 1s ease-in-out" }}
            className="bg-orange-400 max-h-0 peer-checked:max-h-screen "
          >
            <p className="p-5 text-white tracking-wide text-lg">
              Each premium membership lasts for a maximum of one year. After one
              year you will have to buy a new premium membership.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Accordian;
