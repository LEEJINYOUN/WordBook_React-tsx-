import { userInfoType } from "../App";
import { client } from "./sanity";
import { v4 as uuidv4 } from "uuid";

type AuthCreateType = {
  email: string;
  nickname: string;
  name: string;
  password: string;
};

type AuthLoginType = {
  email: string;
  password: string;
  setUser: React.Dispatch<React.SetStateAction<userInfoType | null>>;
};

type AuthGetLoginType = {
  email: string;
  setUser: React.Dispatch<React.SetStateAction<userInfoType | null>>;
};

export async function addUser({
  email,
  nickname,
  name,
  password,
}: AuthCreateType) {
  return client
    .createIfNotExists({
      _id: uuidv4(),
      _type: "user",
      email,
      nickname,
      name,
      password,
    })
    .then(() => {
      alert("계정이 생성되었습니다.");
      window.location.href = "/";
    });
}

export async function emailSignUpCheck({
  email,
  nickname,
  name,
  password,
}: AuthCreateType) {
  return client
    .fetch(`*[_type == "user" && email == "${email}"][0]`)
    .then((res) =>
      res !== null
        ? alert("존재하는 아이디입니다.")
        : addUser({
            email,
            nickname,
            name,
            password,
          })
    );
}

export async function getEmailLogin({ email, setUser }: AuthGetLoginType) {
  return client
    .fetch(`*[_type == "user" && email == "${email}"][0]`)
    .then((res) => {
      let userObject = {
        id: res._id,
        email: res.email,
        nickname: res.nickname,
        name: res.name,
      };
      setUser(userObject);
      localStorage.setItem("userInfo", JSON.stringify(userObject));
      window.location.href = "/home";
    });
}

export async function emailLogin({ email, password, setUser }: AuthLoginType) {
  return client
    .fetch(
      `*[_type == "user" && email == "${email}"][0]{"password" : password == "${password}"}`
    )
    .then((res) =>
      res.password === false
        ? alert("비밀번호가 다릅니다")
        : getEmailLogin({ email, setUser })
    );
}
