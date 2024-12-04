import { NavLink } from 'react-router-dom';
import pagwing from '../../../public/pngwing 1.png'
import { useEffect, useState } from 'react';
import Books from '../../Component/Books/Books';

const Home = () => {
    const [book, setBook]=useState([]);
 
    useEffect(()=>{
        fetch('../../../public/Book.json')
        .then(res => res.json())
        .then(data => setBook(data.books))
    },[])
    
    return (
        <section>
            <div className=' w-[85%] mx-auto my-10 flex bg-[#F3F3F3] rounded-lg p-20 gap-32'>
            <div className=' w-[60%] mt-[80px]'>
                <h1 className=' mb-10 leading-tight text-5xl font-bold'>Books to freshen up your bookshelf</h1>
               <NavLink to={"/ListedBooks"}>
               <button className="btn btn-info">View The List</button>
               </NavLink>
            </div>
            <div className=' w-[40%]'>
                <img src={pagwing} alt="" />
            </div>
        </div>

       {/* card section */}
        <div>
         {
        book.map((books, idx)=><Books key={idx} books={books}></Books>)
         }
        </div>
        </section>
    );
};

export default Home;