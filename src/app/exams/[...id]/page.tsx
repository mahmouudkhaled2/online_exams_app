/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Sidebar from "../../../Components/Sidebar";
import Navbar from "../../../Components/Navbar";
import Quiz from "../../../Components/Quiz";

export default async function page () {

  
  const headerList = await headers();
  const pathname = await headerList.get("current-path");
  const subjectId = pathname?.slice(pathname.lastIndexOf('/') + 1) 
  const session = await getServerSession(authOptions);

  // console.log(session.token);
  

  const getExamsOnSubjec = async () => {
    const requestOptions = {
      headers: {
        token: session?.token
      } 
    }
    return await axios.get(`https://exam.elevateegy.com/api/v1/exams?subject=${subjectId}`, requestOptions)
    .then(res => res.data)
    .catch(error => console.log(error))
  } 

  const data = await getExamsOnSubjec()
  
  console.log("Data Is Here", data);
  
  
  return (
    <>
       <section className="h-screen flex justify-between">
        <Sidebar />

        <div className="w-[85%] px-10 py-6">
          <Navbar/>
          <div className="p-8 font-Inter"> 
            <h2 className="text-2xl font-medium mb-8">Quizes</h2>

            {data?.exams.length !== 0 ? <ul>
                {data?.exams.map((exam: unknown, index: string) => {
                  return <Quiz key={index} exam={exam} />
                  })}
            </ul>
            :

            <div className="bg-[#F9F9F9] py-4 px-6 text-center shadow-lg rounded-[10px]">
              <p className="font-medium">There are no exams in this subject yet ! </p>
            </div> 
            }
          </div>
        </div>
    </section>
    </>
  )
}

