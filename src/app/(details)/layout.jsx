import React from 'react'
import Navbar from '../components/shared/Navbar'
import TopRatedBooks from '../components/shared/TopRatedBooks'
import Footer from '../components/shared/Footer'

function DetailsLayout({children}) {
  return (
    <>
      <Navbar></Navbar>
      <TopRatedBooks></TopRatedBooks>
      
      {children}
      <Footer></Footer>
    </>
  )
}

export default DetailsLayout
