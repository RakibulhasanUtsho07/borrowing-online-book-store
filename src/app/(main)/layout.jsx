
import React, { Children } from 'react'
import Navbar from '../components/shared/Navbar'
import Banner from '../components/shared/Banner'
import TopRatedBooks from '../components/shared/TopRatedBooks'

function MainLayout({children}) {
  return (
    <>
      <Navbar ></Navbar>
      <TopRatedBooks></TopRatedBooks>
      <Banner></Banner>
      <div className='animate__animated animate__fadeIn animate__faster'>
         {children}
      </div>
    </>
  )
}

export default MainLayout
