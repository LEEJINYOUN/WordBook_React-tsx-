import {
  AddBoardType,
  GetBoardReadActiveType,
  GetBoardsListActiveType,
} from "./sanityTypes";
import { client } from "./sanityInit";
import { v4 as uuidv4 } from "uuid";

export async function addBoardActive({
  writer,
  category,
  title,
  content,
  today,
}: AddBoardType) {
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

export async function getBoardsListActive({
  setGetBoards,
}: GetBoardsListActiveType) {
  return client
    .fetch(
      `*[_type == "board"] | order(today desc)
    `
    )
    .then((res) => {
      setGetBoards(res);
    });
}

export async function getBoardsListQuestionActive({
  setGetBoards,
}: GetBoardsListActiveType) {
  return client
    .fetch(
      `*[_type == "board"  && category == "질문"] | order(today desc)
    `
    )
    .then((res) => {
      setGetBoards(res);
    });
}

export async function getBoardsListShareActive({
  setGetBoards,
}: GetBoardsListActiveType) {
  return client
    .fetch(
      `*[_type == "board"  && category == "공유"] | order(today desc)
    `
    )
    .then((res) => {
      setGetBoards(res);
    });
}

export async function getBoardReadActive({
  id,
  setBoardRead,
  setBoardReadModal,
}: GetBoardReadActiveType) {
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

export async function deleteBoardActive(id: string) {
  return client
    .delete({ query: `*[_type == "board" && _id == "${id}"]` })
    .then(() => window.location.reload());
}
