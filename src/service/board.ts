import {
  AddBoardAPIType,
  FetchBoardReadAPIType,
  FetchBoardsListAPIType,
} from "./sanityTypes";
import { client } from "./sanityInit";
import { v4 as uuidv4 } from "uuid";

export async function addBoardAPI({
  writer,
  category,
  title,
  content,
  today,
}: AddBoardAPIType) {
  return client
    .createIfNotExists({
      _id: uuidv4(),
      _type: "board",
      writer,
      category,
      title,
      content,
      today,
    })
    .then(() => {
      window.location.reload();
    });
}

export async function fetchBoardsListAPI({
  setGetBoards,
}: FetchBoardsListAPIType) {
  return client
    .fetch(
      `*[_type == "board"] | order(_updatedAt desc)
    `
    )
    .then((res) => {
      setGetBoards(res);
    });
}

export async function fetchBoardsListQuestionAPI({
  setGetBoards,
}: FetchBoardsListAPIType) {
  return client
    .fetch(
      `*[_type == "board"  && category == "질문"] | order(_updatedAt desc)
    `
    )
    .then((res) => {
      setGetBoards(res);
    });
}

export async function fetchBoardsListShareAPI({
  setGetBoards,
}: FetchBoardsListAPIType) {
  return client
    .fetch(
      `*[_type == "board"  && category == "공유"] | order(_updatedAt desc)
    `
    )
    .then((res) => {
      setGetBoards(res);
    });
}

export async function fetchBoardReadAPI({
  id,
  setBoardRead,
  setBoardReadModal,
}: FetchBoardReadAPIType) {
  return client
    .fetch(
      `*[_type == "board" && _id == "${id}"]
    `
    )
    .then((res) => {
      setBoardRead(res);
      setBoardReadModal(true);
    });
}

export async function deleteBoardAPI(id: string) {
  return client
    .delete({ query: `*[_type == "board" && _id == "${id}"]` })
    .then(() => window.location.reload());
}
