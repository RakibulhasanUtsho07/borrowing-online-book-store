"use client"
import { authClient } from '@/lib/auth-client'
import Image from 'next/image'
import userAvatar from "@/assets/user.png"
import { MdOutlineBrowserUpdated } from 'react-icons/md'
import { useEffect, useState } from 'react'

function MyProfilePage() {
 const [updatedName, setUpdatedName] = useState("")
 const [isEditing, setIsEditing] = useState(false)

  const { data: session } = authClient.useSession()
  const user = session?.user
  console.log(session, "session")
  useEffect( () =>{
    if(user?.name){
      setUpdatedName(user?.name)
    }
   
  },[user?.name])
  // const handleUpdateName = async()=> {
  //   try{
  //    await authClient.user.update({
  //       name: updatedName
  //     },{
  //     onSuccess: ()=> {
  //       alert("Update Your Name Successfully ")
  //       setIsEditing(false)
  //     }, 
  //     onError: (ctx) =>{
  //       alert(ctx.error.message)
  //     }
  //   })
  //   }
  //   catch (err){
  //     console.error("Update Failed", err)
  //   }
    
  //   }
 const handleUpdateName = async () => {
    console.log("Updating name to:", updatedName);
    try {
        const res = await authClient.user.update({
            name: updatedName
        }, {
            onSuccess: () => {
                console.log("Success callback triggered");
                setIsEditing(false);
                window.location.reload();
            },
            onError: (ctx) => {
                console.error("Error from Better-Auth:", ctx.error);
                alert(ctx.error?.message || ctx.error?.statusText || "Something went wrong");
            }
        });
        console.log("Response from server:", res);
    } catch (err) {
        console.error("Critical Failure:", err);
    }
}
  
  return (
    <div className=' mt-10 p-3 container mx-auto'>
      <div className=''>
        <Image className='rounded-full mb-3 border border-2 border-black w-[250px] h-[250px] mx-auto' src={user?.image || userAvatar} width={250} height={250} alt={user?.name || "User Profile"} />

        <div className='flex gap-5 justify-center'>
          {
            isEditing ?(<div className='flex flex-col sm-flex-row items-center gap-2'>
              
              <input
              type="text"
              value= {updatedName}
              onChange={(e)=> setUpdatedName(e.target.value)}
              className="input input-bordered input-sm text-lg"
              autoFocus /> 
              
            
            <div className='flex gap-2'>
              <button onClick={handleUpdateName} className='btn btn-success btn-sm text-white'>Update</button>
              <button onClick={()=> setIsEditing(false)} className='btn btn-ghost btn-sm text-red-500 border border-red-200'>Cancel</button>
            </div>
            </div> ):
            <div className='flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full border border-gray-200'>
              <p className='text-2xl font-semibold text-center'>{user?.name || "Guaist Name"}</p>
              <button onClick={() => setIsEditing(true)} className="p-1 hover:bg-emerald-100 rounded-full transition-colors"
                    title="Edit Name">
                      <MdOutlineBrowserUpdated  size={22} className={`my-auto cursor-pointer hover:text-emerald-600 transition-colors ${isEditing ? 'text-emerald-500' : 'text-gray-600'}`} />
                    </button>
            </div>
          }
          
        </div>
       
      </div>
    </div>
  )
}

export default MyProfilePage
