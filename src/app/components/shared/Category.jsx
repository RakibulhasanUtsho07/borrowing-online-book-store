import Link from 'next/link'
import React from 'react'

function BooksCategory({activeId}) {
  const categories =  [
  {
    "id": 1,
    "category_name": "Story"
  },
  {
    "id": 2,
    "category_name": "Tech"
  },
  {
    "id": 3,
    "category_name": "Science"
  },
  {
    "id": 4,
    "category_name": "Science Fiction"
  },
  {
    "id": 5,
    "category_name": "Fantasy"
  },
  {
    "id": 6,
    "category_name": "Biography"
  },
  {
    "id": 7,
    "category_name": "History"
  },
  {
    "id": 8,
    "category_name": "Self-Help"
  },
  {
    "id": 9,
    "category_name": "Romance"
  },
  {
    "id": 10,
    "category_name": "Horror"
  }
]
  return (
    <div className='space-y-3'>
       {
        categories.map((category, ind)=> <Link href={`/category/${category.id}`} key={ind} className={`btn w-full rounded bg-white border border-purple-600 ${activeId === category.id ? "bg-purple-500 " :""}`}>
            {category.category_name}
        </Link>)
       }
    </div>
  )
}

export default BooksCategory
