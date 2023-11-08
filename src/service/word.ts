import {
  AddWordCheckAPIType,
  AddWordObjectType,
  FetchRecordsListAPIType,
  FetchWordsListAPIType,
} from "./sanityTypes";
import { client } from "./sanityInit";
import { v4 as uuidv4 } from "uuid";

export async function addWordAPI({
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

export async function wordCheckAPI({
  writer,
  enWord,
  krWord,
  bookmark,
  today,
}: AddWordCheckAPIType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}" && enWord == "${enWord}"]`
    )
    .then((res) =>
      res[0] !== undefined
        ? alert("이미 등록된 단어입니다")
        : addWordAPI({ writer, enWord, krWord, bookmark, today })
    );
}

export async function fetchWordListAPI({
  writer,
  setGetWords,
}: FetchWordsListAPIType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}"] | order(today asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function fetchWordListEnWordOrderAPI({
  writer,
  setGetWords,
}: FetchWordsListAPIType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}"] | order(enWord asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function fetchWordListKrWordOrderAPI({
  writer,
  setGetWords,
}: FetchWordsListAPIType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}"] | order(krWord asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function fetchWordListBookmarkAPI({
  writer,
  setGetWords,
}: FetchWordsListAPIType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}" && bookmark == true] | order(today asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function fetchWordListBookmarkEnWordOrderAPI({
  writer,
  setGetWords,
}: FetchWordsListAPIType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}" && bookmark == true] | order(enWord asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function fetchWordListBookmarkKrWordOrderAPI({
  writer,
  setGetWords,
}: FetchWordsListAPIType) {
  return client
    .fetch(
      `*[_type == "word" && writer == "${writer}" && bookmark == true] | order(krWord asc)
    `
    )
    .then((res) => {
      setGetWords(res);
    });
}

export async function wordBookmarkTrueAPI({ id }: { id: string }) {
  return client
    .patch(id)
    .set({ bookmark: true })
    .commit()
    .then(() => {
      window.location.reload();
    });
}

export async function wordBookmarkFalseAPI({ id }: { id: string }) {
  return client
    .patch(id)
    .set({ bookmark: false })
    .commit()
    .then(() => {
      window.location.reload();
    });
}

export async function wordBookmarkCheckAPI({ id }: { id: string }) {
  return client.fetch(`*[_type == "word" && _id == "${id}"]`).then((res) => {
    let isBookmark = res[0].bookmark;
    if (isBookmark === false) {
      wordBookmarkTrueAPI({ id });
    } else {
      wordBookmarkFalseAPI({ id });
    }
  });
}

export async function wordDeleteAPI({ id }: { id: string }) {
  return client
    .delete({ query: `*[_type == "word" && _id == "${id}"]` })
    .then(() => window.location.reload());
}

export async function fetchRecordsListAPI({
  writer,
  setGetRecords,
}: FetchRecordsListAPIType) {
  return client
    .fetch(
      `*[_type == "quiz" && writer == "${writer}"] | order(today desc)
    `
    )
    .then((res) => {
      setGetRecords(res);
    });
}
