import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h1 className=" text-2xl font-bold text-center mt-20">Opps !</h1>
           <div className=" text-center mt-4">
           <Link to={"/"}>
            <button className="btn">Back to home</button>
            </Link>
           </div>
        </div>
    );
};

export default Error;