import { NavLink } from "react-router-dom";


const ReadWishlisted = () => {
    return (
        <div>
            <ul className=" flex gap-8 my-8">
        <li><NavLink to={"/ReadBooks"}>Read Books</NavLink></li>
        <li><NavLink to={"/WishlistBooks"}>Wishlist Books</NavLink></li>
      </ul>
        </div>
    );
};

export default ReadWishlisted;