import React, { useState, useEffect } from "react";
import { navbarType } from "../App";
import SearchForm from "../components/SearchForm";
import { userInfoType } from "./Login";
import AddWordModal from "../components/AddWordModal";
import { getWordList, wordBookmarkCheck, wordDelete } from "../service/word";
import { AiFillStar } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

export type wordbookType = {
  Navbar: navbarType;
  LocalData: userInfoType | null;
};

export type deleteType = {
  e: React.MouseEvent<SVGElement, MouseEvent>;
  id: string;
};

export default function Wordbook({ Navbar, LocalData }: wordbookType) {
  const writer = LocalData?.email;
  const today = new Date();
  const [searchWord, setSearchWord] = useState<string>("");
  const [addModal, setAddModal] = useState<boolean>(false);
  const [enWord, setEnWord] = useState<string>("");
  const [krWord, setKrWord] = useState<string>("");
  const [getWords, setGetWords] = useState<Array<any>>([]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "search") {
      setSearchWord(value);
    }
  };

  const filterWords = getWords
    // eslint-disable-next-line array-callback-return
    .filter((val) => {
      if (searchWord === "") {
        return val;
      } else if (
        val.enWord.includes(searchWord.toLowerCase()) ||
        val.krWord.includes(searchWord.toLowerCase())
      ) {
        return val;
      }
    })
    .map((item, key) => {
      return (
        <div
          key={key}
          className="border border-gray-300 flex items-center text-center mx-auto pl-2 pt-2 my-4 w-[85%] h-[90px] rounded-xl"
        >
          <div className="w-[90%] h-full">
            <div className="w-full h-[30%] flex items-center text-lg font-semibold">
              {key + 1}. {item.enWord}
            </div>
            <div className="w-full h-[70%] flex items-center pl-2">
              {item.krWord}
            </div>
          </div>
          <div className="w-[10%] h-full">
            <div className=" flex flex-col w-full h-[50%] justify-center items-center">
              {item.bookmark === false ? (
                <AiFillStar
                  className="text-lg cursor-pointer duration-200 hover:text-yellow-300"
                  id={item._id}
                  onClick={(e) => onBookmark(e, item._id)}
                />
              ) : (
                <AiFillStar
                  className="text-lg cursor-pointer text-yellow-300"
                  id={item._id}
                  onClick={(e) => onBookmark(e, item._id)}
                />
              )}
            </div>
            <div className="flex flex-col w-full h-[50%] justify-center items-center">
              <BsFillTrashFill
                className="cursor-pointer duration-200 hover:text-red-500 "
                id={item._id}
                onClick={(e) => onDelete(e, item._id)}
              />
            </div>
          </div>
        </div>
      );
    });

  const onAddModal = () => {
    setAddModal((prev) => !prev);
    setEnWord("");
    setKrWord("");
  };

  const onBookmark = async (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    wordBookmarkCheck({ id });
  };

  const onDelete = async (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    wordDelete({ id });
  };

  useEffect(() => {
    getWordList({ writer, setGetWords });
  }, []);

  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[750px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <Navbar />
        <main className="h-[90%] flex flex-col">
          <SearchForm searchWord={searchWord} onSearchChange={onSearchChange} />
          <div className="mx-auto w-full h-[80%] overflow-y-auto scrollbar-hide">
            {filterWords}
          </div>
          <div className="mx-auto w-full h-[10%] flex justify-center items-center">
            <button
              className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
              onClick={onAddModal}
            >
              단어 등록
            </button>
          </div>
          {addModal === true && (
            <AddWordModal
              onAddModal={onAddModal}
              writer={writer}
              today={today}
              enWord={enWord}
              setEnWord={setEnWord}
              krWord={krWord}
              setKrWord={setKrWord}
            />
          )}
        </main>
      </div>
    </section>
  );
}
