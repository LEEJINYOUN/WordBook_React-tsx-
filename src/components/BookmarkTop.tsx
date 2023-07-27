import SearchForm from "./SearchForm";
import { WordbookTopType } from "./TypeAlias";

export default function BookmarkTop({
  searchWord,
  onSearchChange,
  localGetOrder,
  onOrderSelected,
}: WordbookTopType) {
  return (
    <div className="flex flex-rol">
      <SearchForm searchWord={searchWord} onSearchChange={onSearchChange} />
      <div className="w-[25%] h-full flex justify-center items-center">
        <select
          className="w-[100px] h-[35px] select-none rounded-lg bg-gray-100 ring-1 ring-gray-300 text-sm cursor-pointer outline-none px-2"
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
  );
}
