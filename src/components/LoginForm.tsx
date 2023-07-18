import React from "react";
import { Props } from "../routes/Login";

export default function LoginForm({ inputMainCss, inputInputCss }: Props) {
  return (
    <form className="h-[65%] flex flex-col justify-center">
      <input
        className={`${inputMainCss} ${inputInputCss}`}
        type="email"
        name="email"
        placeholder="이메일"
        required
      />
      <input
        className={`${inputMainCss} ${inputInputCss}`}
        type="password"
        name="password"
        placeholder="비밀번호"
        required
      />
      <input
        className={`${inputMainCss} duration-200 hover:bg-blue-500 hover:font-extrabold my-7 bg-blue-300 text-white cursor-pointer`}
        type="submit"
        value="로그인"
      />
    </form>
  );
}
