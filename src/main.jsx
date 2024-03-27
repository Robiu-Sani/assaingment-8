import React from 'react'
import ReactDOM from 'react-dom/client'
import Error from './components/ErrorComponents/Error';
import Book from './components/Home/book/Book';
import Home from './components/Home/Home';
import ListedBook from './components/listedBook/ListedBook';
import PagesToRead from './components/pagesToRead/PagesToRead';
import Root from './components/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Category from './components/category/Category';
import BookCompare from './components/bookCompare/BookCompare';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement : <Error />,
    children : [
      {
        path: '/',
        loader : () => fetch('/Books.json'),
        element : <Home/>
      },
      {
        path : '/ListedBook',
        element : <ListedBook />
      },
      {
        path: '/category',
        loader : () => fetch('/Books.json'),
        element : <Category />
      },
      {
        path: '/PagesToRead',
        element : <PagesToRead />
      },
      {
        path: '/BookCompare',
        loader : () => fetch('/Books.json'),
        element: <BookCompare />
      },
      {
        path: 'book/:id',
        loader : () => fetch('/Books.json'),
        element: <Book />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
