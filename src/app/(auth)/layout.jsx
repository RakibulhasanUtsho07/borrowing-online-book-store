"use client"
import Navbar from '../components/shared/Navbar'

function AuthLayout({children}) {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  )
}

export default AuthLayout
