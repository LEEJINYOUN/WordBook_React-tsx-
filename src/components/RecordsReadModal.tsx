import React from "react";

type Props = {
  onRecordsReadClose: () => void;
};

export default function RecordsReadModal({ onRecordsReadClose }: Props) {
  return (
    <div className="z-110 absolute top-0 left-0  w-full h-full rounded-2xl bg-black/40 flex">
      <div className="bg-white m-auto w-[90%] h-[70%] rounded-2xl">
        <div className="h-[10%]">
          <div className="flex justify-center h-full items-center bg-lime-500 text-white text-lg font-semibold rounded-t-2xl">
            기록 리스트
          </div>
        </div>
        <div className="h-[80%] border-b-2 border-gray-200 overflow-y-auto scrollbar-hide">
          {/* {getRecords.map((item, key) => (
        <div key={key} className="w-[70%] m-auto">
          <button
            id={item._id}
            className="bg-blue-300 mt-4 w-full h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
            onClick={(e) => onDateRecord(e, item._id)}
          >
            {item.today}
          </button>
        </div>
      ))} */}
        </div>
        <div className="h-[10%] flex justify-center items-center">
          <button
            className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
            onClick={onRecordsReadClose}
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  );
}
