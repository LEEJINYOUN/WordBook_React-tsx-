import { BooleanChangeType } from "../types/type";

export default function QuizWaitForm({ booleanChange }: BooleanChangeType) {
  return (
    <>
      <div className="border-b-2 border-gray-200 mx-auto w-full h-[90%] flex justify-center items-center font-bold text-xl">
        준비가 되었으면 '시작' 을 클릭해주세요.
      </div>
      <div className="mx-auto w-full h-[10%] flex justify-around items-center">
        <button
          className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
          id="select"
          onClick={booleanChange}
        >
          뒤로가기
        </button>
        <button
          className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
          id="start"
          onClick={booleanChange}
        >
          시작
        </button>
        <button
          className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
          id="use"
          onClick={booleanChange}
        >
          이용방법
        </button>
      </div>
    </>
  );
}
