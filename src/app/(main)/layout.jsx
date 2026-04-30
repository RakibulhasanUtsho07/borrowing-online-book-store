
import React, { Children } from 'react'
import Navbar from '../components/shared/Navbar'
import Banner from '../components/shared/Banner'

function MainLayout({children}) {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      {children}
    </>
  )
}

export default MainLayout
