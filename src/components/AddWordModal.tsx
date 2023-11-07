import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import AddWordModalForm from "./AddWordModalForm";
import { wordCheckAPI } from "../service/word";
import { AddWordModalType } from "../types/type";

export default function AddWordModal({
  onAddModal,
  writer,
  today,
  enWord,
  setEnWord,
  krWord,
  setKrWord,
}: AddWordModalType) {
  const addWordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "en") {
      setEnWord(value.replace(/[^A-Za-z]/g, ""));
    } else if (name === "kr") {
      setKrWord(value);
    }
  };

  const addWordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bookmark = false;
    if (krWord.trim() !== "") {
      wordCheckAPI({
        writer,
        enWord,
        setEnWord,
        krWord,
        setKrWord,
        bookmark,
        today,
      });
    } else {
      alert("공백이 존재합니다. 다시 적어주세요.");
    }
  };

  return (
    <div className="z-50 absolute top-0 left-0  w-full h-full rounded-2xl bg-black/40 flex">
      <div className="bg-white m-auto w-[90%] h-[40%] rounded-2xl">
        <div className="flex justify-end text-center h-[10%]">
          <span
            className="mx-1 w-[25px] h-[25px] flex justify-center items-center cursor-pointer duration-200 hover:text-red-500"
            onClick={onAddModal}
          >
            <AiOutlineClose />
          </span>
        </div>
        <AddWordModalForm
          enWord={enWord}
          krWord={krWord}
          addWordInputChange={addWordInputChange}
          addWordSubmit={addWordSubmit}
        />
      </div>
    </div>
  );
}
