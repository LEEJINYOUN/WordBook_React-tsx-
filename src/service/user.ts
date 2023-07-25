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

type WordCheckType = {
  writer: string | undefined;
  enWord: string;
  setEnWord: React.Dispatch<React.SetStateAction<string>>;
  krWord: string;
  setKrWord: React.Dispatch<React.SetStateAction<string>>;
  bookmark: boolean;
  today: object;
};

type addWordType = {
  writer: string | undefined;
  enWord: string;
  krWord: string;
  bookmark: boolean;
  today: object;
};

export type getWordsType = {
  writer: string;
  enWord: string;
  krWord: string;
  bookmark: boolean;
  today: string;
};

type getType = {
  writer: string | undefined;
  setGetWords: getWordsType[];
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

export async function addWord({
  writer,
  enWord,
  krWord,
  bookmark,
  today,
}: addWordType) {
  return client
    .createIfNotExists({
      _id: uuidv4(),
      _type: "word",
      writer,
      enWord,
      krWord,
      bookmark,
      today,
    })
    .then(() => {
      window.location.reload();
    });
}

export async function wordCheck({
  writer,
  enWord,
  setEnWord,
  krWord,
  setKrWord,
  bookmark,
  today,
}: WordCheckType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}" && enWord == "${enWord}"]`
    )
    .then((res) =>
      res[0] !== undefined
        ? alert("이미 등록된 단어입니다")
        : addWord({ writer, enWord, krWord, bookmark, today })
    );
}

export async function getWordList({
  writer,
  setGetWords,
}: {
  writer: string | undefined;
  setGetWords: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}"]
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function wordDelete({ id }: { id: string }) {
  return client
    .delete({ query: `*[_type == "word" && _id == "${id}"]` })
    .then(() => window.location.reload());
}
