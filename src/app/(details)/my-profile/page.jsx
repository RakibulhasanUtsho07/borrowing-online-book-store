"use client"
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'


function MyProfilePage() {
  const { data: session } = authClient.useSession()
  console.log(session, "session")
  return (
    <div className='mt-10 p-3 container mx-auto'>
      <Image className='rounded' src={session?.user?.image} width={200} height={300} alt={session?.user?.name}/>
      <p>{session?.user?.name}</p>
    </div>
  )
}

export default MyProfilePage
