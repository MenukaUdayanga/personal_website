import React from 'react'
import ExprianceCarosal from './experianceCarsosal/index'

function ExpeianceSection() {

  return (
    <div className="p-4 px-[5%] md:text-left text-center">
      <div className="flex  flex-col ">
        <p className="md:text-base text-sm font-bold py-2">My Skills</p>
        <p className=" md:text-3xl text-xl font-bold py-2">My Expriance</p>
      </div>
      
      <div className='my-5'>
        <ExprianceCarosal/>
      </div>
    </div>
  );

}

export default ExpeianceSection