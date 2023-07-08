"use client";

import { useState } from "react";

const getWikiResults = (searchTerm: string) => {
  const [value, setValue] = useState("");
  const url = "https://jsonplaceholder.typicode.com/todos/searchTerm";

  fetch(url)
    .then((response) => response.json())
    .then((data) => setValue(data));

  return value;
};

export default getWikiResults;
