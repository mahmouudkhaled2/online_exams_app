'use client'

import { CustomButtonType } from "../types/customTypes"

export default function CustomButton({title, additionalStyles, handleClick, disabled} : CustomButtonType) {
  return (
    
    <button 
    onClick={handleClick}
    disabled={disabled}
    className={`${additionalStyles} px-5 py-2.5 rounded-2xl flex-1 text-lg font-medium outline-none`}>
    {title}
    </button>
  )
}
