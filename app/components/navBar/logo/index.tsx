import React from 'react'
import Image from 'next/image'
import LogoPic from '../../.././../public/assests/logo_02.png'

function Logo() {
    return (
        <div>
            <Image
                src={LogoPic}
                width={30}
                height={30}
                alt="Picture of the author"
                className=' cursor-pointer'
            />
        </div>
    )
}

export default Logo