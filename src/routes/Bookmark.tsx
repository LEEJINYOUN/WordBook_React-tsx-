import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import {
  getWordListBookmarkActive,
  getWordListBookmarkEnWordOrderActive,
  getWordListBookmarkKrWordOrderActive,
  wordBookmarkCheckActive,
  wordDeleteActive,
} from "../service/word";
import { AiFillStar } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useQuery } from "react-query";
import spinner from "../assets/spinner.gif";
import { OnClickType, WordbookType } from "../components/TypeAlias";

export type OrderType = {
  orderSelect: string;
};

export default function Bookmark({ Navbar, LocalData }: WordbookType) {
  const writer = LocalData?.email;
  const [searchWord, setSearchWord] = useState<string>("");
  const [getWords, setGetWords] = useState<Array<any>>([]);
  const [orderSelect, setOrderSelect] = useState<string>("order");

  const onOrderSelected = (e: any) => {
    let value = e.target.value;
    if (value === "order") {
      setOrderSelect("order");
      localStorage.setItem("bookmarkOrder", JSON.stringify(value));
      getWordListBookmarkActive({ writer, setGetWords });
    } else if (value === "enOrder") {
      setOrderSelect("enOrder");
      localStorage.setItem("bookmarkOrder", JSON.stringify(value));
      getWordListBookmarkEnWordOrderActive({ writer, setGetWords });
    } else if (value === "krOrder") {
      setOrderSelect("krOrder");
      localStorage.setItem("bookmarkOrder", JSON.stringify(value));
      getWordListBookmarkKrWordOrderActive({ writer, setGetWords });
    }
  };

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

  const localOrder = localStorage.getItem("bookmarkOrder");
  const localGetOrder = localOrder && JSON.parse(localOrder);

  const { isLoading } = useQuery("getWordBookmark", () => {
    if (localGetOrder === null || localGetOrder === "order") {
      getWordListBookmarkActive({ writer, setGetWords });
    } else if (localGetOrder === "enOrder") {
      getWordListBookmarkEnWordOrderActive({ writer, setGetWords });
    } else if (localGetOrder === "krOrder") {
      getWordListBookmarkKrWordOrderActive({ writer, setGetWords });
    }
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
            <div className="flex flex-rol">
              <SearchForm
                searchWord={searchWord}
                onSearchChange={onSearchChange}
              />
              <div className="w-[20%] h-full flex justify-center items-center">
                <select
                  className="w-[80px] h-[35px] select-none rounded-lg bg-gray-100 ring-1 ring-gray-300 text-sm cursor-pointer outline-none px-2 "
                  defaultValue={localGetOrder}
                  onChange={(e) => {
                    onOrderSelected(e);
                  }}
                >
                  <option value="order">등록순</option>
                  <option value="enOrder">알파벳순</option>
                  <option value="krOrder">한글순</option>
                </select>
              </div>
            </div>
            <div className="mx-auto w-full h-[90%] overflow-y-auto scrollbar-hide">
              {filterWords}
            </div>
          </main>
        )}
      </div>
    </section>
  );
}
