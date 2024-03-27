import React from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import Books from '../Home/books/Books';

export default function Category() {
    const data = useLoaderData();
    const categories = data.map(item => item.category);
    const uniqueCategories = [...new Set(categories)];
    const [categoryData , setCategoryData] = useState([])

    
    const handleCategory = item => {
        const categoryData = data.filter((element) => element.category === item);
        setCategoryData(categoryData);
    };

    const handleAllBook = () => {
        setCategoryData(data)
    }

  return (
    <div className='container mx-auto pt-3 pb-10 px-2'>
        <div className="w-full flex justify-center items-center">
        {/* <input type="search" onChange={() => handleChange()} placeholder='Search By Book Name' className='input mx-auto my-5 bg-gray-200 w-full sm:w-[400px]'/> */}
        </div>
        <div className="scrollNone overflow-x-scroll flex gap-3 justify-center items-center">
            <button onClick={handleAllBook} className='btn px-7 bg-green-200 text-green-500'> All Books</button>
            {uniqueCategories.map((item, idx) => <button key={idx} onClick={() => handleCategory(item)} className='btn px-7 bg-green-200 text-green-500'>{item}</button>)}
        </div>

        <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10">
            {categoryData.length == 0 ? data.map((book, idx) => <Books key={idx} book={book}/>) : categoryData.map((book, idx) => <Books key={idx} book={book}/>)}
        </div>
    </div>
  )
}
