/* eslint-disable prefer-const */
'use client'
import { useState } from 'react';
import AnswersCalculator from './AnswersCalculator';
import QuestionForm from './QuestionForm';
import CustomButton from './CustomButton';
import { useAppDispatch, useAppSelector } from '../lib/customs/hooks';
import { RootState } from '../lib/Redux/store/store';
import { nextQuestion, prevQuestion } from '../lib/Redux/slices/QuestionsSlice';

export default function QuestionContainer() {

    const [isDone, setIsDone] = useState<boolean>(false);

    const {allQuestions, activeQuestion} = useAppSelector((state: RootState) => state.questions);

    console.log("All Question From Container: ", allQuestions.length);

    const dispatch = useAppDispatch();
    

  return (
    <>
       
    { isDone ? 
    
        <AnswersCalculator setIsDone={setIsDone}/> 

    :  
        <div>
            <QuestionForm activeQuestion={activeQuestion}/>

            <div className="btns flex gap-5 mt-7">

            <CustomButton 
                handleClick={() => {
                    dispatch(prevQuestion())
                }}
                disabled={activeQuestion === 0}
                additionalStyles={`${activeQuestion === 0? 'opacity-60 cursor-not-allowed' : ''} border border-main text-main hover:text-[#314fe3]`} 
                title={"Back"}
                />

                <CustomButton 
                handleClick={() => {
                    dispatch(nextQuestion())
                    console.log(activeQuestion);
                    
                    if (activeQuestion === allQuestions.length - 1)
                        setIsDone(true)
                }}
                // disabled={false}
                additionalStyles={`bg-main hover:bg-[#314fe3] text-white`} 
                title={"Next"}
                />

            </div>
        </div>
    }

    </>
  )
}
