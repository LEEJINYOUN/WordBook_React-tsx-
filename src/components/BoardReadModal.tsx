import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BoardReadModalType, OnDeleteBoardType } from "./TypeAlias";
import { deleteBoardActive } from "../service/board";

export default function BoardReadModal({
  setBoardReadModal,
  boardRead,
  writer,
}: BoardReadModalType) {
  const onDeleteBoard = async ({ e, id }: OnDeleteBoardType) => {
    e.preventDefault();
    deleteBoardActive(id);
  };
  return (
    <div className="z-120 absolute top-0 left-0 w-full h-full rounded-2xl bg-black/40 flex">
      <div className="bg-white m-auto w-[90%] h-[80%] rounded-2xl">
        <div className="flex h-[10%] justify-end text-center ">
          <span
            className="mx-1 w-[25px] h-[25px] flex justify-center items-center cursor-pointer duration-200 hover:text-red-500"
            onClick={() => setBoardReadModal(false)}
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className="flex flex-col h-[80%]">
          <div className="w-full h-[10%] flex border-y border-gray-400/60">
            <span className="pl-3 w-[20%] h-full flex justify-start items-center font-bold">
              작성자
            </span>
            <div className="w-[80%] h-full flex items-center">
              {boardRead[0].writer}
            </div>
          </div>
          <div className="w-full h-[10%] flex">
            <span className="pl-3 w-[20%] h-full flex justify-start items-center font-bold">
              날짜
            </span>
            <div className="w-[80%] h-full flex items-center">
              {boardRead[0].today}
            </div>
          </div>
          <div className="w-full h-[10%] flex border-y border-gray-400/60">
            <span className="pl-3 w-[20%] h-full flex justify-start items-center font-bold">
              카테고리
            </span>
            <div className="w-[80%] h-full flex justify-start items-center">
              {boardRead[0].category}
            </div>
          </div>
          <div className="w-full h-[12%] flex">
            <span className="pl-3 w-[20%] h-full flex justify-start items-center font-bold">
              제목
            </span>
            <div className="w-[80%] h-full flex items-center text-ellipsis overflow-hidden">
              {boardRead[0].title}
            </div>
          </div>
          <div className="w-full h-[58%] flex border-y border-gray-400/60">
            <span className="pl-3 w-[20%] h-full flex justify-start items-center font-bold">
              내용
            </span>
            <div className="w-[80%] h-full flex pt-2">
              {boardRead[0].content}
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center h-[10%]">
          <button
            className=" bg-blue-300 w-[100px] h-9 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
            onClick={() => setBoardReadModal(false)}
          >
            닫기
          </button>
          {boardRead[0].writer === writer ? (
            <button
              className="bg-blue-300 w-[100px] h-9 text-white rounded-lg hover:bg-red-400 hover:font-bold duration-200"
              id={boardRead[0]._id}
              onClick={(e) => onDeleteBoard({ e, id: boardRead[0]._id })}
            >
              삭제하기
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
