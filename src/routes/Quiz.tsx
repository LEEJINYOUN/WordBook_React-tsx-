import React, { useEffect, useState } from "react";
import { cssType, navbarType } from "../App";
import QuizMainForm from "../components/QuizMainForm";
import { getWordList } from "../service/word";
import { userInfoType } from "./Login";
import RecordsReadModal from "../components/RecordsReadModal";
import QuizWaitForm from "../components/QuizWaitForm";
import UseModal from "../components/UseModal";
type Props = {
  Navbar: navbarType;
  LocalData: userInfoType | null;
  inputMainCss: cssType;
  inputInputCss: cssType;
};

const WORDS = 5;

export default function Quiz({
  Navbar,
  LocalData,
  inputMainCss,
  inputInputCss,
}: Props) {
  const writer = LocalData?.email;
  const [getWords, setGetWords] = useState<Array<any>>([]);
  const [btnMatch, setBtnMatch] = useState<boolean>(false);
  const [btnStart, setBtnStart] = useState<boolean>(false);
  const [btnUse, setBtnUse] = useState<boolean>(false);
  const [recordsRead, setRecordsRead] = useState<boolean>(false);

  const booleanChange = (e: any) => {
    let id = e.target.id;
    if (id === "match" || id === "select") {
      setBtnMatch((prev) => !prev);
    } else if (id === "start" || id === "restart") {
      setBtnStart((prev) => !prev);
      // onShuffle();
    } else if (id === "use") {
      setBtnUse((prev) => !prev);
    }
  };

  const onRecordsRead = () => {
    setRecordsRead(true);
  };

  const onRecordsReadClose = () => {
    setRecordsRead(false);
  };

  useEffect(() => {
    getWordList({ writer, setGetWords });
  }, []);
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[750px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <Navbar />
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
            <div>3</div>
            // <QuizForm
            //   btnStart={btnStart}
            //   INDEX={INDEX}
            //   WORDS={WORDS}
            //   question={question}
            //   matched={matched}
            //   notMatched={notMatched}
            //   onSubmit={onSubmit}
            //   inputMainCss={inputMainCss}
            //   inputInputCss={inputInputCss}
            //   answer={answer}
            //   setAnswer={setAnswer}
            //   quizStop={quizStop}
            //   booleanChange={booleanChange}
            // />
          )}
          {recordsRead === true && (
            <RecordsReadModal
              // getRecords={getRecords}
              // onDateRecord={onDateRecord}
              onRecordsReadClose={onRecordsReadClose}
            />
          )}
        </main>
        {btnUse === true && <UseModal booleanChange={booleanChange} />}
      </div>
    </section>
  );
}
