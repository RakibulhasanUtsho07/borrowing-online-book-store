"use client"

// aAqW
import Link from "next/link"
import { useForm } from "react-hook-form"

function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const handleRegistration = async (data) => {
    const {email, name, photo, password}  = data;
    // e.preventDefault()
    // const email = e.target.email.value
    // const password = e.target.password.value
    // console.log(email, password)
    console.log(data, "data")
    const {data:res , error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/login",

    })
    console.log(res, error);
    if(error){
      alert(error.message)
    }
    if(res){
      alert("SingUp Successfully")
    }

  }

  return (
    <div className=' container max-h-[80vh] mx-auto flex justify-center items-center bg-slate-200 mt-10 rounded-2xl p-55'>
      <div className='p-10 rounded-xl  bg-white space-y-3'>
        <h3 className='text-2xl font-medium text-center'>Register your account</h3>
        <form onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Your Name</legend>
            <input type="text"
              {...register("name", { required: "Name field is required" })}
              className="input"
              placeholder="Type here Your name" />
            {errors.name && <p className='text-xs text-red-500'>{errors.name.message}</p>}

          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Your Photo URL</legend>
            <input type="text"
              {...register("photo", { required: "Photo URL field is required" })}
              className="input"
              placeholder="Type here Photo URL" />
            {errors.photo && <p className='text-xs text-red-500'>{errors.photo.message}</p>}

          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Your Email</legend>
            <input type="text"
              {...register("email", { required: "Email field is required" })}
              className="input"
              placeholder="Type here" />
            {errors.email && <p className='text-xs text-red-500'>{errors.email.message}</p>}

          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter Your Password</legend>
            <input type="password"
              {...register("password", { required: "Password field is required" })}
              className="input"
              placeholder="Type here" />
            {errors.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}

          </fieldset>
          <button className='btn bg-purple-700 w-full text-white mt-4'> Register </button>
        </form>



      </div>

    </div>
  )
}

export default RegisterPage
