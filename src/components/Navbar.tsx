import { NavLink } from "react-router-dom";
import { CssType } from "./TypeAlias";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const navCss: CssType = `w-[25%] h-full flex justify-center items-center font-semibold text-lg text-white bg-lime-500 hover:bg-lime-600`;
  const pathName = useLocation().pathname;
  const menu = [
    {
      title: "단어장",
      className: `${
        pathName === "/wordbook"
          ? `${navCss} rounded-tl-2xl bg-lime-600`
          : `${navCss} rounded-tl-2xl`
      }`,
      to: "/wordbook",
    },
    {
      title: "북마크",
      className: `${
        pathName === "/bookmark" ? `${navCss} bg-lime-600` : `${navCss}`
      }`,
      to: "/bookmark",
    },
    {
      title: "퀴즈",
      className: `${
        pathName === "/quiz" ? `${navCss} bg-lime-600` : `${navCss}`
      }`,
      to: "/quiz",
    },
    {
      title: "프로필",
      className: `${
        pathName === "/profile"
          ? `${navCss} rounded-tr-2xl bg-lime-600`
          : `${navCss} rounded-tr-2xl`
      }`,
      to: "/profile",
    },
  ];

  return (
    <section className="flex w-full h-[10%] rounded-t-2xl">
      {menu.map((item, key) => (
        <NavLink key={key} className={item.className} to={item.to}>
          {item.title}
        </NavLink>
      ))}
    </section>
  );
}
