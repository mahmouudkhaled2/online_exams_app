import React from 'react'
import InputField from './InputField'

export default function QuestionForm({allQuestions , activeQuestion}) {
  return (
    <>

     <div className='mb-7'>
            
      <div className='flex justify-between items-center mb-5'>
          <span className='text-sm'>Question {activeQuestion + 1} of {allQuestions.length}</span>
          <span className='text-md'>14:59</span>
      </div>
      <div className='hidden sm:flex gap-3'>
      {allQuestions.map((question: unknown, index: string) => 
          <div key={index}>
              <div className={`block w-2.5 h-2.5 rounded-full ${allQuestions?.indexOf(question) === activeQuestion ? 'bg-main' : 'bg-[#D9D9D9]'}`}></div>
          </div>
          )} 
      </div>

    </div>
    
      {allQuestions.map((question, index) => {
          if (index === activeQuestion) 
              return (
                <div key={index}>
                  <h3 className='text-xl mb-3'>{question?.question}</h3>

                  <ul  className="flex flex-col gap-4">

                      {question?.answers.map((answer, index) => {

                          return <li key={index} className='flex gap-4 items-center px-3 bg-[#EDEFF3] border rounded-lg'>
                          <InputField id={answer?.key} type={'radio'} name={'answer'}/>
                          <label htmlFor={answer?.key} className='text-md w-full py-3'>{answer?.answer}</label>
                          </li>
                      })}
                      
                  </ul>
                </div>
              )   
      })}
    </>
  )
}
