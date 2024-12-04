import PropTypes from 'prop-types';

const Books = ({books}) => {
    const {bookName}=books;
    return (
        <div>
            <h1>{bookName}</h1>
        </div>
    );
};

Books.propTypes={
    books: PropTypes.object
}
export default Books;