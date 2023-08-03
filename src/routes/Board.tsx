import { useState } from "react";
import { OnBoardReadType, WordbookType } from "../components/TypeAlias";
import {
  getBoardReadActive,
  getBoardsListQuestionActive,
  getBoardsListShareActive,
} from "../service/board";
import { useQuery } from "react-query";
import spinner from "../assets/spinner.gif";
import { getBoardsListActive } from "../service/board";
import BoardTop from "../components/BoardTop";
import AddBoardModal from "../components/AddBoardModal";
import BoardReadModal from "../components/BoardReadModal";
import BoardPagination from "../components/BoardPagination";

export default function Board({ Navbar, LocalData }: WordbookType) {
  const writer = LocalData?.email;
  const [searchBoard, setSearchBoard] = useState<string>("");
  const [addBoardModal, setAddBoardModal] = useState<boolean>(false);
  const [getBoards, setGetBoards] = useState<Array<any>>([]);
  const [boardReadModal, setBoardReadModal] = useState<boolean>(false);
  const [boardRead, setBoardRead] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = getBoards.slice(firstPostIndex, lastPostIndex);
  let pages = [];
  for (let i = 1; i <= Math.ceil(getBoards.length / postsPerPage); i++) {
    pages.push(i);
  }
  const onSearchBoardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "boardSearch") {
      setSearchBoard(value);
    }
  };
  const filterBoards = currentPosts
    // eslint-disable-next-line array-callback-return
    .filter((val) => {
      if (searchBoard === "") {
        return val;
      } else if (val.title.includes(searchBoard.toLowerCase())) {
        return val;
      }
    })
    .map((item, key) => {
      return (
        <div
          id={item._id}
          key={key}
          className="mx-auto w-full px-2 h-[20%] flex flex-col border-b border-gray-400 cursor-pointer hover:bg-gray-300/40"
          onClick={(e) => onBoardRead({ e, id: item._id })}
        >
          <div className="w-full h-[50%] px-2 flex items-center">
            <span className="mr-1">[{item.category}]</span>
            <span className="w-[150px] text-ellipsis overflow-hidden">
              {item.title}
            </span>
          </div>
          <div className=" w-full h-[50%] px-2 flex items-center justify-between text-gray-400">
            <div>{item.writer}</div>
            <div className="text-sm">{item.today}</div>
          </div>
        </div>
      );
    });

  const onCategorySelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    if (value === "all") {
      getBoardsListActive({ setGetBoards });
      setCurrentPage(1);
    } else if (value === "question") {
      getBoardsListQuestionActive({ setGetBoards });
      setCurrentPage(1);
    } else if (value === "share") {
      getBoardsListShareActive({ setGetBoards });
      setCurrentPage(1);
    }
  };

  const onAddBoardModalToggle = () => {
    setAddBoardModal((prev) => !prev);
  };

  const onBoardRead = async ({ e, id }: OnBoardReadType) => {
    e.preventDefault();
    getBoardReadActive({ id, setBoardRead, setBoardReadModal });
  };

  const { isLoading } = useQuery("getBoards", () => {
    getBoardsListActive({ setGetBoards });
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
            <BoardTop
              onSearchBoardChange={onSearchBoardChange}
              searchBoard={searchBoard}
              onCategorySelected={onCategorySelected}
            />
            <div className="mx-auto w-full h-[70%]">{filterBoards}</div>
            <BoardPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pages={pages}
            />
            <div className="mx-auto w-full h-[10%] flex justify-center items-center">
              <button
                className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
                onClick={onAddBoardModalToggle}
              >
                글쓰기
              </button>
            </div>
            {addBoardModal === true && (
              <AddBoardModal
                onAddBoardModalToggle={onAddBoardModalToggle}
                writer={writer}
              />
            )}
            {boardReadModal === true && (
              <BoardReadModal
                setBoardReadModal={setBoardReadModal}
                boardRead={boardRead}
                writer={writer}
              />
            )}
          </main>
        )}
      </div>
    </section>
  );
}
