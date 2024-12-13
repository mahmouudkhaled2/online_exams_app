'use client'

import Link from "next/link";
import InputField from "../../../Components/InputField";
import IdentityProviders from "../../../Components/IdentityProviders";
import Welcome from "../../../Components/Welcome";
import SignNavList from "../../../Components/SignNavList";
import SubmitButton from "../../../Components/SubmitButton";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import { LoginValues } from "../../../types/customTypes";
import { LoginSchema } from "../../../Schemas/AuthValidationSchemas";
import { useRouter } from "next/navigation";





export default function LoginPage() {

  const router = useRouter();
  const [isError, setIsError] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const handleSubmit = async (values: LoginValues) => {

    const loginData = {
      email: values.email,
      password: values.password,
      callbackUrl: '/',
      redirect: false,
    }

    const login = await signIn('credentials', loginData);

    
    if (login?.ok) {
      router.push('/');
    } else {
      setIsError(true);
    }

  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    }, 

    validationSchema: LoginSchema,

    onSubmit: handleSubmit
  });


  return (
    <section className="h-screen">
    <div className=" grid grid-cols-1 md:grid-cols-12 mx-auto overflow-hidden">

      <Welcome />

      <div className="col-span-7 h-[700px]">
        
        <SignNavList />

        <div className="mx-auto md:mt-10 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
          <div className="p-6 space-y-4 md:space-y-5 sm:p-6">

            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in
            </h1>

            <form className="space-y-4 md:space-y-7" onSubmit={formik.handleSubmit} >

              {isError && <div className="p-3 text-center text-sm text-red-600 bg-red-100 rounded-md transition-all">Incorrect Email or Password !</div>  
              }


              <div className="email-input">
                <InputField 
                type={"email"} 
                id={"email"} 
                handleChange={formik.handleChange} 
                handleBlur={formik.handleBlur}  
                placeholder="Enter Email"  
                customStyles={`${ formik.errors.email && formik.touched.email || isError ? 'border-red-500' : ''}`} />

                {formik.errors.email && formik.touched.email && <div className="px-2 text-sm text-red-600   dark:text-red-400 mt-2" role="alert"> {formik.errors.email} </div>
                }
              </div>

              <div className="password-input relative">
                <InputField 
                type={ hidePassword ? "password" : "text" } 
                id={"password"} 
                handleChange={formik.handleChange} 
                handleBlur={formik.handleBlur} 
                placeholder="••••••••"
                customStyles={`${formik.errors.password && formik.touched.password || isError ? 'border-red-500' : ''}`} />


                <span className="absolute top-1/2 translate-y-[-50%] right-3 text-gray-500 cursor-pointer">
                  {
                  hidePassword ? 
                  <i className="fa-regular fa-eye" onClick={() => setHidePassword(false)}></i> :
                  <i className="fa-regular fa-eye-slash" onClick={() => setHidePassword(true)}></i>
                  }
                </span>
 
                {formik.errors.password && formik.touched.password && <div className="px-2 text-sm text-red-600   dark:text-red-400 mt-2" role="alert"> {formik.errors.password} </div>
                }
              </div>

              <div className="text-sm text-end">
                <Link href="/forget-password" className="text-blue-800">Recover Password ?</Link>
              </div>

              <SubmitButton title={"Sign in"} />

            </form>
          </div>
        </div>

      <p className="max-w-md mx-auto text-[15px] text-[#6c737f] text-center relative">
        <span className="continue-with px-1 relative">Or Continue with</span>
      </p>

        <IdentityProviders/>

      </div>
    </div>
    </section>
  )
}
