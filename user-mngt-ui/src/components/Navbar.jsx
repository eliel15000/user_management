import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-sky-800">
      <div className="h-16 px-8 flex items-center">
        <div className="flex flex-auto items-center">
          <Link href="https://eliel15000.github.io/portfolio/" target="_blank" rel="noreferrer">
            <Image className="bg-white rounded-md mr-3" src="/logo.png" alt="EliezerCoding logo" width="40" height="40" />
          </Link>
          <p className="text-white text-lg sm:text-2xl font-bold flex-auto">User Management System</p>
        </div>
        <div className="flex">
          {/* <p className="text-white text-lg font-bold mr-7">Dashboard</p> */}
          <p className="text-white sm:text-xl font-bold mr-7">Add User</p>
        </div>
        <p className="text-white sm:text-xl font-bold">Right</p>
      </div>
      <></>
    </div>
  )
}

export default Navbar;