'use client'

import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import profileImage from './../assets/images/user-profile-white.png'
import { useSession } from 'next-auth/react';
import 'flowbite';

export default function Navbar() {

  const pathname: string = usePathname();
  // const router = useRouter()
  const authPathnames = ['/login', '/register', '/forget-password', '/verify-code', '/reset-password'];
  const {data: session} = useSession();

  // const handleLogOut = async () => {
  //     await signOut({redirect: false});
  //     router.push('/login');
  // }
    
    if (!authPathnames.includes(pathname)) 
      return (
        <nav className="px-5 fixed top-0 right-0 left-0 shadow-lg bg-slate-500 ">

          <div className='w-full md:w-[90%] mx-auto h-20 flex justify-between items-center'>
            <div>
            <h2 className="text-2xl text-white font-bold">Online Exams</h2>
            </div>

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

            
            <div>
              <Image id="avatarButton" width={45} height={45} data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="rounded-full cursor-pointer" src={ !session?.user?.image ? profileImage : session?.user?.image } alt="User dropdown" />
              {/* Dropdown menu */}
              <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                {session?.user?.name && session?.user?.email && 
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{session?.user?.name}</div>
                    <div className="font-medium text-[10px] truncate">{session?.user?.email}</div>
                  </div>
                }
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>

                { !session ? 
                  <div className="py-1">
                    <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign in</Link>
                  </div> 
                  :
                  <div className="py-1">
                    <div  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</div>
                  </div>
                }

              </div>
            </div>
          </div>
          

        </nav>
      )
}
