import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

function Navbar() {
    const links =
        <>
            <li>
                <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink href={"/all-books"}>All Books</NavLink>
            </li>
            <li>
                <NavLink href={"/my-profile"}>My Profile</NavLink>
            </li>
        </>

    return (

        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href={"/"} className="  text-3xl font-bold text-emerald-600 bg-emerald-50 p-2  rounded-2xl ml-5">BORROWING<span className='text-sm text-emerald-400 '>BOOK</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex gap-5 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end pr-5">
                <a className="btn bg-purple-600 text-white px-5 text-bold ">Login</a>
            </div>
        </div>
    )
}

export default Navbar
