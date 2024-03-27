import React, { useEffect, useState } from 'react';
import { getBookFromLocalStore, getWishBook } from '../../utility/LocalStorage.js'; // Import getWishBook function
import Tab from './BookList/Tab';

export default function ListedBook() {
  const [readbooks, setReadBooks] = useState([]);  //arr.sort((a, b) => b - a);
  const [wishBooks, setWishBooks] = useState([]);
  
  useEffect(() => {
    const localStore = getBookFromLocalStore();
    setReadBooks(localStore);
    const wishItem = getWishBook(); // Call getWishBook function to get wish books data
    setWishBooks(wishItem);
  }, []);

  const handleRating = () => {
    const sortedBooks = readbooks.slice().sort((a, b) => b.rating - a.rating);
    const sortedWishBooks = wishBooks.slice().sort((a, b) => b.rating - a.rating);
    setReadBooks(sortedBooks);
    setWishBooks(sortedWishBooks);
  }

  const handleNumberofPAge =() => {
    const sortedBooks = readbooks.slice().sort((a, b) => b.totalPages - a.totalPages);
    const sortedWishBooks = wishBooks.slice().sort((a, b) => b.totalPages - a.totalPages);
    setReadBooks(sortedBooks);
    setWishBooks(sortedWishBooks);
  }

  const handlebyYear =() => {
    const sortedBooks = readbooks.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    const sortedWishBooks = wishBooks.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    setReadBooks(sortedBooks);
    setWishBooks(sortedWishBooks);
  }

  return (
    <div className='container mx-auto px-2 py-10'>
      <div className="w-full rounded-md bg-gray-200 p-5 flex justify-center items-center">
        <h1 className='text-2xl font-bold'>Books</h1>
      </div>
      <div className="w-full p-5 flex justify-center items-center">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className='bg-green-500 w-[200px] px-5 flex justify-between p-3 text-white hover:bg-green-700'>
                  Sort By
                </summary>
                <ul className="p-2 px-10 bg-base-100 rounded-t-none">
                  <li className='hover:bg-green-700 hover:text-white rounded-md' onClick={handleRating}><a>Rating</a></li>
                  <li className='hover:bg-green-700 hover:text-white rounded-md' onClick={handleNumberofPAge}><a>Number of pages</a></li>
                  <li className='hover:bg-green-700 hover:text-white rounded-md' onClick={handlebyYear}><a>Publisher year</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <Tab readbooks={readbooks} wishBooks={wishBooks} /> {/* Pass wishBooks as a prop */}
    </div>
  );
}
