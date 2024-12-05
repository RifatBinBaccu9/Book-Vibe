import { useEffect, useState } from "react";
import { getStorBook } from "../../Utilites/LocalStor";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const ListedBooks = () => {
    const [readBook, setReadBook]=useState([]);

    const callBook=useLoaderData();
    const bookData=callBook.books;
    
    useEffect(()=>{
        const readId=getStorBook();
        
        if(bookData.length > 0){
            const readBookData=bookData.filter(read => readId.includes(read.bookId));
            setReadBook(readBookData)
        }
        
    },[bookData])

    return (
        <div className=" w-[85%] mx-auto">
      <div>
        <h1 className=" text-3xl font-bold bg-slate-400 p-5 text-center rounded-lg mt-6">Books</h1>

        <div className=" text-center my-6">
        <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn m-1">Sort By <IoIosArrowDown />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
        </div>
        </div>

      </div>
      
          
        </div>
    );
};

export default ListedBooks;