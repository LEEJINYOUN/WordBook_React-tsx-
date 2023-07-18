import React from "react";
import { cssType, navbarType } from "../App";
type Props = {
  Navbar: navbarType;
  inputMainCss: cssType;
  inputInputCss: cssType;
};

export default function Quiz({ Navbar, inputMainCss, inputInputCss }: Props) {
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[750px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <Navbar />
        <main className="h-[90%] flex flex-col justify-center items-center"></main>
      </div>
    </section>
  );
}
