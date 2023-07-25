import { client } from "./sanity";
import { v4 as uuidv4 } from "uuid";

type addWordType = {
  writer: string | undefined;
  enWord: string;
  krWord: string;
  bookmark: boolean;
  today: object;
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

export async function wordBookmarkTrue({ id }: { id: string }) {
  return client
    .patch(id)
    .set({ bookmark: true })
    .commit()
    .then(() => {
      window.location.reload();
    });
}

export async function wordBookmarkFalse({ id }: { id: string }) {
  return client
    .patch(id)
    .set({ bookmark: false })
    .commit()
    .then(() => {
      window.location.reload();
    });
}

export async function wordBookmarkCheck({ id }: { id: string }) {
  return client.fetch(`*[_type == "word" && _id == "${id}"]`).then((res) => {
    let isBookmark = res[0].bookmark;
    if (isBookmark === false) {
      wordBookmarkTrue({ id });
    } else {
      wordBookmarkFalse({ id });
    }
  });
}

export async function wordDelete({ id }: { id: string }) {
  return client
    .delete({ query: `*[_type == "word" && _id == "${id}"]` })
    .then(() => window.location.reload());
}

export async function getRecordsList({
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
