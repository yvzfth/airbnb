import Image from "next/image";
import React from "react";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  SearchIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <header className="items-center sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 w-28 justify-start">
        <Image
          className=" cursor-pointer"
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Medium - Search */}
      <div className="md:shadow-sm flex items-center shadow md:border-2 rounded-full py-2">
        <input
          className="flex-grow bg-transparent outline-none px-5 text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your search"
          type="text"
        />
        <SearchIcon className="hidden md:inline-flex cursor-pointer bg-red-400 rounded-full p-2 h-8 text-white md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
