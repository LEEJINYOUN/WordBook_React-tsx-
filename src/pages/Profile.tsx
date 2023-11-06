import { NavLink } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import { CssType, ProfileType } from "../types/type";
import { useContext, useState } from "react";
import WithdrawalModal from "../components/WithdrawalModal";
import { AuthContext } from "../utils/AuthContext";

export default function Profile({ Navbar, navigate }: ProfileType) {
  const userContext = useContext(AuthContext);
  const profileBtnCss: CssType = `bg-blue-300 flex justify-center items-center ml-6 w-[100px] h-10 font-semibold text-white rounded-lg hover:font-bold duration-200`;
  const [withdrawalModalOpen, setWithdrawalModalOpen] = useState(false);
  const modalToggle = () => {
    setWithdrawalModalOpen((prev) => !prev);
  };
  const onLogout = () => {
    userContext.setCurrentUser(null);
    localStorage.clear();
  };

  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[750px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <Navbar />
        <main className="h-[90%] flex flex-col">
          <UserInfo />
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
            {withdrawalModalOpen === true && (
              <WithdrawalModal modalToggle={modalToggle} navigate={navigate} />
            )}
          </div>
        </main>
      </div>
    </section>
  );
}
