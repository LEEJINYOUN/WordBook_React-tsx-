import { client } from "./sanity";
import { v4 as uuidv4 } from "uuid";

type answersType = {
  writer: string | undefined;
  today: string;
  matchedArr: object[];
  NotMatchedArr: object[];
};

type dateRecordType = {
  id: string;
  setGetRecordDateMatched: React.Dispatch<React.SetStateAction<Array<any>>>;
  setGetRecordDateNotMatched: React.Dispatch<React.SetStateAction<Array<any>>>;
  setGetRecordDate: React.Dispatch<React.SetStateAction<boolean>>;
};

type quizStopType = {
  today: string;
  writer: string | undefined;
  matchedArr: object[];
  NotMatchedArr: object[];
  setQuizEnd: React.Dispatch<React.SetStateAction<boolean>>;
};

export async function addResultPush({
  writer,
  today,
  matchedArr,
  NotMatchedArr,
}: answersType) {
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

export async function dateRecord({
  id,
  setGetRecordDateMatched,
  setGetRecordDateNotMatched,
  setGetRecordDate,
}: dateRecordType) {
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

export async function quizStop({
  today,
  writer,
  matchedArr,
  NotMatchedArr,
  setQuizEnd,
}: quizStopType) {
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
