import React from 'react';
import { Link } from 'react-router-dom';


const Tutor = ({tutor}) => {
    const{id, name, img, describe, salary, subject, duration} = tutor;
    return (

  <div>
            
     <div className='m-5'>
        
            <div className="bg-gray-800 rounded-xl p-4 box-border overflow-hidden relative flex flex-col justify-between ">
        {/* country badge  */}
        <div className="absolute top-10 font-bold text-white left-0 z-50 bg-gray-600 font-primary px-4 py-1 rounded-lg">{subject}</div>
        {/* image  */}
        <div className="overflow-hidden rounded-xl h-52">
            <img className="transform hover:scale-125 transition duration-700 w-full h-full object-cover" src={img} alt={name} />
        </div>

        <div className="flex flex-col flex-grow">
            {/* title and description */}
            <div className="flex flex-col space-y-1 my-4">
                <h2 className="text-white
                 font-primary text-xl font-bold">{name}</h2>
                {/* <p className="text-gray-500 text-sm">{describe.slice(0, 250)}</p>                     */}

            </div>
       
        </div>

        {/* card footer  */}
      <div className="flex items-center justify-between pt-3">
            <h1 className="font-primary font-bold text-white text-2xl">${salary}</h1>
            <Link to={`/tutordetails/${id}`}> <button className="bg-gray-600 text-white font-bold rounded-lg px-6"> More</button></Link>
        </div> 
    </div>
     </div>
  </div>
)
}

   

export default Tutor;