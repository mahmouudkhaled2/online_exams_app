'use client'
import { useState } from 'react';
import AnswersCalculator from './AnswersCalculator';
import QuestionForm from './QuestionForm';
import CustomButton from './CustomButton';

export default function QuestionContainer({allQuestions}) {

    let [activeQuestion, setActiveQuestion] = useState<number>(0);
    const [isDone, setIsDone] = useState<boolean>(false);

    // console.log("All Questions", allQuestions);
    

  return (
    <>
       
    { isDone ? 
    
        <AnswersCalculator activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} setIsDone={setIsDone}/> 

    :  
        <div>
            <QuestionForm allQuestions={allQuestions} activeQuestion={activeQuestion}/>

            <div className="btns flex gap-5 mt-7">

            <CustomButton 
                handleClick={() => {setActiveQuestion(--activeQuestion)}}
                disabled={activeQuestion === 0}
                additionalStyles={`${activeQuestion === 0? 'opacity-60 cursor-not-allowed' : ''} border border-main text-main hover:text-[#314fe3]`} 
                title={"Back"}
                />

                <CustomButton 
                handleClick={() => {
                    setActiveQuestion(++activeQuestion)
                    if (activeQuestion === allQuestions.length)
                        setIsDone(true)
                }}
                // disabled={activeQuestion === allQuestions.length - 1}
                additionalStyles={`bg-main hover:bg-[#314fe3] text-white`} 
                title={"Next"}
                />

            </div>
        </div>
    }

    </>
  )
}
