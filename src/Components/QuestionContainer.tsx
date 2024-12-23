/* eslint-disable prefer-const */
'use client'
import { useState } from 'react';
import AnswersCalculator from './AnswersCalculator';
import QuestionForm from './QuestionForm';

export default function QuestionContainer() {

    const [isDone, setIsDone] = useState<boolean>(false);

  return (
    <>
       
    { isDone? 
            <AnswersCalculator/> 
            :  
            <QuestionForm setIsDone={setIsDone}/>
    }

    </>
  )
}
