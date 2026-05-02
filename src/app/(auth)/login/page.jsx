"use client"

import { FaEyeSlash } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

function LoginPage() {
   const { register, handleSubmit,formState: {errors} } = useForm()
  const handleLogin = ()=> {

  }
  return (
    <div>
       <div className=' container max-h-[80vh] mx-auto flex justify-center items-center bg-slate-200 p-55 mt-10'>
      <div className='p-10 rounded-xl  bg-white space-y-4'>
        <h3 className='text-2xl font-medium text-center'>Login your account</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Your Email</legend>
            <input type="text"
              {...register("email", {required : "Email field is required"})}
              className="input"
              placeholder="Type here" />
              {errors.email && <p className='text-xs text-red-500'>{errors.email.message}</p>}

          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Your Password</legend>
            <input type="password"
              {...register("password", {required : "Password field is required"})}
              className="input"
              placeholder="Type here" />
              {errors.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}
              <FaEyeSlash />
          </fieldset>
          <button className='btn bg-purple-700 w-full text-white mt-3'> Login </button>
        </form>

        <div className='flex gap-1'>
          <p className='text-[16px] text-[#706F6F]'>Don't have an account?</p>
          <Link className='text-orange-500 font-medium ' href={"/register"}>Register Now</Link>
        </div>

      </div>

    </div>
    </div>
  )
}

export default LoginPage
