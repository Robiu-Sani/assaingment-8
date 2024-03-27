import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="container mx-auto navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to={`/`}>Home</NavLink></li>
      <li><NavLink to={`/category`}>Book Category</NavLink></li>
      <li><NavLink to={`/ListedBook`}>Listed Books</NavLink></li>
      <li><NavLink to={`/PagesToRead`}>Pages to Read</NavLink></li>
      <li><NavLink to={`/BookCompare`}>Book Compare</NavLink></li>
      </ul>
    </div>
    <Link to={`/`} className="btn btn-ghost text-xl">Book <span className='text-green-500'>Vibe</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={`/`}>Home</NavLink></li>
      <li><NavLink to={`/category`}>Book Category</NavLink></li>
      <li><NavLink to={`/ListedBook`}>Listed Books</NavLink></li>
      <li><NavLink to={`/PagesToRead`}>Pages to Read</NavLink></li>
      <li><NavLink to={`/BookCompare`}>Book Compare</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <a className="btn text-white bg-green-500 hover:bg-green-800">Sing In</a>
    <a className="btn text-white bg-blue-500 hover:bg-blue-800">Sing Up</a>
  </div>
</div>
  )
}
