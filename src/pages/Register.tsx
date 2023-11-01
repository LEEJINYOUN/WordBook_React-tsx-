import RegisterForm from "../components/RegisterForm";
import { RegisterType } from "../types/type";
import GoToAuth from "../components/GoToAuth";

export default function Register({
  inputMainCss,
  inputInputCss,
  navigate,
}: RegisterType) {
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[650px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <div className="h-[20%] font-bold text-3xl sm:text-4xl flex justify-center items-center">
          회원가입
        </div>
        <RegisterForm
          inputMainCss={inputMainCss}
          inputInputCss={inputInputCss}
          navigate={navigate}
        />
        <div className="h-[10%] flex flex-row justify-center items-center">
          <GoToAuth to={"/"} text={"회원인가요?"} buttonText={"로그인"} />
        </div>
      </div>
    </section>
  );
}
