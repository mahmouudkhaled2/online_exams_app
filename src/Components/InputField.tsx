"use client"

import { InputFieldProps } from "../customTypes";


export default function InputField({type, id, handleChange, placeholder, customStyles} : InputFieldProps) {
  return (
    <div>
      <input
        type={type}
        id={id}
        onChange={ handleChange}
        className={`w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none shadow-md focus:border-blue-500  ${customStyles}`}
        placeholder={placeholder}
      />
  </div>
  )
}
