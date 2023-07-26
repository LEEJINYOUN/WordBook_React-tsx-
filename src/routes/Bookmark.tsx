import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import {
  getWordListBookmark,
  wordBookmarkCheckActive,
  wordDeleteActive,
} from "../service/word";
import { AiFillStar } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useQuery } from "react-query";
import spinner from "../assets/spinner.gif";
import { OnClickType, WordbookType } from "../components/TypeAlias";

export default function Bookmark({ Navbar, LocalData }: WordbookType) {
  const writer = LocalData?.email;
  const [searchWord, setSearchWord] = useState<string>("");
  const [getWords, setGetWords] = useState<Array<any>>([]);
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "search") {
      setSearchWord(value);
    }
  };

  const onBookmark = async ({ e, id }: OnClickType) => {
    e.preventDefault();
    wordBookmarkCheckActive({ id });
  };

  const onDelete = async ({ e, id }: OnClickType) => {
    e.preventDefault();
    wordDeleteActive({ id });
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
                  onClick={(e) => onBookmark({ e, id: item._id })}
                />
              ) : (
                <AiFillStar
                  className="text-lg cursor-pointer text-yellow-300"
                  id={item._id}
                  onClick={(e) => onBookmark({ e, id: item._id })}
                />
              )}
            </div>
            <div className="flex flex-col w-full h-[50%] justify-center items-center">
              <BsFillTrashFill
                className="cursor-pointer duration-200 hover:text-red-500 "
                id={item._id}
                onClick={(e) => onDelete({ e, id: item._id })}
              />
            </div>
          </div>
        </div>
      );
    });

  const { isLoading } = useQuery("getWordBookmark", () => {
    getWordListBookmark({ writer, setGetWords });
  });

  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[750px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <Navbar />
        {isLoading === true ? (
          <span className="flex justify-center w-full h-[90%] items-center text-2xl font-semibold">
            <img src={spinner} alt="로딩중" width="150px" />
          </span>
        ) : (
          <main className="h-[90%] flex flex-col">
            <SearchForm
              searchWord={searchWord}
              onSearchChange={onSearchChange}
            />
            <div className="mx-auto w-full h-[90%] overflow-y-auto scrollbar-hide">
              {filterWords}
            </div>
          </main>
        )}
      </div>
    </section>
  );
}
