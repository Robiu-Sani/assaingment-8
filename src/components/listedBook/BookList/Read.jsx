import React from 'react'
import BookItem from './BookItem'

export default function Read(props) {
  const items = props.readbooks
  return (
    <div role="tabpanel" className="tab-content borderLine rounded-none bg-base-100 border-base-300 p-6">
        {items.length == 0 ? <h1 className='text-2xl'>There is no item added in this read list </h1> : items.map(item => <BookItem key={item.bookId} item={item}></BookItem>)}
    </div>
  )
}
