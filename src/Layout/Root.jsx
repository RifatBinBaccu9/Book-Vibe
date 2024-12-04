import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shahed/Navbar/Navbar";
import Footer from "../Pages/Shahed/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;