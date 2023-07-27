import { AiFillStar } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { wordBookmarkCheckActive, wordDeleteActive } from "../service/word";
import { OnClickType, WordbookItemRightType } from "./TypeAlias";

export default function WordbookItemRight({
  bookmark,
  id,
}: WordbookItemRightType) {
  const onBookmark = async ({ e, id }: OnClickType) => {
    e.preventDefault();
    wordBookmarkCheckActive({ id });
  };

  const onDelete = async ({ e, id }: OnClickType) => {
    e.preventDefault();
    wordDeleteActive({ id });
  };
  return (
    <div className="w-[10%] h-full">
      <div className=" flex flex-col w-full h-[50%] justify-center items-center">
        {bookmark === false ? (
          <AiFillStar
            className="text-lg cursor-pointer duration-200 hover:text-yellow-300"
            id={id}
            onClick={(e) => onBookmark({ e, id })}
          />
        ) : (
          <AiFillStar
            className="text-lg cursor-pointer text-yellow-300"
            id={id}
            onClick={(e) => onBookmark({ e, id })}
          />
        )}
      </div>
      <div className="flex flex-col w-full h-[50%] justify-center items-center">
        <BsFillTrashFill
          className="cursor-pointer duration-200 hover:text-red-500 "
          id={id}
          onClick={(e) => onDelete({ e, id })}
        />
      </div>
    </div>
  );
}
