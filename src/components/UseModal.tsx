import React from "react";

type Props = {
  booleanChange: any;
};

export default function UseModal({ booleanChange }: Props) {
  return (
    <div className="z-50 absolute top-0 left-0  w-full h-full rounded-2xl bg-black/40 flex">
      <div className="bg-white m-auto w-[90%] h-[60%] rounded-2xl">
        <div className="h-[80%] font-semibold p-4">
          <p className="py-2">1. '시작' 을 클릭하면 퀴즈가 시작됩니다.</p>
          <p className="py-2">2. '그만' 을 클릭하면 퀴즈가 종료됩니다.</p>
          <p className="py-2">
            3. '그만' 을 클릭 or 퀴즈를 끝내면 기록이 저장됩니다.
          </p>
        </div>
        <div className="h-[20%] flex justify-center items-center">
          <button
            className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
            id="use"
            onClick={booleanChange}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
