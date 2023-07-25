import { client } from "./sanity";
import { v4 as uuidv4 } from "uuid";

interface wordObjectType {
  writer: string | undefined;
  enWord: string;
  krWord: string;
  bookmark: boolean;
  today: object;
}

interface WordCheckType extends wordObjectType {
  setEnWord: React.Dispatch<React.SetStateAction<string>>;
  setKrWord: React.Dispatch<React.SetStateAction<string>>;
}

export async function addWordActive({
  writer,
  enWord,
  krWord,
  bookmark,
  today,
}: wordObjectType) {
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

export async function wordCheckActive({
  writer,
  enWord,
  krWord,
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
        : addWordActive({ writer, enWord, krWord, bookmark, today })
    );
}

export async function getWordsListActive({
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

export async function getWordListBookmark({
  writer,
  setGetWords,
}: {
  writer: string | undefined;
  setGetWords: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}" && bookmark == true]
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function wordBookmarkTrueActive({ id }: { id: string }) {
  return client
    .patch(id)
    .set({ bookmark: true })
    .commit()
    .then(() => {
      window.location.reload();
    });
}

export async function wordBookmarkFalseActive({ id }: { id: string }) {
  return client
    .patch(id)
    .set({ bookmark: false })
    .commit()
    .then(() => {
      window.location.reload();
    });
}

export async function wordBookmarkCheckActive({ id }: { id: string }) {
  return client.fetch(`*[_type == "word" && _id == "${id}"]`).then((res) => {
    let isBookmark = res[0].bookmark;
    if (isBookmark === false) {
      wordBookmarkTrueActive({ id });
    } else {
      wordBookmarkFalseActive({ id });
    }
  });
}

export async function wordDeleteActive({ id }: { id: string }) {
  return client
    .delete({ query: `*[_type == "word" && _id == "${id}"]` })
    .then(() => window.location.reload());
}

export async function getRecordsListActive({
  writer,
  setGetRecords,
}: {
  writer: string | undefined;
  setGetRecords: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  return client
    .fetch(
      `*[_type == "quiz" && writer == "${writer}"]
    `
    )
    .then((res) => {
      setGetRecords(res);
    });
}
