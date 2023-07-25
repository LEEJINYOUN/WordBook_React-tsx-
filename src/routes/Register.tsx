import { NavLink } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { cssType } from "../App";

export type Props = {
  inputMainCss: cssType;
  inputInputCss: cssType;
};

export default function Register({ inputMainCss, inputInputCss }: Props) {
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[650px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <div className="h-[20%] font-bold text-3xl sm:text-4xl flex justify-center items-center">
          회원가입
        </div>
        <RegisterForm
          inputMainCss={inputMainCss}
          inputInputCss={inputInputCss}
        />
        <div className="h-[10%] flex flex-row justify-center items-center">
          <span className="text-base sm:text-lg mx-2">회원인가요?</span>
          <NavLink
            className="text-base sm:text-lg font-bold cursor-pointer text-red-400 duration-200 underline underline-offset-4 hover:text-red-500"
            to="/"
          >
            로그인
          </NavLink>
        </div>
      </div>
    </section>
  );
}
