import React from 'react'
import PCarosal from './projectCarosal'

function ProjectSection() {

  return (
    <div className="p-4 px-[5%] md:text-left text-center">
      <div className="flex  flex-col ">
        <p className="md:text-base text-sm font-bold py-2">Recent Projects</p>
        <p className=" md:text-3xl text-xl font-bold py-2">My Portfolio</p>
      </div>
      
      <div className='my-5'>
        <PCarosal/>
      </div>
    </div>
  );

}

export default ProjectSection