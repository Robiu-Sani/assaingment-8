import { FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Books(props) {
  const {bookId, bookName, author, image, category, tags, rating} = props.book;

  const navigate = useNavigate()

  const handlenavigate = () => {
    navigate(`../../../book/${bookId}`)
  }
  return (
    <div onClick={handlenavigate}>
      <div  className='w-full p-3 shadow-md hover:scale-105 rounded-md' style={{border:'1px solid rgb(209, 207, 207)',}}>
      <div className="w-full h-[300px] flex justify-center items-center">
        <img className='h-full' src={image} alt={bookName} />
      </div>
      <div className="w-full my-5 justify-center items-center flex flex-wrap gap-5">
          {tags.map((tag, idx) => <a className='text-md text-green-500' key={idx}>{tag}</a>)}
        </div>
        <h2 className='text-2xl text-black font-bold text-center m-3'>{bookName}</h2>
        <p className='text-center text-gray-700 text-xl'>By : {author}</p>
        <div className="w-full flex mx-3 my-5 justify-between items-center">
          <span>{category}</span>
          <span className=" flex gap-2 items-center mx-7">{rating} <FaRegStar /></span>
        </div>
      </div>
    </div>
  )
}
