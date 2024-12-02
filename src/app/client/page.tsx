'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation';
import React from 'react'

export default function page() {

  // const {data, status, update} = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("api/auth/signin")
  //   },
  // });

  // console.log("Data" , data);
  
  return (
    <div className='h-screen flex justify-center items-center'>
        <h1 className='text-5xl'>Client Page</h1>
    </div>
  )
}
