import React from "react";
import { NavLink } from "react-router-dom";
import { navbarType } from "../App";
import UserInfo from "../components/UserInfo";
import { userInfoType } from "../App";

export type profileType = {
  Navbar: navbarType;
  LocalData: userInfoType | null;
  setUser: React.Dispatch<React.SetStateAction<userInfoType | null>>;
};

export default function Profile({ Navbar, LocalData, setUser }: profileType) {
  const onLogout = () => {
    setUser(null);
    localStorage.clear();
  };
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[750px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <Navbar />
        <main className="h-[90%] flex flex-col">
          <UserInfo LocalData={LocalData} />
          <div className="flex justify-center py-2 ">
            <NavLink
              className="bg-blue-300 flex justify-center items-center ml-6 w-[100px] h-10 font-semibold text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
              to="/"
              onClick={onLogout}
            >
              로그아웃
            </NavLink>
          </div>
        </main>
      </div>
    </section>
  );
}
