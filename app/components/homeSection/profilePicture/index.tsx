import React from 'react'
import Image from 'next/image'
import Logo from '../../.././../public/assests/profile.png'

function ProfilePicture() {
    return (
        <div>
            <Image
                src={Logo}
                alt="Picture of the author"
                className="w-[100%] md:w-[90%] py-5 cursor-pointer  border-r-teal-50"
            />
        </div>
    )
}

export default ProfilePicture