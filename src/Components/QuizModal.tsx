/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import QuizInstructions from './QuizInstructions'
import QuestionContainer from './QuestionContainer';

export default function ExamModal({examId}: {examId: string}) {

    const {data: session} = useSession();
    const [allQuestions, setAllQuestions] = useState([]);
    const [showInstructions, setShowInstructions] = useState(true);

    const handleStart = () => {
        setShowInstructions(false)
    }
   
    const getQuestionsOnExam = async () => {

        const requestOptions = {
            headers: {
                token: session?.token
            }
        }

        return await axios.get(`https://exam.elevateegy.com/api/v1/questions?exam=${examId}`, requestOptions)
        .then(res => setAllQuestions(res.data?.questions))
        .catch(err =>{throw new Error(err)} )        
    }

    useEffect(() => {
        getQuestionsOnExam()
    }, [session]) 

    
    return ( 
    <>
    
    <div>
    <div className="md:flex w-full overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:justify-center md:items-center md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black bg-opacity-70 ">
        <div className="relative p-4 max-w-xl h-full md:h-auto md:max-h-full ">

        <div className=" relative bg-white w-full h-full md:h-auto md:w-[600px] rounded-lg shadow dark:bg-gray-700">

            {/* Modal body */}
            <div className="p-4 md:p-5">
                {showInstructions 
                ? 
                <QuizInstructions handleStart={handleStart}/> 
                : 
                <QuestionContainer allQuestions={allQuestions}/>}
            </div>

        </div>
        </div>
    </div>
    </div>
    </>
  )
}
