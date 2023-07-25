import { client } from "./sanity";
import { v4 as uuidv4 } from "uuid";

interface answerObjectType {
  writer: string | undefined;
  today: string;
  matchedArr: object[];
  NotMatchedArr: object[];
}

type dateRecordType = {
  id: string;
  setGetRecordDateMatched: React.Dispatch<React.SetStateAction<Array<any>>>;
  setGetRecordDateNotMatched: React.Dispatch<React.SetStateAction<Array<any>>>;
  setGetRecordDate: React.Dispatch<React.SetStateAction<boolean>>;
};

interface quizStopType extends answerObjectType {
  setQuizEnd: React.Dispatch<React.SetStateAction<boolean>>;
}

export async function resultPushActive({
  writer,
  today,
  matchedArr,
  NotMatchedArr,
}: answerObjectType) {
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

export async function quizStopActive({
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
