
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetailsPage = () => {
    const BookDetailData=useLoaderData();
    const BookDetail=BookDetailData.books;
    const {bookId}=useParams();
    const id=parseInt(bookId);
    const BookDetails =BookDetail.find(bookDetail=> bookDetail.bookId == id);

    const {image,bookName,author,category,review,totalPages,yearOfPublishing,publisher,tags,rating}=BookDetails;
    
    return (
    <div className=" w-[85%] mx-auto flex md:flex-row gap-8 p-6 rounded-lg">
      {/* Image Section */}
      <div className="w-full md:w-1/2 bg-gray-50 rounded-lg p-14">
        <img
          src={image}
          alt={bookName}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-2/3 space-y-4">
        {/* Book Name and Author */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{bookName}</h1>
          <p className=" text-xl font-medium mt-3 text-gray-600">By: {author}</p>
        </div>
           <hr />
        {/* Category */}
        <p className="text-md text-gray-500">
           {category}
        </p>
           <hr />
        {/* Review */}
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-lg">Review:</span> {review}
        </p>
          
        {/* Tags */}
        <div className=' flex gap-3 mt-5'>
          <span className="font-semibold text-sm text-gray-500 mt-1">Tags:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {
            tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr />

        {/* Total Pages, Publisher, and Year */}
        <div className="">
          <p className="text-sm text-gray-500">
            <span className="font-medium text-md">Total Pages:{totalPages}</span> 
          </p>
          <p className="text-sm text-gray-500 my-3">
            <span className="font-medium text-lmd ">Publisher:{publisher}</span> 
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium text-md">Year of Publishing: {yearOfPublishing}</span> 
          </p>
          <p className="text-sm text-gray-500 my-3">
            <span className="font-medium text-md">rating : {rating}</span> 
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
            Read
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400">
            Wishlist
          </button>
        </div>
      </div>
    </div>
    );
};

export default BookDetailsPage;