import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import { navbarType } from "../App";

export default function Bookmark({ Navbar }: navbarType) {
  const [searchWord, setSearchWord] = useState<string>("");
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "search") {
      setSearchWord(value);
    }
  };
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[750px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <Navbar />
        <main className="h-[90%] flex flex-col">
          <SearchForm searchWord={searchWord} onSearchChange={onSearchChange} />
          <div className="mx-auto w-full h-[90%] overflow-y-auto scrollbar-hide"></div>
        </main>
      </div>
    </section>
  );
}
