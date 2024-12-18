/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState } from "react";
import Subject from "./Subject";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function SubjectsList() {
  const { data: session } = useSession();

  

  const [allSubjects, setAllSubjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(1); 

  const postsPerPage = 3; 

  const getAllSubjects = async (page: number) => {
    const requestOptions = {
      headers: {
        token: session?.token,
      },
    };
    return await axios.get(`https://exam.elevateegy.com/api/v1/subjects?page=${page}&limit=${postsPerPage}`, requestOptions)
      .then((res) => {
        setAllSubjects(res.data?.subjects);
        setTotalPages(res.data?.metadata.numberOfPages || 1);
      })
      .catch((error) => console.log("Error", error));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  
  useEffect(() => {
    if (session) {
      getAllSubjects(currentPage);
    }
  }, [session, currentPage]);

  return (
    <>
      <section className="mb-10 bg-white py-8 px-4 rounded-xl">
        <h2 className="text-2xl font-medium text-main mb-8">Quizes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {allSubjects?.map((subject, index) => (
            <Link href={`/exams/${subject?._id}`} key={index}>
              <Subject subject={subject} />
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 mt-5">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-6 py-1.5 rounded-lg text-white ${
              currentPage === 1 ? "bg-gray-400" : "bg-main hover:bg-main-dark"
            }`}
          >
            Previous
          </button>
          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-6 py-1.5 rounded-lg text-white ${
              currentPage === totalPages
                ? "bg-gray-400"
                : "bg-main hover:bg-main-dark"
            }`}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}