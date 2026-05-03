import { Span } from 'next/dist/trace'
import React from 'react'
import Marquee from 'react-fast-marquee'

function TopRatedBooks() {
  const topBooks = [
    {
      "id": 5,
      "title": "The Algorithm's Apprentice",
      "highlight": "New Release: Can a machine develop a soul?"
    },
    {
      "id": 3,
      "title": "Mastering Rust",
      "highlight": "Best Seller: The ultimate guide to memory-safe programming."
    },
    {
      "id": 9,
      "title": "Midnight in Kyoto",
      "highlight": "Editor's Choice: A lyrical journey through fate and art."
    },
    {
      "id": 2,
      "title": "Quantum Leap: 2026",
      "highlight": "Trending: Exploring the breakthroughs of the quantum era."
    }
  ]
  return (
    <div className='container mx-auto mt-10sz p-3 mt-10 bg-[#f7f7f7]  rounded animate__animated animate__fadeInUp'>
      <Marquee>
       <div className='flex  gap-20'>
         {
            topBooks.map((book, ind) => <span key={ind} className=''>
              <p className='mx-10' ><span className='text-xl font-bold text-green-300 '>{book.highlight.split(":")[0]} :</span><span className='text-[16px] text-[#333333]'> {book.highlight.split(":")[1]}</span></p>
            </span>)
        }
       </div>
      </Marquee>
    </div>
  )
}

export default TopRatedBooks
