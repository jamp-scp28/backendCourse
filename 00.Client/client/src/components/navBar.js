import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function NavBar() {

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-600 p-6 mb-5">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">George's Ecommerce</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Home</Link>
            <Link to="/addProduct" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Admin</Link>
        </div>
        <div>
         <Link to="/carts" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Carts</Link>          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;