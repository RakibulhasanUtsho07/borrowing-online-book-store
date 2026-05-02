import Image from 'next/image'
import React from 'react'

function NotFoundPage() {
  // Try changing this to an empty array [] to see the "Not Found" state
  const books = [
    // ... your books data ...
  ];

  // 1. Check if the books array is empty
  if (!books || books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-5 text-center">
        {/* Responsive Container for the Illustration */}
        <div className="relative w-full max-w-[300px] h-[250px] mb-6">
           <Image 
             src="https://illustrations.popsy.co/gray/falling.svg" 
             alt="No books found" 
             fill
             className="object-contain"
           />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">No Books Found</h2>
        <p className="text-gray-500 max-w-md">
          We couldn't find any books in this category right now. 
          Please check back later or explore our other collections.
        </p>
      </div>
    );
  }

  // 2. Normal render if books exist
  return (
    <div className='p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {books.map((book) => (
        <div key={book.id} className='border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow'>
          <span className='flex gap-2 mb-2 text-sm font-medium text-purple-600'>
            <p>{book.category}</p>
            <p>• 5.00</p>
          </span> 
          <h3 className='text-xl font-bold text-gray-900 leading-tight'>{book.title}</h3>
          <p className='text-md text-gray-600 mb-2'>{book.author}</p>
          <p className="text-sm text-gray-500 mb-4">Available: {book.available_quantity}</p>
          
          {/* Image Container with fallback color */}
          <div className="relative bg-gray-200 rounded-lg overflow-hidden aspect-[2/3] w-full max-w-[250px] mx-auto">
            <Image 
              src={book.image_url} 
              fill
              alt={book.title}
              className="object-cover"
              unoptimized={true} // Add this temporarily to bypass hostname errors
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default NotFoundPage;