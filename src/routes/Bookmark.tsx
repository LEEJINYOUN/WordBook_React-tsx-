import React, { useState } from "react";
import {
  getWordListBookmarkActive,
  getWordListBookmarkEnWordOrderActive,
  getWordListBookmarkKrWordOrderActive,
} from "../service/word";
import { useQuery } from "react-query";
import spinner from "../assets/spinner.gif";
import { WordbookType } from "../components/TypeAlias";
import BookmarkTop from "../components/BookmarkTop";
import WordbookItemLeft from "../components/WordbookItemLeft";
import WordbookItemRight from "../components/WordbookItemRight";

export default function Bookmark({ Navbar, LocalData }: WordbookType) {
  const writer = LocalData?.email;
  const [searchWord, setSearchWord] = useState<string>("");
  const [getWords, setGetWords] = useState<Array<any>>([]);
  const [orderSelect, setOrderSelect] = useState<string>("order");

  const onOrderSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
          <WordbookItemLeft
            itemKey={key}
            enWord={item.enWord}
            krWord={item.krWord}
          />
          <WordbookItemRight bookmark={item.bookmark} id={item._id} />
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
            <BookmarkTop
              searchWord={searchWord}
              onSearchChange={onSearchChange}
              localGetOrder={localGetOrder}
              onOrderSelected={onOrderSelected}
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
