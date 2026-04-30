
import React, { Children } from 'react'
import Navbar from '../components/shared/Navbar'
import Banner from '../components/shared/Banner'
import TopRatedBooks from '../components/shared/TopRatedBooks'

function MainLayout({children}) {
  return (
    <>
      <Navbar></Navbar>
      <TopRatedBooks></TopRatedBooks>
      <Banner></Banner>
      {children}
    </>
  )
}

export default MainLayout
