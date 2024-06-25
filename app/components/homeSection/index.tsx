import React from 'react'
import Text from '../constant/text'
import FillButton from './fillButton'
import ProfilePic from './profilePicture'


function HomeSection() {
  return (
    <div className="flex flex-wrap w-full bg-gradient-to-r from-blue-200 to-slate-50">
      <div className="md:w-1/2 w-screen px-[5%] py-[8%] text-center md:text-left md:order-1 order-2">
        <p className="font-semibold text-base">{Text.header_one}</p>
        <p className=" sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-5xl text-3xl font-semibold mt-2">
          {Text.header_two} <span className="text-purple-500">{Text.header_three}</span>
        </p>
        <p className=" sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-5xl text-3xl font-semibold mb-2">{Text.header_four}</p>
        <p className="lg:text-base text-xs">{Text.header_five}</p>
        <div className="mt-6">
          <FillButton />
        </div>
      </div>

      <div className="md:w-1/2 w-screen px-4 pt-4 md:order-2 order-1">
        <ProfilePic />
      </div>
    </div>
  )
}

export default HomeSection
