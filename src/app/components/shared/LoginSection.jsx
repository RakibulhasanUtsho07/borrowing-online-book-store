"use client"
import { authClient } from '@/lib/auth-client'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

function LoginSection() {
  const handleGoogleSingIn = async()=>{
    await authClient.signIn.social({
      provider: "google"
    })
  }
  return (
    <div className='space-y-3'>
      <div onClick={handleGoogleSingIn} className='flex gap-2 btn bg-white border border-green-400 w-full '>
        <FcGoogle size={24} className='my-auto' />
        <button className='text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853]'>Google</button>
      </div>
      <div className='flex gap-2 btn bg-white border border-blue-900 w-full'>
        <FaGithub size={24} className='my-auto' />
        <button className='text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#79c0ff] via-[#d2a8ff] to-[#ff7b72]'>Github</button>
      </div>
    </div>
  )
}

export default LoginSection
