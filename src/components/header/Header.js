
import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="w-full pt-5 text-gray-700 bg-slate-100 border-t border-gray-100 shadow-sm body-font">
    <div className="container flex flex-col items-start justify-between p-6 mx-auto md:flex-row">
        {/* <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
         
        </a> */}
        <nav className="flex flex-wrap items-center justify-center pl-24 text-base md:ml-auto md:mr-auto">
            <Link href="/" className="mr-5 font-medium hover:text-gray-900">Home</Link>
            <Link href="/products" className="mr-5 font-medium hover:text-gray-900">Products</Link>
      
        </nav>
        <div className="items-center h-full">
            <Link href="/login" className="mr-5 font-medium hover:text-gray-900">Login</Link>
        </div>
    </div>
</header>
  );
};

export default Header;
