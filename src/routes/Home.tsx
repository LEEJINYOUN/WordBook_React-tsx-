import React from "react";
import { NavLink } from "react-router-dom";
import { cssType } from "../App";

export default function Home() {
  const navCss: cssType = `m-auto w-[80%] h-[70px] flex justify-around items-center rounded-xl font-semibold text-lg text-white bg-lime-500 hover:bg-lime-600`;
  const newQuiz = () => {
    window.location.replace("/quiz");
  };
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[600px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <main className="h-full flex flex-col">
          <NavLink className={navCss} to="/wordbook">
            단어장
          </NavLink>
          <NavLink className={navCss} to="/bookmark">
            북마크
          </NavLink>
          <NavLink className={navCss} to="/quiz" onClick={newQuiz}>
            퀴즈
          </NavLink>
          <NavLink className={navCss} to="/profile">
            프로필
          </NavLink>
        </main>
      </div>
    </section>
  );
}
