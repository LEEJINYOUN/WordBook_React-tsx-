import React from "react";

export default function SearchForm() {
  return (
    <div className="w-full h-[10%]">
      <input
        className="mx-auto px-6 flex justify-center items-center w-[50%] h-[45px] rounded-lg text-base sm:text-lg outline-none my-3 border border-gray-300"
        type="text"
        name="search"
        placeholder="검색할 단어"
      />
    </div>
  );
}
