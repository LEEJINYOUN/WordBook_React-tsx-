import {
  AddWordCheckType,
  AddWordObjectType,
  GetRecordsListActiveType,
  GetWordsListType,
} from "./sanityTypes";
import { client } from "./sanityInit";
import { v4 as uuidv4 } from "uuid";

export async function addWordActive({
  writer,
  enWord,
  krWord,
  bookmark,
  today,
}: AddWordObjectType) {
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
}: AddWordCheckType) {
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

export async function getWordListActive({
  writer,
  setGetWords,
}: GetWordsListType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}"] | order(today asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function getWordListEnWordOrderActive({
  writer,
  setGetWords,
}: GetWordsListType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}"] | order(enWord asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function getWordListKrWordOrderActive({
  writer,
  setGetWords,
}: GetWordsListType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}"] | order(krWord asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function getWordListBookmarkActive({
  writer,
  setGetWords,
}: GetWordsListType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}" && bookmark == true] | order(today asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function getWordListBookmarkEnWordOrderActive({
  writer,
  setGetWords,
}: GetWordsListType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}" && bookmark == true] | order(enWord asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function getWordListBookmarkKrWordOrderActive({
  writer,
  setGetWords,
}: GetWordsListType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}" && bookmark == true] | order(krWord asc)
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
}: GetRecordsListActiveType) {
  return client
    .fetch(
      `*[_type == "quiz" && writer == "${writer}"] | order(today desc)
    `
    )
    .then((res) => {
      setGetRecords(res);
    });
}
