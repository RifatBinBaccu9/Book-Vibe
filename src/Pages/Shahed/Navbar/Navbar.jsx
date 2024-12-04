import { NavLink } from "react-router-dom";


const Navbar = () => {
    const link=<>
    <li><NavLink to={"/"}>Home</NavLink></li>
      <li><NavLink to={"/ListedBooks"}>Listed Books</NavLink></li>
      <li><NavLink to={"/PagesToRead"}>Pages to Read</NavLink></li>
      </>
    return (
<div className="navbar bg-base-100 w-[85%] m-auto">
 
  <div className="navbar-start"><a className=" cursor-pointer text-xl">Book Vibe</a></div>

  <div className="navbar-center">
  <div className="hidden  md:flex lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  </div>

  <div className=" navbar-end">
  <div className="hidden md:flex lg:flex gap-5">
  <button className="btn btn-info">Sign In</button>
  <button className="btn btn-success">Sign Up</button>
  </div>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link}
        
        <button className="btn btn-info my-2">Sign In</button>
        <button className="btn btn-success my-2">Sign Up</button>
        
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;