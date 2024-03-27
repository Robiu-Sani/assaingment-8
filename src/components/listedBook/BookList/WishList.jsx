import React from 'react'
import BookItem from './BookItem'

export default function WishList(props) {
  const items = props.wishBooks
  return (
    <div role="tabpanel" className="tab-content borderLine bg-base-100 border-base-300 rounded-none p-6">
      {items.length == 0 ? <h1 className='text-2xl'>There is no item added in this wish list </h1> : items.map(item => <BookItem key={item.bookId} item={item}></BookItem>)}
    </div>
  )
}
