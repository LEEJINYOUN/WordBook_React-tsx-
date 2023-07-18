import React from "react";
import { navbarType } from "../App";
import SearchForm from "../components/SearchForm";

export default function Wordbook({ Navbar }: navbarType) {
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[750px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <Navbar />
        <main className="h-[90%] flex flex-col">
          <SearchForm />
          <div className="mx-auto w-full h-[80%] overflow-y-auto scrollbar-hide"></div>
          <div className="mx-auto w-full h-[10%] flex justify-center items-center">
            <button className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200">
              단어 등록
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}
