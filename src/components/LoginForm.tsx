import React, { useContext, useState } from "react";
import { emailLoginCheckAPI } from "../service/user";
import { RegisterType } from "../types/type";
import { AuthContext } from "../utils/AuthContext";

export default function LoginForm({
  inputMainCss,
  inputInputCss,
  navigate,
}: RegisterType) {
  const userContext = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setUserEmail(value);
    } else if (name === "password") {
      setUserPw(value);
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailLoginCheckAPI({
      email: userEmail,
      password: String(userPw),
      setCurrentUser: userContext.setCurrentUser,
      navigate,
    });
  };

  return (
    <form className="h-[65%] flex flex-col justify-center" onSubmit={onSubmit}>
      <input
        className={`${inputMainCss} ${inputInputCss}`}
        type="email"
        name="email"
        placeholder="이메일"
        required
        onChange={onChange}
      />
      <input
        className={`${inputMainCss} ${inputInputCss}`}
        type="password"
        name="password"
        placeholder="비밀번호"
        required
        onChange={onChange}
      />
      <input
        className={`${inputMainCss} duration-200 hover:bg-blue-500 hover:font-extrabold my-7 bg-blue-300 text-white cursor-pointer`}
        type="submit"
        value="로그인"
      />
    </form>
  );
}
