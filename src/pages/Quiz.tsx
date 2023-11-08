import React, { useContext, useState } from "react";
import QuizMainForm from "../components/QuizMainForm";
import { fetchRecordsListAPI, fetchWordListAPI } from "../service/word";
import RecordsReadModal from "../components/RecordsReadModal";
import QuizWaitForm from "../components/QuizWaitForm";
import UseModal from "../components/UseModal";
import QuizForm from "../components/QuizForm";
import { dateRecordAPI, quizStopAPI, resultPushAPI } from "../service/quiz";
import { v4 as uuidv4 } from "uuid";
import QuizEndModal from "../components/QuizEndModal";
import CurrentRecordModal from "../components/CurrentRecordModal";
import RecordDateModal from "../components/RecordDateModal";
import { useQuery } from "react-query";
import spinner from "../assets/spinner.gif";
import { AnswersType, OnClickType, QuizType } from "../types/type";
import { AuthContext } from "../utils/AuthContext";
import Navbar from "../components/Navbar";
import { MATCH_ARR, NOT_MATCH_ARR } from "../constants/QuizConstant";
import { getFormatDate } from "../hooks/GetToday";

let QUIZ_INDEX = 0;

export default function Quiz({
  inputMainCss,
  inputInputCss,
  navigate,
}: QuizType) {
  const userContext = useContext(AuthContext);
  const writer = userContext.currentUser?.email;
  const today = getFormatDate(new Date());
  const [getWords, setGetWords] = useState<Array<any>>([]);
  const [question, setQuestion] = useState<Array<any>>([]);
  const [answer, setAnswer] = useState<string>("");
  const [btnMatch, setBtnMatch] = useState(false);
  const [btnStart, setBtnStart] = useState(false);
  const [btnUse, setBtnUse] = useState(false);
  const [matched, setMatched] = useState(false);
  const [notMatched, setNotMatched] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(false);
  const [recordsRead, setRecordsRead] = useState(false);
  const [getRecords, setGetRecords] = useState<Array<any>>([]);
  const [getRecordDate, setGetRecordDate] = useState(false);
  const [getRecordDateMatched, setGetRecordDateMatched] = useState<Array<any>>(
    []
  );
  const [getRecordDateNotMatched, setGetRecordDateNotMatched] = useState<
    Array<any>
  >([]);

  const quizShuffle = () => {
    const shuffledArray = [...getWords].sort(() => Math.random() - 0.5);
    setQuestion(shuffledArray);
  };

  const quizInit = () => {
    QUIZ_INDEX = 0;
    MATCH_ARR.length = 0;
    NOT_MATCH_ARR.length = 0;
  };

  const buttonChange = (e: any) => {
    let id = e.target.id;
    if (id === "match" || id === "select") {
      setBtnMatch((prev) => !prev);
    } else if (id === "start") {
      setBtnStart((prev) => !prev);
      quizShuffle();
      quizInit();
    } else if (id === "use") {
      setBtnUse((prev) => !prev);
    }
  };

  const resultPush = async ({
    writer,
    today,
    MATCH_ARR,
    NOT_MATCH_ARR,
  }: AnswersType) => {
    resultPushAPI({ MATCH_ARR, NOT_MATCH_ARR, today, writer });
  };

  const matchedAnswer = () => {
    setAnswer("");
    setMatched(true);
    let matchedQuestion = {
      _key: uuidv4(),
      enWord: question[QUIZ_INDEX].enWord,
      krWord: question[QUIZ_INDEX].krWord,
    };
    MATCH_ARR.push(matchedQuestion);
    setTimeout(() => {
      setMatched(false);
      QUIZ_INDEX++;
    }, 1000);
  };

  const NotMatchedAnswer = () => {
    setAnswer("");
    setNotMatched(true);
    let notMatchedQuestion = {
      _key: uuidv4(),
      enWord: question[QUIZ_INDEX].enWord,
      krWord: question[QUIZ_INDEX].krWord,
    };
    NOT_MATCH_ARR.push(notMatchedQuestion);
    setTimeout(() => {
      setNotMatched(false);
      QUIZ_INDEX++;
    }, 1000);
  };

  const matchedEndAnswer = () => {
    setAnswer("");
    setMatched(true);
    let matchedQuestion = {
      _key: uuidv4(),
      enWord: question[QUIZ_INDEX].enWord,
      krWord: question[QUIZ_INDEX].krWord,
    };
    MATCH_ARR.push(matchedQuestion);
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
      enWord: question[QUIZ_INDEX].enWord,
      krWord: question[QUIZ_INDEX].krWord,
    };
    NOT_MATCH_ARR.push(notMatchedQuestion);
    setTimeout(() => {
      setNotMatched(false);
      setQuizEnd(true);
    }, 1000);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (QUIZ_INDEX + 1 !== question.length) {
      if (question[QUIZ_INDEX].enWord === answer) {
        matchedAnswer();
      } else {
        NotMatchedAnswer();
      }
    } else {
      if (question[QUIZ_INDEX].enWord === answer) {
        matchedEndAnswer();
      } else {
        NotMatchedEndAnswer();
      }
      resultPush({ writer, today, MATCH_ARR, NOT_MATCH_ARR });
    }
  };

  const quizStopBtn = async () => {
    quizStopAPI({ today, writer, MATCH_ARR, NOT_MATCH_ARR, setQuizEnd });
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
    dateRecordAPI({
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
    fetchWordListAPI({ writer, setGetWords });
    fetchRecordsListAPI({ writer, setGetRecords });
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
                  getWords={getWords}
                  buttonChange={buttonChange}
                  onRecordsRead={onRecordsRead}
                />
              ) : btnStart === false ? (
                <QuizWaitForm buttonChange={buttonChange} />
              ) : (
                <QuizForm
                  btnStart={btnStart}
                  QUIZ_INDEX={QUIZ_INDEX}
                  question={question}
                  matched={matched}
                  notMatched={notMatched}
                  onSubmit={onSubmit}
                  inputMainCss={inputMainCss}
                  inputInputCss={inputInputCss}
                  answer={answer}
                  setAnswer={setAnswer}
                  quizStopBtn={quizStopBtn}
                  buttonChange={buttonChange}
                />
              )}
            </main>
            {btnUse === true && <UseModal buttonChange={buttonChange} />}
            {quizEnd === true && (
              <QuizEndModal
                getWords={getWords}
                MATCH_ARR={MATCH_ARR}
                NOT_MATCH_ARR={NOT_MATCH_ARR}
                onCurrentRecord={onCurrentRecord}
                navigate={navigate}
              />
            )}
            {currentRecord === true && (
              <CurrentRecordModal
                MATCH_ARR={MATCH_ARR}
                NOT_MATCH_ARR={NOT_MATCH_ARR}
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
