import { useEffect } from 'react';
import { useState } from 'react';
import {getBookFromLocalStore  , getWishBook , getCompareBook } from '../../utility/LocalStorage';
import CompareChart from './CompareChart/CompareChart';
import { MdDeleteOutline } from "react-icons/md";

export default function BookCompare() {

    const [readBook , setReedBook] = useState([]);
    const [wishBook , setWishBook] = useState([]);
    const [compareBook , setCompareBook] = useState([])

    useEffect(()=> {
        const readBookStore = getBookFromLocalStore();
        const wishBookStore = getWishBook();
        const compareBookStore = getCompareBook();
        setReedBook(readBookStore)
        setWishBook(wishBookStore)
        setCompareBook(compareBookStore)
    },[]);

    const handleclickForread = () => {
        setCompareBook(readBook)
    }

    const handleclickForwish = () => {
        setCompareBook(wishBook)
    }

    const handleclickForCustom = () => {
        setCompareBook(compareBook)
    }

    const handleDelete = (item) => {
        const index = compareBook.findIndex(e => e.bookId === item.bookId);
    
        if (index !== -1) {
            const updatedCompareBook = [...compareBook.slice(0, index), ...compareBook.slice(index + 1)];
            
            setCompareBook(updatedCompareBook);
            setCustomState(updatedCompareBook);
            localStorage.setItem('compareBook', JSON.stringify(updatedCompareBook));
        }
    }

  return (
    <div className='container px-2 py-8 mx-auto'>
        <div className="w-full my-8 grid grid-cols-1 sm:grid-cols-3 gap-5 px-10">
            <button onClick={handleclickForread} className='w-full btn bg-green-500 text-white'> Compare Read List </button>
            <button onClick={handleclickForwish} className='w-full btn bg-green-500 text-white'> Compare Wish List </button>
            <button onClick={handleclickForCustom} className='w-full btn bg-green-500 text-white'> Custom Compare List </button>
        </div>

      <CompareChart customState={compareBook}/>

        <div className="w-full my-8 grid grid-cols-1 sm:grid-cols-3 gap-5 px-10">
            <div className="w-full flex flex-col gap-2">
                <div className="bg-green-500 text-white p-2 rounded-md text-center">Compare Book List</div>
                {compareBook.map((book , idx) => <div key={idx} className='bg-green-100 p-2 rounded-md flex items-center justify-between'>
                    <div className="">
                    <p> Book :{book.bookName}</p>
                    <small> Author :{book.author}</small>
                    </div>
                    <MdDeleteOutline onClick={() => handleDelete(book)} className='text-xl cursor-pointer' />
                </div>)}
            </div>
            <div className="w-full flex flex-col gap-2">
                <div className="bg-green-500 text-white p-2 rounded-md text-center">Wish Book List</div>
                {wishBook.map((book , idx) => <div key={idx} className='bg-green-100 p-2 rounded-md'>
                <p> Book :{book.bookName}</p>
                    <small> Author :{book.author}</small>
                </div>)}
            </div>
            <div className="w-full flex flex-col gap-2">
                <div className="bg-green-500 text-white p-2 rounded-md text-center">Read Book List</div>
                {readBook.map((book , idx) => <div key={idx} className='bg-green-100 p-2 rounded-md'>
                <p> Book :{book.bookName}</p>
                    <small> Author :{book.author}</small>
                </div>)}
            </div>
        </div>

    </div>
  )
}
