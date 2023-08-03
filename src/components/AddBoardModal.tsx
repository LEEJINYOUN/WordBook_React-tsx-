import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AddBoardModalType } from "./TypeAlias";
import { addBoardActive } from "../service/board";

export default function AddBoardModal({
  onAddBoardModalToggle,
  writer,
}: AddBoardModalType) {
  const today = new Date();
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const onChange = (e: any) => {
    const {
      target: { name, value },
    } = e;
    if (name === "category") {
      setCategory(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    if (category !== "" && title !== "" && content !== "") {
      addBoardActive({
        writer,
        category,
        title,
        content,
        today: today.toLocaleString(),
      });
    } else {
      alert("빈칸이 있습니다. 다 채워 주세요.");
    }
  };
  const onCancel = () => {
    setTitle("");
    setContent("");
    onAddBoardModalToggle();
  };
  return (
    <div className="z-50 absolute top-0 left-0  w-full h-full rounded-2xl bg-black/40 flex">
      <div className="bg-white m-auto w-[90%] h-[75%] rounded-2xl">
        <div className="flex h-[10%] justify-end text-center">
          <span
            className="mx-1 w-[25px] h-[25px] flex justify-center items-center cursor-pointer duration-200 hover:text-red-500"
            onClick={onAddBoardModalToggle}
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className="flex flex-col h-[80%]">
          <div className="w-full h-[15%] flex border-y border-gray-400/60">
            <span className="pl-3 w-[20%] h-full flex justify-start items-center font-bold text-lg">
              카테고리
            </span>
            <div className="w-[80%] h-full flex justify-center items-center">
              <div className="mx-3 px-2 flex justify-center items-center text-center">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="category"
                  value="질문"
                  onChange={onChange}
                />
                <span className="mx-2">질문</span>
              </div>
              <div className="mx-3 px-2 flex justify-center items-center text-center">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="category"
                  value="공유"
                  onChange={onChange}
                />
                <span className="mx-2">공유</span>
              </div>
            </div>
          </div>
          <div className="w-full h-[15%] flex">
            <span className="pl-3 w-[20%] h-full flex justify-start items-center font-bold text-lg">
              제목
            </span>
            <div className="w-[80%] h-full flex items-center">
              <input
                className="px-3 w-[80%] h-8 font-semibold border border-gray-400 outline-none"
                type="text"
                name="title"
                required
                value={title}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="w-full h-[70%] flex border-y border-gray-400/60">
            <span className="pl-3 w-[20%] h-full flex justify-start items-center font-bold text-lg">
              내용
            </span>
            <div className="w-[80%] h-full flex items-center">
              <textarea
                className="p-2 border border-gray-400 resize-none outline-none scrollbar-hide"
                id="content"
                name="content"
                rows={10}
                cols={42}
                value={content}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center h-[10%]">
          <button
            className=" bg-blue-300 w-[100px] h-9 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
            onClick={onSubmit}
          >
            글쓰기
          </button>
          <button
            className="bg-blue-300 w-[100px] h-9 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
            onClick={onCancel}
          >
            취소하기
          </button>
        </div>
      </div>
    </div>
  );
}
