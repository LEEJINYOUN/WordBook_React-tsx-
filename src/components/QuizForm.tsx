import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { QuizFormType } from "../types/type";

export default function QuizForm({
  btnStart,
  QUIZ_INDEX,
  question,
  matched,
  notMatched,
  onSubmit,
  inputMainCss,
  inputInputCss,
  answer,
  setAnswer,
  quizStopBtn,
  buttonChange,
}: QuizFormType) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "answer") {
      setAnswer(value.replace(/[^A-Za-z]/g, "").toLowerCase());
    }
  };

  return (
    <>
      <div className="border-b-2 border-gray-200 mx-auto w-full h-[90%] flex justify-center items-center">
        {btnStart === true && (
          <div className="w-[90%] h-[80%] rounded-xl">
            <div className="h-[10%] flex justify-center">
              <span className="w-[50px] flex justify-center items-center font-semibold text-xl">
                {QUIZ_INDEX + 1} / {question.length}
              </span>
            </div>
            <div className="h-[60%] flex justify-center items-center text-2xl font-bold">
              {question[QUIZ_INDEX].krWord}
            </div>
            <form
              onSubmit={
                matched === false || notMatched === false ? onSubmit : false
              }
            >
              <input
                className={`${inputMainCss} ${inputInputCss}`}
                type="text"
                name="answer"
                required
                onChange={onChange}
                value={answer}
                disabled={
                  matched === true || notMatched === true ? true : false
                }
              />
              <input
                className={
                  matched === true || notMatched === true
                    ? `${inputMainCss} bg-gray-300 text-white cursor-not-allowed`
                    : `${inputMainCss} duration-200 hover:bg-blue-500 hover:font-extrabold bg-blue-300 text-white cursor-pointer`
                }
                type="submit"
                value="정답 제출"
                disabled={
                  matched === true || notMatched === true ? true : false
                }
              />
            </form>
            {matched === true && (
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 text-green-500 text-[50px]">
                <AiOutlineCheckCircle />
              </div>
            )}
            {notMatched === true && (
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 text-red-500 text-[50px]">
                <AiOutlineCloseCircle />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mx-auto w-full h-[10%] flex justify-around items-center">
        <button
          className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
          onClick={quizStopBtn}
        >
          그만
        </button>
        <button
          className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
          id="use"
          onClick={buttonChange}
        >
          이용방법
        </button>
      </div>
    </>
  );
}
