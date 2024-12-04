import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import Tags from './Tags';
import { NavLink } from 'react-router-dom';

const Books = ({books}) => {
    const {bookId,bookName,image,author,category,tags}=books;

    return (
        <div>
       <NavLink to={`/BookDetailsPage/${bookId}`}>
       <div className="card card-compact bg-base-100  shadow-xl p-5 border border-[#F3F3F3]">
        <figure className='bg-[#F3F3F3] py-5 rounded-lg'>
          <img 
            src={image}
            alt="Shoes" />
         </figure>
         <div className="card-body">
            <div className=' flex gap-3'>
            {
                tags.map((tag, idx)=><Tags key={idx} tag={tag}></Tags>)
            }
            </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>

          <div className=' flex justify-between'>
            <p>{category}</p>
           <div className=' flex gap-2'> <span>5.00</span> <FaRegStar className=' mt-1'/></div>
          </div>
         </div>
        </div>
       </NavLink>
        </div>
    );
};

Books.propTypes={
    books: PropTypes.object
}
export default Books;