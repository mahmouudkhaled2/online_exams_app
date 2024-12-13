'use client'

import React, { useState } from 'react'
import QuizIconSVG from './Icons/QuizIconSVG'
import QuizModal from './QuizModal';

export default function Quiz({exam}) { 

  const [openModal, setOpenModal] = useState(false);
  
  return (
    <li >
        <div className="bg-[#F9F9F9] py-4 px-6 flex justify-between items-center shadow-lg rounded-[10px]">
            <div className="flex justify-between items-center gap-5">
            <QuizIconSVG/>
            <div>
                <h3 className="font-medium">{exam?.title}</h3>
                <p className="text-[13px] text-[#535353]">{exam?.numberOfQuestions} Questions</p>
            </div>
            </div>

            <div>
            <p className="text-[13px]">{exam?.duration} Minues</p>

            <button 
            type="button" 
            disabled={exam?.active === false}
            onClick={() => setOpenModal(true)}
            className={`${exam?.active ? 'bg-opacity-60' : ''} bg-main py-1 px-6 text-white text-[12px] rounded-[10px] cursor-pointer`}>
                Start
            </button>
            { openModal && <QuizModal examId={exam?._id}/>}
            
            </div>  
        </div>
    </li>
  )
}
