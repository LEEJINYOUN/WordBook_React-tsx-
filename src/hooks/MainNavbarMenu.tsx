import { CssType } from "../types/type";

const navCss: CssType = `w-[25%] h-full flex justify-center items-center font-semibold text-lg text-white bg-lime-500 hover:bg-lime-600`;

export const getNavbarMenu = (pathName: string) => {
  const MAIN_NAVBAR_MENU = [
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
      title: "커뮤니티",
      className: `${
        pathName === "/board" ? `${navCss} bg-lime-600` : `${navCss}`
      }`,
      to: "/board",
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
  return MAIN_NAVBAR_MENU;
};
