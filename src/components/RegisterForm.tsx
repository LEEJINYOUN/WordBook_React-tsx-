import React, { useState } from "react";
import { Props } from "../routes/Register";
import { emailSignUpCheckActive } from "../service/user";

export default function RegisterForm({ inputMainCss, inputInputCss }: Props) {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userNickname, setUserNickname] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setUserEmail(value);
    } else if (name === "nickname") {
      setUserNickname(value);
    } else if (name === "name") {
      setUserName(value);
    } else if (name === "password") {
      setUserPw(value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailSignUpCheckActive({
      email: userEmail,
      nickname: userNickname,
      name: userName,
      password: String(userPw),
    });
  };

  return (
    <form className="h-[70%] flex flex-col justify-center" onSubmit={onSubmit}>
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
        type="text"
        name="nickname"
        placeholder="닉네임"
        required
        onChange={onChange}
      />
      <input
        className={`${inputMainCss} ${inputInputCss}`}
        type="text"
        name="name"
        placeholder="이름"
        required
        onChange={onChange}
      />
      <input
        className={`${inputMainCss} ${inputInputCss}`}
        type="password"
        name="password"
        placeholder="비밀번호 (8자리 이상)"
        required
        minLength={8}
        onChange={onChange}
      />
      <input
        className={`${inputMainCss} duration-200 hover:bg-blue-500 hover:font-extrabold my-7 bg-blue-300 text-white cursor-pointer`}
        type="submit"
        value="회원가입"
      />
    </form>
  );
}
