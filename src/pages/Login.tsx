import LoginForm from "../components/LoginForm";
import { RegisterType } from "../types/type";
import GoToAuth from "../components/GoToAuth";

export default function Login({
  inputMainCss,
  inputInputCss,
  navigate,
}: RegisterType) {
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[600px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <div className="h-[20%] font-bold text-3xl sm:text-4xl flex justify-center items-center">
          로그인
        </div>
        <LoginForm
          inputMainCss={inputMainCss}
          inputInputCss={inputInputCss}
          navigate={navigate}
        />
        <div className="h-[15%] flex flex-row justify-center items-center">
          <GoToAuth
            to={"/register"}
            text={"회원이 아닌가요?"}
            buttonText={"회원가입"}
          />
        </div>
      </div>
    </section>
  );
}
