import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import { getStorBook } from "../../Utilites/LocalStor";
import ReadBooks from "../../Component/ReadBooks/ReadBooks";

const ReadBook = () => {
    const [readBook, setReadBook]=useState([]);
    
    const callBook=useLoaderData();
    console.log(callBook);
    
    const bookData=callBook.books;
    
    useEffect(()=>{
        const readId=getStorBook();
        console.log(readId);
        
            if(bookData.length > 0){
                const readBookData=bookData.filter(read => readId.includes(read.bookId));
                setReadBook(readBookData)
            }
            
        },[bookData])

    return (
        <div className="">
           
    {readBook.length > 0 ? (
        readBook.map((readBooking, idx) => (
            <ReadBooks key={idx} readBooking={readBooking} />
        ))
    ) : (
        <p>No books found.</p>
    )}
</div>

    );
};

export default ReadBook;