import React from "react";
import { NavLink } from "react-router-dom";
import { cssType } from "../App";

export default function Navbar() {
  const navCss: cssType = `w-[25%] h-full flex justify-center items-center font-semibold text-lg text-white bg-lime-500 hover:bg-lime-600`;
  const newQuiz = () => {
    window.location.replace("/quiz");
  };
  return (
    <section className="flex w-full h-[10%] rounded-t-2xl">
      <NavLink className={`${navCss} rounded-tl-2xl`} to="/wordbook">
        단어장
      </NavLink>
      <NavLink className={navCss} to="/bookmark">
        북마크
      </NavLink>
      <NavLink className={navCss} to="/quiz" onClick={newQuiz}>
        퀴즈
      </NavLink>
      <NavLink className={`${navCss} rounded-tr-2xl`} to="/profile">
        프로필
      </NavLink>
    </section>
  );
}
