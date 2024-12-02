'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {

  const pathname: string = usePathname();
  const authPathnames = ['/login', '/register', '/forget-password', '/verify-code', '/reset-password'];

    if (!authPathnames.includes(pathname)) 
        return (
                <nav className="h-20 bg-slate-500 fixed top-0 right-0 left-0 shadow-md">
                    <ul className="flex justify-center items-center gap-10 h-full ">
                        <li>
                        <Link href={'/'} className="text-white">Home</Link>
                        </li>

                        <li>
                        <Link href={'/client'} className="text-white">Client</Link>
                        </li>

                        <li>
                        <Link href={'/server'} className="text-white">Server</Link>
                        </li>

                        <li>
                        <Link href={'/dashboard'} className="text-white">Dashboard</Link>
                        </li>

                        <li>
                        <Link href={'/login'} className="text-white">Login</Link>
                        </li>
                    </ul>
                    </nav>
        )
}
