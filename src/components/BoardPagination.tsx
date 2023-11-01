import { BoardPaginationType, CssType } from "../types/type";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function BoardPagination({
  currentPage,
  setCurrentPage,
  pages,
}: BoardPaginationType) {
  const paginationCss: CssType = `mx-2 w-[40px] h-[40px] rounded-full border border-gray-400 duration-200`;
  const arrowCss: CssType = `mx-2 w-[40px] h-[40px] rounded-full border border-gray-400 duration-200 flex justify-center items-center text-xl`;

  return (
    <div className="mx-auto w-full h-[10%] flex items-center overflow-x-auto">
      {pages.length !== 0 && (
        <div className="flex justify-center items-center w-[1000px] h-full">
          <button
            className={
              currentPage === 1
                ? `${arrowCss} cursor-not-allowed`
                : `${arrowCss} hover:bg-blue-400 hover:text-white hover:border-none`
            }
            disabled={currentPage === 1 ? true : false}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <MdKeyboardArrowLeft className="w-full h-full rounded-full" />
          </button>
          {pages.map((page, key) => {
            return (
              <button
                className={
                  page === currentPage
                    ? `${paginationCss} bg-blue-400 text-white border-none`
                    : `${paginationCss} hover:bg-blue-400 hover:text-white hover:border-none`
                }
                key={key}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}
          <button
            className={
              currentPage === pages[pages.length - 1]
                ? `${arrowCss} cursor-not-allowed`
                : `${arrowCss} hover:bg-blue-400 hover:text-white hover:border-none`
            }
            disabled={currentPage === pages[pages.length - 1] ? true : false}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <MdKeyboardArrowRight className="w-full h-full rounded-full" />
          </button>
        </div>
      )}
    </div>
  );
}
