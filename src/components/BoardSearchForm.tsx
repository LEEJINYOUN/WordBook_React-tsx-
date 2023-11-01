import { BoardSearchFormType } from "../types/type";

export default function BoardSearchForm({
  onSearchBoardChange,
  searchBoard,
}: BoardSearchFormType) {
  return (
    <div className="w-[75%] h-full">
      <input
        className="mx-auto px-6 flex justify-center items-center w-[80%] h-[45px] rounded-lg text-base sm:text-lg outline-none my-3 border border-gray-300"
        type="text"
        name="boardSearch"
        placeholder="제목 검색"
        onChange={onSearchBoardChange}
        value={searchBoard}
      />
    </div>
  );
}
