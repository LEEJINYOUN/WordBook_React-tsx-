import {
  EmailSignUpType,
  EmailLoginCheckType,
  EmailLoginType,
  AuthDeleteType,
} from "../types/sanityTypes";
import { client } from "./sanityInit";
import { v4 as uuidv4 } from "uuid";

export async function addUserAPI({
  email,
  nickname,
  name,
  password,
  navigate,
}: EmailSignUpType) {
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
      navigate("/");
    });
}

export async function emailSignUpCheckAPI({
  email,
  nickname,
  name,
  password,
  navigate,
}: EmailSignUpType) {
  return client
    .fetch(`*[_type == "user" && email == "${email}"][0]`)
    .then((res) =>
      res !== null
        ? alert("존재하는 아이디입니다.")
        : addUserAPI({
            email,
            nickname,
            name,
            password,
            navigate,
          })
    );
}

export async function emailLoginAPI({
  email,
  setCurrentUser,
  navigate,
}: EmailLoginType) {
  return client
    .fetch(`*[_type == "user" && email == "${email}"][0]`)
    .then((res) => {
      let userObject = {
        id: res._id,
        email: res.email,
        nickname: res.nickname,
        name: res.name,
      };
      setCurrentUser(userObject);
      localStorage.setItem("userInfo", JSON.stringify(userObject));
      navigate("/");
    });
}

export async function emailLoginCheckAPI({
  email,
  password,
  setCurrentUser,
  navigate,
}: EmailLoginCheckType) {
  return client
    .fetch(
      `*[_type == "user" && email == "${email}"][0]{"password" : password == "${password}"}`
    )
    .then((res) =>
      res.password === false
        ? alert("비밀번호가 다릅니다")
        : emailLoginAPI({ email, setCurrentUser, navigate })
    );
}

export async function accountDeleteAPI({
  email,
  setCurrentUser,
  navigate,
}: AuthDeleteType) {
  return (client.delete({ query: `*[_type == "user" && email == "${email}"]` }),
  client.delete({ query: `*[_type == "word" && writer == "${email}"]` }),
  client.delete({ query: `*[_type == "quiz" && writer == "${email}"]` }),
  client.delete({ query: `*[_type == "board" && writer == "${email}"]` })).then(
    () => {
      setCurrentUser(null);
      localStorage.clear();
      navigate("/");
    }
  );
}
