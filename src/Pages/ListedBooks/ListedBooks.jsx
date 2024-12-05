import { NavLink, Outlet } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const ListedBooks = () => {


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
      <div role="tablist" className="tabs tabs-lifted flex gap-2">
           <li role="tab" className="tab tab-active w-[15%] text-xl font-medium"><NavLink to={"/ListedBooks"} >Read Books</NavLink></li>
           <h1 className="tab w-[100%] content-start text-xl font-medium"><NavLink to={"/ListedBooks/wishlistBooks"}>Wishlist Books</NavLink></h1>
       </div>
        
      
      <Outlet />
          
        </div>
    );
};

export default ListedBooks;