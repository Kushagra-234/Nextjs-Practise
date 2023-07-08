import Link from "next/link";
import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <nav className="flex p-4 bg-slate-600 justify-between">
      <h2 className="text-white text-3xl">
        <Link href="/">WikiRocket!</Link>
      </h2>
      <Search />
    </nav>
  );
}

export default Navbar;
