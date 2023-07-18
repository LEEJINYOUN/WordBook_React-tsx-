import React from "react";
import { Props } from "../routes/Login";

export default function RegisterForm({ inputMainCss, inputInputCss }: Props) {
  return (
    <form className="h-[70%] flex flex-col justify-center">
      <input
        className={`${inputMainCss} ${inputInputCss}`}
        type="email"
        name="email"
        placeholder="이메일"
        required
      />
      <input
        className={`${inputMainCss} ${inputInputCss}`}
        type="text"
        name="nickname"
        placeholder="닉네임"
        required
      />
      <input
        className={`${inputMainCss} ${inputInputCss}`}
        type="text"
        name="name"
        placeholder="이름"
        required
      />
      <input
        className={`${inputMainCss} ${inputInputCss}`}
        type="password"
        name="password"
        placeholder="비밀번호 (8자리 이상)"
        required
        minLength={8}
      />
      <input
        className={`${inputMainCss} duration-200 hover:bg-blue-500 hover:font-extrabold my-7 bg-blue-300 text-white cursor-pointer`}
        type="submit"
        value="회원가입"
      />
    </form>
  );
}
