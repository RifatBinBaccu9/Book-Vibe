import { Outlet } from "react-router-dom";
import ReadWishlisted from "../Pages/Shahed/ReadWishlisted/ReadWishlisted";


const ReadWishlistRood = () => {
    return (
        <div>
            <ReadWishlisted />
            <Outlet />

        </div>
    );
};

export default ReadWishlistRood;