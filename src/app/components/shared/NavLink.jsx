"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink({href, className, children}) {
    const pathName = usePathname()
    const isActive = pathName === href;
  return (
    <Link href={href} className={`${isActive ? " border-b-2 border-purple-600 ": ""}`}>{children}</Link>
  )
}

export default NavLink