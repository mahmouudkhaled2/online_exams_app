import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import UserInfoCard from '../UserInfoCard'
import SubjectsList from '../SubjectsList'

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
