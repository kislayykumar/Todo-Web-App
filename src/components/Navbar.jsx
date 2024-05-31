import React from 'react';
import { FaTasks } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='text-center bg-yellow-400 gap-8 py-2 w-full'>
      <div className="logo">
        <span className='font-bold text-3xl mx-8 font-serif'>TaskNow</span>
        <br />
        <div className="flex justify-center items-center">
          <span className='text-md font-serif mx-8 flex items-center'>
            Task planner <FaTasks className="ml-2" />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
