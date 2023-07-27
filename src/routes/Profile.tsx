import { NavLink } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import { CssType, ProfileType } from "../components/TypeAlias";
import { useState } from "react";
import WithdrawalModal from "../components/WithdrawalModal";

export default function Profile({ Navbar, LocalData, setUser }: ProfileType) {
  const profileBtnCss: CssType = `bg-blue-300 flex justify-center items-center ml-6 w-[100px] h-10 font-semibold text-white rounded-lg hover:font-bold duration-200`;
  const [withdrawal, setWithdrawal] = useState<boolean>(false);
  const modalToggle = () => {
    setWithdrawal((prev) => !prev);
  };
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
          <div className="flex justify-center py-2">
            <NavLink
              className={`${profileBtnCss} hover:bg-blue-400`}
              to="/"
              onClick={onLogout}
            >
              로그아웃
            </NavLink>
            <button
              className={`${profileBtnCss} hover:bg-red-400`}
              onClick={modalToggle}
            >
              회원탈퇴
            </button>
            {withdrawal === true && (
              <WithdrawalModal
                modalToggle={modalToggle}
                LocalData={LocalData}
                setUser={setUser}
              />
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
