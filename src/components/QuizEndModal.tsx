import { QuizEndModalType } from "./TypeAlias";

export default function QuizEndModal({
  getWords,
  matchedArr,
  NotMatchedArr,
  onCurrentRecord,
}: QuizEndModalType) {
  const quizClose = () => {
    window.location.replace("/quiz");
  };

  return (
    <div className="z-100 absolute top-0 left-0  w-full h-full rounded-2xl bg-black/40 flex">
      <div className="bg-white m-auto w-[90%] h-[70%] rounded-2xl">
        <div className="h-[60%] flex flex-col">
          <div className="flex justify-center h-[50px] items-center bg-lime-500 text-white text-lg font-semibold rounded-t-2xl">
            퀴즈 결과
          </div>
          <div className="border border-gray-300 flex flex-row w-[360px] h-[40%] m-auto rounded-xl shadow-2xl">
            <div className="w-[120px] flex flex-col justify-center text-center">
              <div className="h-[50%] font-bold flex justify-center items-center">
                전체 문제
              </div>
              <div className="h-[50%] text-2xl font-extrabold flex justify-center items-center">
                {getWords.length}
              </div>
            </div>
            <div className="border-x border-gray-300 w-[120px]">
              <div className="h-[50%] font-bold flex justify-center items-center">
                맞춘 문제
              </div>
              <div className="h-[50%] text-2xl font-extrabold flex justify-center items-center">
                {matchedArr.length}
              </div>
            </div>
            <div className="w-[120px]">
              <div className="h-[50%] font-bold flex justify-center items-center">
                틀린 문제
              </div>
              <div className="h-[50%] text-2xl font-extrabold flex justify-center items-center">
                {NotMatchedArr.length}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[40%] flex flex-col justify-center items-center">
          <button
            className="bg-blue-300 my-5 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
            onClick={onCurrentRecord}
          >
            단어확인
          </button>
          <button
            className="bg-blue-300 my-5 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
            onClick={quizClose}
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  );
}
