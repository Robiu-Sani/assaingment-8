import React from 'react'
import Read from './Read'
import WishList from './WishList'

export default function Tab(props) {
  return (
    <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_1" role="tab" className="tab text-xl tab-width " aria-label=" Read Books " checked />
  <Read readbooks={props.readbooks}/>

  <input type="radio" name="my_tabs_1" role="tab" className="tab  text-xl tab-width" aria-label=" Wishlist Books " />
  <WishList wishBooks={props.wishBooks}/>
</div>
  )
}
