import { NavLink } from "react-router-dom";
import { CssType } from "./TypeAlias";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const navCss: CssType = `w-[25%] h-full flex justify-center items-center font-semibold text-lg text-white bg-lime-500 hover:bg-lime-600`;
  const newQuiz: () => void = () => {
    window.location.replace("/quiz");
  };
  const pathName = useLocation().pathname;

  return (
    <section className="flex w-full h-[10%] rounded-t-2xl">
      <NavLink
        className={`${
          pathName === "/wordbook"
            ? `${navCss} rounded-tl-2xl bg-lime-600`
            : `${navCss} rounded-tl-2xl`
        }`}
        to="/wordbook"
      >
        단어장
      </NavLink>
      <NavLink
        className={`${
          pathName === "/bookmark" ? `${navCss} bg-lime-600` : `${navCss}`
        }`}
        to="/bookmark"
      >
        북마크
      </NavLink>
      <NavLink
        className={`${
          pathName === "/quiz" ? `${navCss} bg-lime-600` : `${navCss}`
        }`}
        to="/quiz"
        onClick={newQuiz}
      >
        퀴즈
      </NavLink>
      <NavLink
        className={`${
          pathName === "/profile"
            ? `${navCss} rounded-tr-2xl bg-lime-600`
            : `${navCss} rounded-tr-2xl`
        }`}
        to="/profile"
      >
        프로필
      </NavLink>
    </section>
  );
}
