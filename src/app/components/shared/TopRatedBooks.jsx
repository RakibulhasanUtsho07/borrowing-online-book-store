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
    <div className='container mx-auto p-3 bg-green-500 mt-10 rounded'>
      <Marquee>
       <div className='flex gap-20 '>
         {
            topBooks.map((book, ind) => <span key={ind} className='mr-10'>
              <p ><span className='text-xl font-bold '>{book.highlight.split(":")[0]} </span>:<span className='text-[16px] text-white'> {book.highlight.split(":")[1]}</span></p>
            </span>)
        }
       </div>
      </Marquee>
    </div>
  )
}

export default TopRatedBooks
