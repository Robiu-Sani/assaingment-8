import { NavLink } from 'react-router-dom'
import bannerBook from '../../../images/bannerBook.png'

export default function Banner() {
  return (
    <div className='container flex justify-center items-center py-5 px-2 h-auto md:h-[550px] bg-gray-50 rounded-md mx-auto'>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="w-full flex justify-center flex-col items-center md:items-start">
            <h1 className='text-3xl sm:text-4xl lg:text-6xl leading-[70px] my-9 font-bold'>Books to freshen up <br /> your bookshelf</h1>
            <NavLink  className='btn bg-green-500 text-white text-md px-[25px]' to={`/ListedBook`}>View The List</NavLink>
        </div>
        <div className="w-full flex justify-center items-center">
            <img src={bannerBook} alt="this is banner book pik" />
        </div>
      </div>
    </div>
  )
}
