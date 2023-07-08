"use client";

import { useEffect, useState } from "react";

function page({ params: searchTerm }) {
  console.log(searchTerm.searchTerm);

  const [value, setValue] = useState([]);

  const getApi = () => {
    const url = `https://jsonplaceholder.typicode.com/users/${searchTerm.searchTerm}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setValue(data));
  };

  useEffect(() => {
    getApi();
  }, [searchTerm]);

  return (
    <div className="mt-3 flex-col items-center justify-center text-3xl">
      {searchTerm.searchTerm === "1" ||
      searchTerm.searchTerm === "2" ||
      searchTerm.searchTerm === "3" ||
      searchTerm.searchTerm === "4" ||
      searchTerm.searchTerm === "5" ||
      searchTerm.searchTerm === "6" ||
      searchTerm.searchTerm === "7" ||
      searchTerm.searchTerm === "8" ||
      searchTerm.searchTerm === "9" ? (
        <>
          <div className="mt-2 ms-2">
            Name - <span className="text-blue-300">{value.name}</span>
          </div>
          <div className="mt-2 ms-2">
            ID - <span className="text-blue-300">{value.id}</span>
          </div>
          <div className="mt-2 ms-2">
            User-Name - <span className="text-blue-300">{value.username}</span>
          </div>
          <div className="mt-2 ms-2">
            Email - <span className="text-blue-300">{value.email}</span>
          </div>
        </>
      ) : (
        <h1 className="font-extrabold mt-3 ms-5">
          Error !! Enter a valid value as a query paramter.
        </h1>
      )}
    </div>
  );
}

export default page;
