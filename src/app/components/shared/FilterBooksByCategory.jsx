import React from 'react'

 function FilterBooksByCategory({books, setDisplayBooks}) {
    
    
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
const handleFilter = (categoryName)=>{
  const FilteredBooks = books.filter(f => f.category === categoryName)
  if(FilteredBooks){
    setDisplayBooks(FilteredBooks)
  }

}

    return (
        <div>
            <div className="dropdown  dropdown-bottom dropdown-end mt-10 ">
                <div tabIndex={0} role="button" className="btn m-1  btn-outline px-8 p-3 mr-10">Filter Books ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-green-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    {
                        categories.map((category, ind) => <li onClick={()=> handleFilter(category.category_name)} className=' font-medium text-xl p-2 border-b border-purple-300' key={ind}>{category.category_name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default FilterBooksByCategory
