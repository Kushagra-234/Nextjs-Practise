"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };

  return (
    <form className="w-50 flex" onSubmit={handleSubmit}>
      <input
        className="bg-white p-2 w-80"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button className="p-2 bg-slate-300">Search</button>
    </form>
  );
}
