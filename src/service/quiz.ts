import { client } from "./sanityInit";
import { v4 as uuidv4 } from "uuid";
import { DateRecordAPIType, QuizStopType, ResultPushType } from "./sanityTypes";

export async function resultPushAPI({
  writer,
  today,
  MATCH_ARR,
  NOT_MATCH_ARR,
}: ResultPushType) {
  return client
    .createIfNotExists({
      _id: uuidv4(),
      _type: "quiz",
      writer,
      today,
      matched: MATCH_ARR,
      notMatched: NOT_MATCH_ARR,
    })
    .then(() => {});
}

export async function dateRecordAPI({
  id,
  setGetRecordDateMatched,
  setGetRecordDateNotMatched,
  setGetRecordDate,
}: DateRecordAPIType) {
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

export async function quizStopAPI({
  today,
  writer,
  MATCH_ARR,
  NOT_MATCH_ARR,
  setQuizEnd,
}: QuizStopType) {
  return client
    .createIfNotExists({
      _id: uuidv4(),
      _type: "quiz",
      writer,
      today,
      matched: MATCH_ARR,
      notMatched: NOT_MATCH_ARR,
    })
    .then(() => {
      setQuizEnd(true);
    });
}
