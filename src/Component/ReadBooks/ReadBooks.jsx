import PropTypes from 'prop-types'; 
import { CiLocationOn } from "react-icons/ci";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlineFindInPage } from "react-icons/md";

const ReadBooks = ({readBooking}) => {
  const {image,bookName,author,yearOfPublishing,publisher,totalPages,category,rating,tags}=readBooking;

    return (
        <div className=' flex border my-6 rounded-xl p-8 gap-10'>
            <div className='w-[30%]  rounded-xl bg-[#F3F3F3]'>
              <div className='flex justify-center'>
              <img src={image} alt="" className='p-8 '/>
              </div>
            </div>
            <div className='w-[70%]'>
             <h1 className=' text-2xl font-medium'>{bookName}</h1>

             <div className=' text-lg my-3'>By: {author}</div>

             <div className=' flex gap-4'>
             <span className='flex gap-3'><span>Tag:</span> 
             <span className='flex gap-3'>
             {
                tags.map((tag, idx) => <span key={idx} className=' rounded-full  py-1 px-4 bg-[#F3F3F3]'>{tag}</span>)}
             </span>
             </span> 
             <span className=' flex gap-2'><CiLocationOn className='mt-1'/>Year of Publishing: {yearOfPublishing}</span></div>

             <div className='my-3 flex gap-4'>
              <span className='flex gap-2'><HiMiniUserGroup className='mt-1'/>Publisher: {publisher}</span>
              <span className='flex gap-2'><MdOutlineFindInPage className='mt-1'/> Page: {totalPages}</span>
             </div>
              <hr className=' border'/>
             <div className='my-3 flex gap-4'>
                <span className='bg-[#B5DAFF] rounded-full justify-center mt-3 py-1 px-2'>Category: {category}</span>
                <span className='bg-[#F6EFE2] rounded-full justify-center mt-3 py-1 px-2'>Rating: {rating}</span>
                <button className="btn">View Details</button>
             </div>
            </div>
        </div>
    );
};
ReadBooks.propTypes={
    readBooking: PropTypes.object
}
export default ReadBooks;