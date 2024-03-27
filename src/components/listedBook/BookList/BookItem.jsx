import { CiLocationOn } from "react-icons/ci";
import { MdOutlineGroup } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function BookItem(props) {

    const {bookId, publisher, bookName, author, image,totalPages, category, tags, rating , yearOfPublishing} = props.item
    
  return (
    <div className='w-full p-5 bordercs rounded-md flex justify-center items-center flex-col bg-gray-200 md:flex-row my-4 gap-4'>
      <div className="w-full md:w-[300px] h-[250px] flex justify-center rounded-md p-4 bg-white  items-center">
        <img src={image} alt="this is book image" className='h-full'/>
      </div>
      <div className="w-full md:w-[calc(100% - 300px)] p-2">
        <h1 className='text-2xl m-4'>{bookName}</h1>
        <p className='text-xl text-gray-700 mx-6 my-2'>By : {author}</p>
        <div className="flex flex-wrap gap-4 my-4">
            <div className="flex gap-3 flex-wrap items-center justify-center">
                <div className='font-bold'>Tags : </div>
                {tags.map(tag => <div className='text-green-500 px-5 bg-green-100 p-2 rounded-full'>#{tag}</div>)}
            </div>
            <div className="flex justify-center items-center ml-5 gap-3 text-xl"><CiLocationOn /> Year of Publishing: {yearOfPublishing}</div>
        </div>
        <div className="flex justify-start items-center flex-wrap my-3 gap-8">
            <div className="flex justify-center gap-3 text-xl items-center">
                <MdOutlineGroup />
                <p>Publisher: {publisher}</p>
            </div>

            <div className="flex justify-center gap-3 text-xl items-center">
                <RiPagesLine />
                <p>Pages: {totalPages}</p>
            </div>
        </div>
        <div className="w-full h-[1px]" style={{border: '1px solid gray'}}></div>
        <div className="flex gap-5 my-3 flex-wrap">
            <div className="px-7 py-2  bg-blue-200 text-blue-600 rounded-full"> Category: {category} </div>
            <div className="px-7 py-2  bg-orange-200 text-orange-600 rounded-full"> Rating: {rating} </div>
            <Link to={`../book/${bookId}`} className="px-7 py-2  bg-green-500 text-white rounded-full cursor-pointer"> View Details </Link>
        </div>
      </div>
    </div>
  )
}
