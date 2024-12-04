
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetailsPage = () => {
    const BookDetailData=useLoaderData();
    const BookDetail=BookDetailData.books;
    const {bookId}=useParams();
    const id=parseInt(bookId);
    const BookDetails =BookDetail.find(bookDetail=> bookDetail.bookId == id);
    console.log(BookDetail,id, BookDetails);

    const {bookName}=BookDetails;
    
    return (
        <div>
            <h1>{bookName}</h1>
        </div>
    );
};

export default BookDetailsPage;