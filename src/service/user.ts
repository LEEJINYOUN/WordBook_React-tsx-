import {
  AuthCreateType,
  AuthDeleteType,
  AuthGetLoginType,
  AuthLoginType,
} from "./ActiveTypeAlias";
import { client } from "./sanity";
import { v4 as uuidv4 } from "uuid";

export async function addUserActive({
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

export async function emailSignUpCheckActive({
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
        : addUserActive({
            email,
            nickname,
            name,
            password,
          })
    );
}

export async function getEmailLoginActive({
  email,
  setUser,
}: AuthGetLoginType) {
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
      window.location.replace("/home");
    });
}

export async function emailLoginActive({
  email,
  password,
  setUser,
}: AuthLoginType) {
  return client
    .fetch(
      `*[_type == "user" && email == "${email}"][0]{"password" : password == "${password}"}`
    )
    .then((res) =>
      res.password === false
        ? alert("비밀번호가 다릅니다")
        : getEmailLoginActive({ email, setUser })
    );
}

export async function accountDeleteActive({ email, setUser }: AuthDeleteType) {
  return (client.delete({ query: `*[_type == "user" && email == "${email}"]` }),
  client.delete({ query: `*[_type == "word" && writer == "${email}"]` }),
  client.delete({ query: `*[_type == "quiz" && writer == "${email}"]` })).then(
    () => {
      setUser(null);
      localStorage.clear();
      window.location.replace("/");
    }
  );
}
