"use client"

import { InputFieldProps } from "../types/customTypes";


export default function InputField({type, id, name, handleChange, placeholder, customStyles} : InputFieldProps) {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        onChange={ handleChange}
        className={`${type !== 'radio' ? 'w-full bg-gray-50 border border-gray-300 text-sm rounded-lg block p-3 shadow-md focus:border-blue-500' : ''} outline-none ${customStyles}`}
        placeholder={placeholder}
      />
  </div>
  )
}
