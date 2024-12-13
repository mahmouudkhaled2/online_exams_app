import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import UserInfoCard from '../../Components/UserInfoCard'
import SubjectsList from '../../Components/SubjectsList'

export default function HomePage() {
  return (
    <>

    <section className=" flex justify-between">
        <Sidebar />

        <div className="w-[85%] px-10 py-6">
          <Navbar/>
          <UserInfoCard/>
          <SubjectsList />
        </div>
    </section>


    
        
    </>
  )
}
