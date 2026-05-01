import React from 'react'
import Navbar from '../components/shared/Navbar'
import TopRatedBooks from '../components/shared/TopRatedBooks'

function DetailsLayout({children}) {
  return (
    <>
      <Navbar></Navbar>
      <TopRatedBooks></TopRatedBooks>
      
      {children}
    </>
  )
}

export default DetailsLayout
