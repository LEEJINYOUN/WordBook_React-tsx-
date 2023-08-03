import { BoardTopType } from "./TypeAlias";
import BoardSearchForm from "./BoardSearchForm";

export default function BoardTop({
  onSearchBoardChange,
  searchBoard,
  onCategorySelected,
}: BoardTopType) {
  return (
    <div className="mx-auto w-full h-[10%] ">
      <div className="flex flex-rol items-center">
        <BoardSearchForm
          onSearchBoardChange={onSearchBoardChange}
          searchBoard={searchBoard}
        />
        <div className="w-[25%] h-full flex justify-center items-center">
          <select
            className="w-[100px] h-[35px] select-none rounded-lg bg-gray-100 ring-1 ring-gray-300 text-sm cursor-pointer outline-none px-2 "
            onChange={(e) => {
              onCategorySelected(e);
            }}
          >
            <option value="all">모두</option>
            <option value="question">질문</option>
            <option value="share">공유</option>
          </select>
        </div>
      </div>
    </div>
  );
}
