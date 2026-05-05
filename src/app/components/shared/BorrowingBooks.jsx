"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import NotFoundPage from './NotFoundPage'
export const dynamic = 'force-dynamic';

 function BorrowingBooks({ id }) {
  const [books, setBooks] = useState([])
  const [loading, setLoading]= useState(true)
  useEffect(()=>{
    const getCategory = async () =>{
      try{
        const res = await fetch(`${window.location.origin}/books.json`)
      const categories = await res.json()
      const singleCategory = categories.find(category => category.category_id === Number(id))
      if(singleCategory){
        setBooks(singleCategory.categories)
      }
      else{
        setBooks([]);
      }
    }catch (error){
      console.error("Error fetching books", error)
      setBooks([]);
    } finally {
      setLoading(false)
    }
      }
      if(id){
        getCategory()
      }

  },[id])
  if(loading){
    return (
    <div className='flex justify-center items-center h-full'>
      <span className="loading loading-spinner text-success"></span>
    </div>
  )
  }

 
  console.log(books,"books")
  return (
    <div className='p-2 space-y-5'>
      { books.length === 0 ?
       <div>
        <NotFoundPage></NotFoundPage>
       </div>:
        books.map((book, ind) =>
          <div key={ind} className='space-y-4'>
            <span className='flex gap-2 mb-1'>
              <p className='font-semibold bg-green-400 text-white px-4 rounded-2xl p-1'>{book.category_name}</p>
              <div className='flex gap-1 bg-purple-200 px-4 p-1 rounded-2xl'>
                <FaStar className='my-auto text-yellow-400' />
                <p className=' font-medium'>5.00</p>
              </div>
            </span>
            <h3 className='text-3xl font-bold py-5 '>{book?.title}</h3>
            <div className='bg-blue-100 rounded '>
              <Image className='rounded mx-auto py-5' src={book?.image_url} width={250} height={300} alt={book?.title} />
            </div>
            <p className='text-xl font-bold'><span>Author :</span> <span className=''>{book?.author}</span></p>
            <p > <span className='font-medium'>Available : </span> {book?.available_quantity}</p>
            <p className='line-clamp-2 pl-2'>{book?.description}</p>
            <Link href={`/bookdetails/${book?.id}`} className='btn bg-amber-500 px-4 text-white'>Read More</Link>


            <hr className='border  border-gray-400 mb-10' />
          </div>

        )
      }
    </div>
  )
}

export default BorrowingBooks