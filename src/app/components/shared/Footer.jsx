import React from 'react'
import SocialMedia from './SocialMedia'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

function Footer() {
  return (
    <footer className='mt-20 border-t border-gray-200 bg-white pt-16 pb-10'>
      <div className='max-w-7xl mx-auto px-5 md:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 items-start'>
          
          <div className='space-y-5'>
            <h1 className="text-2xl font-extrabold text-emerald-700 tracking-tight">
              Borrowing <span className='text-emerald-500 font-medium'>Book</span>
            </h1>
            <p className='text-gray-600 leading-relaxed max-w-sm break-words'>
              Empowering a community of readers through the joy of shared stories. 
              Our platform connects book lovers with an extensive catalog of genres, 
              from timeless classics to modern bestsellers.
            </p>
          </div>

          <div className='space-y-4'>
            <h3 className='text-lg font-bold text-gray-800'>Contact Us</h3>
            <div className='space-y-3 text-gray-600'>
              <div className='flex items-start gap-3'>
                <HiOutlineLocationMarker className="text-xl text-emerald-600 mt-1 shrink-0" />
                <p>12/A, Dhanmondi, Dhaka, Bangladesh</p>
              </div>
              <div className='flex items-center gap-3'>
                <HiOutlinePhone className="text-xl text-emerald-600 shrink-0" />
                <p>+880 1738840000</p>
              </div>
              <div className='flex items-center gap-3'>
                <HiOutlineMail className="text-xl text-emerald-600 shrink-0" />
                <p>supporter@gmail.com</p>
              </div>
            </div>
          </div>

          <div className='space-y-4 md:text-right'>
            <h3 className='text-lg font-bold text-gray-800'>Follow Us</h3>
            <div className='flex md:justify-end'>
              <SocialMedia />
            </div>
          </div>

        </div>

        <div className='mt-16 pt-8 border-t border-gray-100 text-center text-sm text-gray-500'>
          <p>© {new Date().getFullYear()} Borrowing Book Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer