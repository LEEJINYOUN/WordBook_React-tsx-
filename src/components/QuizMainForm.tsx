import { QuizMainFormType } from "./TypeAlias";

export default function QuizMainForm({
  WORDS,
  getWords,
  booleanChange,
  onRecordsRead,
}: QuizMainFormType) {
  const btnMatchCss = `w-[130px] h-[50px] rounded-xl flex justify-center items-center my-4 font-semibold text-base sm:text-lg text-white`;
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-[30%] flex justify-center items-center font-bold text-red-400 text-base sm:text-lg">
        &#8251; 등록된 단어가 {WORDS}개 이상일때만 가능합니다.
      </div>
      <div className="w-full h-[70%] flex flex-col justify-center items-center">
        <button
          className={
            getWords.length > WORDS - 1
              ? `${btnMatchCss} bg-orange-400 hover:bg-orange-600`
              : `${btnMatchCss} bg-gray-500 cursor-not-allowed`
          }
          id="match"
          disabled={getWords.length > WORDS - 1 ? false : true}
          onClick={(e) => booleanChange(e)}
        >
          단어 맞추기
        </button>
        <button
          className={`${btnMatchCss} bg-orange-400 hover:bg-orange-600`}
          onClick={onRecordsRead}
        >
          기록 리스트
        </button>
      </div>
    </div>
  );
}
