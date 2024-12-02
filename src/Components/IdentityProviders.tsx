'use client'

import Image from 'next/image'
import googleIcon from './../assets/images/google-icon.png'
import twitterIcon from './../assets/images/twitter-icon.png'
import facebookIcon from './../assets/images/facebook-icon.png'
import appleIcon from './../assets/images/apple-icon.png'


export default function IdentityProviders() {
  return (
    <>
        <div className='max-w-md mx-auto my-7'>
            <ul className='flex justify-center items-center gap-5'>
                <li>
                    <button type="button" className='p-3 flex justify-center items-center border border-[#e0e0e9] rounded-xl shadow-lg'>
                        <Image className='w-6' src={googleIcon} alt="Google Icon" />
                    </button>
                </li>


                <li>
                    <button type="button" className='p-3 flex justify-center items-center border border-[#e0e0e9] rounded-xl shadow-lg'>
                        <Image className='w-6' src={twitterIcon} alt="Google Icon" />
                    </button>
                </li>



                <li>
                    <button type="button" className='p-3 flex justify-center items-center border border-[#e0e0e9] rounded-xl shadow-lg'>
                        <Image className='w-6' src={facebookIcon} alt="Google Icon" />
                    </button>
                </li>



                <li>
                    <button type="button" className='p-3 flex justify-center items-center border border-[#e0e0e9] rounded-xl shadow-lg'>
                        <Image className='w-6' src={appleIcon} alt="Google Icon" />
                    </button>
                </li>
            </ul>
        </div>
    </>
  )
}
