import { client } from "./sanity";
import { v4 as uuidv4 } from "uuid";

type AuthUserType = {
  email: string;
  nickname: string;
  name: string;
  password: string;
};

export async function addUser({
  email,
  nickname,
  name,
  password,
}: AuthUserType) {
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
}: AuthUserType) {
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
