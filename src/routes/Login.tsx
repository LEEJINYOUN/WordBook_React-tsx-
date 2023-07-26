import { NavLink } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { LoginType } from "../components/TypeAlias";

export default function Login({
  inputMainCss,
  inputInputCss,
  setUser,
}: LoginType) {
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[600px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <div className="h-[20%] font-bold text-3xl sm:text-4xl flex justify-center items-center">
          로그인
        </div>
        <LoginForm
          inputMainCss={inputMainCss}
          inputInputCss={inputInputCss}
          setUser={setUser}
        />
        <div className="h-[15%] flex flex-row justify-center items-center">
          <span className="text-base sm:text-lg mx-2">회원이 아닌가요?</span>
          <NavLink
            className="text-base sm:text-lg font-bold cursor-pointer text-red-400 duration-200 underline underline-offset-4 hover:text-red-500"
            to="/register"
          >
            회원가입
          </NavLink>
        </div>
      </div>
    </section>
  );
}
