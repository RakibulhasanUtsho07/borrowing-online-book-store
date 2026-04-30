import React from 'react'

function BooksCategory() {
  const categories =  [
  {
    "id": 1,
    "category_name": "Fiction"
  },
  {
    "id": 2,
    "category_name": "Non-Fiction"
  },
  {
    "id": 3,
    "category_name": "Mystery & Thriller"
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
        categories.map((category, ind)=> <button key={ind} className='btn w-full rounded bg-white border border-purple-600'>
            {category.category_name}
        </button>)
       }
    </div>
  )
}

export default BooksCategory
