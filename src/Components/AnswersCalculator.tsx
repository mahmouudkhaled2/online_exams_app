import React from 'react'
import CustomButton from './CustomButton'
import { useAppDispatch } from '../lib/customs/hooks';
import { prevQuestion } from '../lib/Redux/slices/QuestionsSlice';


export default function AnswersCalculator({ setIsDone } : {
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
}) {


  const dispatch = useAppDispatch();

  return (
    <div>
      <h3 className="mb-7 text-lg font-medium ">Your Score</h3>


    <div className='flex justify-center items-center gap-20'>

      <div className="relative w-32 h-32 rounded-full bg-white flex items-center justify-center overflow-hidden">
        <div className="absolute w-full h-full clip-circle"  style={{background: 'conic-gradient(#02369c 0% 79%, transparent 79% 80%, #cc1010 80% 99%, transparent 99% 100%)'}}>
        </div>
      
        <div className="absolute w-[120px] h-[120px] bg-white rounded-full flex items-center justify-center">
          <span className="text-lg font-bold">80%</span>
        </div>
      </div>

      <div>

        <p className='flex gap-3 mb-3'>
          Correct 
          <span className='w-8 h-8 flex justify-center items-center rounded-full border border-[#02369c] text-[#02369c]'>18</span>
        </p>

        <p className='flex gap-3'>
          Correct 
          <span className='w-8 h-8 flex justify-center items-center rounded-full border border-[#cc1010] text-[#cc1010]'>7</span>
        </p>

      </div>

    </div>
      

    <div className="btns flex gap-5 mt-7">
    
                <CustomButton 
                    handleClick={() => {
                      dispatch(prevQuestion())
                      setIsDone(false)  
                    }}
                    // disabled={}
                    additionalStyles={`border border-main text-main hover:text-[#314fe3]`} 
                    title={"Back"}
                    />
    
                    <CustomButton 
                    // handleClick={}
                    // disabled={}
                    additionalStyles={`bg-main hover:bg-[#314fe3] text-white`} 
                    title={"Show Results"}
                    />
    
                </div>


    </div>
  )
}
