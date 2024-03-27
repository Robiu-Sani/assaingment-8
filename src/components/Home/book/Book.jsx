import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { saveReadBook , getBookFromLocalStore , saveWishBook , getWishBook , getCompareBook , saveCompareBook} from '../../../utility/LocalStorage.js'
import 'react-toastify/dist/ReactToastify.css';

export default function Book() {
    const books = useLoaderData();
    const { id } = useParams();
    const [checkList, setCheckList] = useState([]);
    const [checkWish, setCheckWish] = useState([]);
    const [checkCompare, setCompare] = useState([]);
    const book = books.filter(book => book.bookId == id)[0]; 

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    useEffect(() => {
        const readBookItem = getBookFromLocalStore();
        setCheckList(readBookItem);
        const wishBooksStorage = getWishBook();
        setCheckWish(wishBooksStorage);
        const compareBookStore = getCompareBook();
        setCompare(compareBookStore);
    }, []);

    const handleAddRead = () => {
        if (!checkList.some(check => check.bookId === book.bookId)) {
            saveReadBook(book);
            setCheckList([...checkList , book])
            toast("This book is added successfully in your read list");
        } else {
            toast.warn('This book is already added in your read list');
        }
    };

    const handleWishList = () => {
        if (checkList.some(check => check.bookId === book.bookId)) {
            toast.error("This book is already added in your read list");
        } else if (checkWish.some(check => check.bookId === book.bookId)) {
            toast.warn('This book is already added in your wish list');
        } else {
            saveWishBook(book);
            setCheckWish([...checkWish , book])
            toast("This book is added successfully in your wish list");
        }
    };

    const handleCompareList = () => {
        if (!checkCompare.some(check => check.bookId === book.bookId)) {
            saveCompareBook(book);
            setCompare([...checkCompare , book])
            toast("This book is added successfully in your compare list");
        } else {
            toast.warn('This book is already added in your compare list');
        }
    }

    return (
        <div className='my-10 p-3 gap-3 container mx-auto bg-gray-100 rounded-md grid grid-cols-1 md:grid-cols-2'>
            <div className="w-full p-10 flex justify-center bg-white rounded-md items-center">
                <img className='max-w-full max-h-full'
                 src={image}
                  alt={bookName} />
            </div>
            <div className="w-full p-1">
                <h1 className='text-3xl m-2 text-black'>{bookName}</h1>
                <p className='text-xl text-gray-700 mx-5 my-3'>By : {author}</p><hr /><hr />
                <h2 className='text-xl text-black m-3'>{category}</h2><hr />
                <p className='m-3 text-gray-700'><span className='text-black'>Review : </span>{review}</p>
                <div className="w-full my-5 flex flex-wrap gap-4">
                    {tags.map((tag, idx) => <a className='text-md text-green-500' key={idx}>#{tag}</a>)}
                </div><hr /><hr />
                <table className="max-w-[300px] m-3">
                    <tbody>
                        <tr>
                            <td className='text-gray-700'>Number of pages: </td>
                            <td className='text-black'>{totalPages}</td>
                        </tr>
                        <tr>
                            <td className='text-gray-700'>Publisher : </td>
                            <td className='text-black'>{publisher}</td>
                        </tr>
                        <tr>
                            <td className='pr-3 text-gray-700'>Year of publishing :</td>
                            <td className='text-black'>{yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td className='text-gray-700'>Rating :</td>
                            <td className='text-black'>{rating}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="w-full p-3 flex gap-3">
                    <button onClick={() => handleAddRead(book[0])} className='btn bg-white px-8'>Read</button>
                    <button onClick={() => handleWishList(book[0])} className='btn bg-blue-600 text-white hover:text-black px-8'>Wishlist</button>
                    <button onClick={() => handleCompareList(book[0])} className='btn bg-green-600 text-white hover:text-black px-8'>Compare</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}
