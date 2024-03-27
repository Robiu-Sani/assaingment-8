import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Banner from './banner/Banner'
import Books from './books/Books';

export default function Home() {
    const books = useLoaderData();
  return (
    <div>
        <Banner/>
        <div className="container mx-auto px-2 py-10">
            <h1 className="text-center text-4xl my-10 font-bold">Books</h1>
            <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {books.map((book, idx) => <Books key={idx} book={book}/>)}
            </div>
        </div>
    </div>
  )
}
