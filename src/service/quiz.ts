import {
  DateRecordType,
  QuizStopType,
  ResultPushType,
} from "./ActiveTypeAlias";
import { client } from "./sanity";
import { v4 as uuidv4 } from "uuid";

export async function resultPushActive({
  writer,
  today,
  matchedArr,
  NotMatchedArr,
}: ResultPushType) {
  return client
    .createIfNotExists({
      _id: uuidv4(),
      _type: "quiz",
      writer,
      today,
      matched: matchedArr,
      notMatched: NotMatchedArr,
    })
    .then(() => {});
}

export async function dateRecordActive({
  id,
  setGetRecordDateMatched,
  setGetRecordDateNotMatched,
  setGetRecordDate,
}: DateRecordType) {
  return client
    .fetch(
      `*[_type == "quiz" && _id == "${id}"]
  `
    )
    .then((res) => {
      setGetRecordDateMatched(res[0].matched);
      setGetRecordDateNotMatched(res[0].notMatched);
      setGetRecordDate(true);
    });
}

export async function quizStopActive({
  today,
  writer,
  matchedArr,
  NotMatchedArr,
  setQuizEnd,
}: QuizStopType) {
  return client
    .createIfNotExists({
      _id: uuidv4(),
      _type: "quiz",
      writer,
      today,
      matched: matchedArr,
      notMatched: NotMatchedArr,
    })
    .then(() => {
      setQuizEnd(true);
    });
}
