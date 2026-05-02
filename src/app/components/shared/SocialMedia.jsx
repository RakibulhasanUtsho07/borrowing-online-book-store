import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa6";
function SocialMedia() {
  return (
    <div className="mt-5">
      <h3 className='text-2xl font-semibold mb-4'>Find Us On</h3>
      <div className=''>
        <div className='w-full p-3 rounded flex gap-3 pl-5 '>
            <FaFacebook size={24} className='my-auto text-blue-500' />
            <span className=' bg-clip-text text-transparent bg-gradient-to-r from-[#0084FF] via-[#A033FF] to-[#FF5280] font-medium'>FaceBook</span>
        </div>
        <div className='w-full p-3  rounded flex gap-3 pl-5 '>
            <FaTwitter size={24} className='my-auto' />
            <span className=' font-medium'>Twitter</span>
        </div>
        <div className='w-full p-3 rounded flex gap-3  pl-5'>
            <FaInstagram size={24} className='my-auto text-[#ee2a7b]' />
            <span className='bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent font-medium'>Instagram</span>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia