import { WordbookItemLeftType } from "./TypeAlias";

export default function WordbookItemLeft({
  itemKey,
  enWord,
  krWord,
}: WordbookItemLeftType) {
  return (
    <div className="w-[90%] h-full">
      <div className="w-full h-[30%] flex items-center text-lg font-semibold">
        {itemKey + 1}. {enWord}
      </div>
      <div className="w-full h-[70%] flex items-center pl-2">{krWord}</div>
    </div>
  );
}
