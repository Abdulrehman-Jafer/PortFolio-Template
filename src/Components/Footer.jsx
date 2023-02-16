import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsGoogle} from "react-icons/bs"

const Footer = () => {
    return (
        <div className='flex flex-col gap-4 bg-gradient-to-r from-gray-700 p-10'>
            <div className='text-5xl'>Contact</div>
            <div className='max-w-[700px]'>
                I'm currently looking to join a cross-functional team that values improving people's lives
                through accessible design. or have a project in mind? Let's connect.
            </div>
            <div>
            abdulrehmanjafer01233@gmail.com
            </div>
            <div className='flex gap-5'>
            {<BsInstagram/>}
            {<BsFacebook/>}
            {<BsGoogle/>}
            </div>
        </div>
    )
}

export default Footer