import React, { useState } from "react";
import QuizMainForm from "../components/QuizMainForm";
import { getRecordsListActive, getWordsListActive } from "../service/word";
import RecordsReadModal from "../components/RecordsReadModal";
import QuizWaitForm from "../components/QuizWaitForm";
import UseModal from "../components/UseModal";
import QuizForm from "../components/QuizForm";
import {
  resultPushActive,
  dateRecordActive,
  quizStopActive,
} from "../service/quiz";
import { v4 as uuidv4 } from "uuid";
import QuizEndModal from "../components/QuizEndModal";
import CurrentRecordModal from "../components/CurrentRecordModal";
import RecordDateModal from "../components/RecordDateModal";
import { useQuery } from "react-query";
import spinner from "../assets/spinner.gif";
import {
  AnswersType,
  OnClickType,
  QuizType,
  WordObjectType,
} from "../components/TypeAlias";

let INDEX = 0;
const WORDS = 5;
let matchedArr: WordObjectType[] = [];
let NotMatchedArr: WordObjectType[] = [];

export default function Quiz({
  Navbar,
  LocalData,
  inputMainCss,
  inputInputCss,
}: QuizType) {
  const writer = LocalData?.email;
  const now = new Date();
  const year = now.getFullYear();
  const month = ("0" + (now.getMonth() + 1)).slice(-2);
  const day = ("0" + now.getDate()).slice(-2);
  const hours = ("0" + now.getHours()).slice(-2);
  const minutes = ("0" + now.getMinutes()).slice(-2);
  const today = year + "." + month + "." + day + " " + hours + ":" + minutes;
  const [getWords, setGetWords] = useState<Array<any>>([]);
  const [question, setQuestion] = useState<Array<any>>([]);
  const [answer, setAnswer] = useState<string>("");
  const [btnMatch, setBtnMatch] = useState<boolean>(false);
  const [btnStart, setBtnStart] = useState<boolean>(false);
  const [btnUse, setBtnUse] = useState<boolean>(false);
  const [matched, setMatched] = useState<boolean>(false);
  const [notMatched, setNotMatched] = useState<boolean>(false);
  const [quizEnd, setQuizEnd] = useState<boolean>(false);
  const [currentRecord, setCurrentRecord] = useState<boolean>(false);
  const [recordsRead, setRecordsRead] = useState<boolean>(false);
  const [getRecords, setGetRecords] = useState<Array<any>>([]);
  const [getRecordDate, setGetRecordDate] = useState<boolean>(false);
  const [getRecordDateMatched, setGetRecordDateMatched] = useState<Array<any>>(
    []
  );
  const [getRecordDateNotMatched, setGetRecordDateNotMatched] = useState<
    Array<any>
  >([]);

  const onShuffle = () => {
    const shuffledArray = [...getWords].sort(() => Math.random() - 0.5);
    setQuestion(shuffledArray);
  };

  const booleanChange = (e: any) => {
    let id = e.target.id;
    if (id === "match" || id === "select") {
      setBtnMatch((prev) => !prev);
    } else if (id === "start" || id === "restart") {
      setBtnStart((prev) => !prev);
      onShuffle();
    } else if (id === "use") {
      setBtnUse((prev) => !prev);
    }
  };

  const resultPush = async ({
    writer,
    today,
    matchedArr,
    NotMatchedArr,
  }: AnswersType) => {
    resultPushActive({ matchedArr, NotMatchedArr, today, writer });
  };

  const matchedAnswer = () => {
    setAnswer("");
    setMatched(true);
    let matchedQuestion = {
      _key: uuidv4(),
      enWord: question[INDEX].enWord,
      krWord: question[INDEX].krWord,
    };
    matchedArr.push(matchedQuestion);
    setTimeout(() => {
      setMatched(false);
      INDEX++;
    }, 1000);
  };

  const NotMatchedAnswer = () => {
    setAnswer("");
    setNotMatched(true);
    let notMatchedQuestion = {
      _key: uuidv4(),
      enWord: question[INDEX].enWord,
      krWord: question[INDEX].krWord,
    };
    NotMatchedArr.push(notMatchedQuestion);
    setTimeout(() => {
      setNotMatched(false);
      INDEX++;
    }, 1000);
  };

  const matchedEndAnswer = () => {
    setAnswer("");
    setMatched(true);
    let matchedQuestion = {
      _key: uuidv4(),
      enWord: question[INDEX].enWord,
      krWord: question[INDEX].krWord,
    };
    matchedArr.push(matchedQuestion);
    setTimeout(() => {
      setMatched(false);
      setQuizEnd(true);
    }, 1000);
  };

  const NotMatchedEndAnswer = () => {
    setAnswer("");
    setNotMatched(true);
    let notMatchedQuestion = {
      _key: uuidv4(),
      enWord: question[INDEX].enWord,
      krWord: question[INDEX].krWord,
    };
    NotMatchedArr.push(notMatchedQuestion);
    setTimeout(() => {
      setNotMatched(false);
      setQuizEnd(true);
    }, 1000);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (INDEX + 1 !== question.length) {
      if (question[INDEX].enWord === answer) {
        matchedAnswer();
      } else {
        NotMatchedAnswer();
      }
    } else {
      if (question[INDEX].enWord === answer) {
        matchedEndAnswer();
      } else {
        NotMatchedEndAnswer();
      }
      resultPush({ writer, today, matchedArr, NotMatchedArr });
    }
  };

  const quizStopBtn = async () => {
    quizStopActive({ today, writer, matchedArr, NotMatchedArr, setQuizEnd });
  };

  const onCurrentRecord = () => {
    setCurrentRecord(true);
  };

  const onCurrentRecordClose = () => {
    setCurrentRecord(false);
    setGetRecordDate(false);
  };

  const onRecordsRead = () => {
    setRecordsRead(true);
  };

  const onDateRecord = async ({ e, id }: OnClickType) => {
    e.preventDefault();
    dateRecordActive({
      id,
      setGetRecordDateMatched,
      setGetRecordDateNotMatched,
      setGetRecordDate,
    });
  };

  const onRecordsReadClose = () => {
    setRecordsRead(false);
  };

  const { isLoading } = useQuery("getLists", () => {
    getWordsListActive({ writer, setGetWords });
    getRecordsListActive({ writer, setGetRecords });
  });

  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[750px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <Navbar />
        {isLoading === true ? (
          <span className="flex justify-center w-full h-[90%] items-center text-2xl font-semibold">
            <img src={spinner} alt="로딩중" width="150px" />
          </span>
        ) : (
          <>
            <main className="h-[90%] flex flex-col justify-center items-center">
              {btnMatch === false ? (
                <QuizMainForm
                  WORDS={WORDS}
                  getWords={getWords}
                  booleanChange={booleanChange}
                  onRecordsRead={onRecordsRead}
                />
              ) : btnStart === false ? (
                <QuizWaitForm booleanChange={booleanChange} />
              ) : (
                <QuizForm
                  btnStart={btnStart}
                  INDEX={INDEX}
                  question={question}
                  matched={matched}
                  notMatched={notMatched}
                  onSubmit={onSubmit}
                  inputMainCss={inputMainCss}
                  inputInputCss={inputInputCss}
                  answer={answer}
                  setAnswer={setAnswer}
                  quizStopBtn={quizStopBtn}
                  booleanChange={booleanChange}
                />
              )}
            </main>
            {btnUse === true && <UseModal booleanChange={booleanChange} />}
            {quizEnd === true && (
              <QuizEndModal
                getWords={getWords}
                matchedArr={matchedArr}
                NotMatchedArr={NotMatchedArr}
                onCurrentRecord={onCurrentRecord}
              />
            )}
            {currentRecord === true && (
              <CurrentRecordModal
                matchedArr={matchedArr}
                NotMatchedArr={NotMatchedArr}
                onCurrentRecordClose={onCurrentRecordClose}
              />
            )}
            {recordsRead === true && (
              <RecordsReadModal
                getRecords={getRecords}
                onDateRecord={onDateRecord}
                onRecordsReadClose={onRecordsReadClose}
              />
            )}
            {getRecordDate === true && (
              <RecordDateModal
                getRecordDateMatched={getRecordDateMatched}
                getRecordDateNotMatched={getRecordDateNotMatched}
                onCurrentRecordClose={onCurrentRecordClose}
              />
            )}
          </>
        )}
      </div>
    </section>
  );
}
