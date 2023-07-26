import { RecordDateModalType } from "./TypeAlias";

export default function RecordDateModal({
  getRecordDateMatched,
  getRecordDateNotMatched,
  onCurrentRecordClose,
}: RecordDateModalType) {
  return (
    <div className="z-120 absolute top-0 left-0  w-full h-full rounded-2xl bg-black/40 flex">
      <div className="bg-white m-auto w-[90%] h-[70%] rounded-2xl">
        <div className="h-[10%]">
          <div className="flex justify-center h-full items-center bg-lime-500 text-white text-lg font-semibold rounded-t-2xl">
            결과
          </div>
        </div>
        <div className="h-[80%] border-b-2 border-gray-200 overflow-y-auto scrollbar-hide">
          {getRecordDateMatched.map((item, key) => {
            return (
              <div
                key={key}
                className="border border-green-500 text-green-500 flex justify-center items-center text-center mx-auto my-4 w-[85%] h-[70px] rounded-xl"
              >
                <div className="w-[90%] h-full">
                  <div className="w-full h-[50%] flex justify-center items-center text-lg font-semibold">
                    {item.enWord}
                  </div>
                  <div className="w-full h-[50%] flex justify-center items-center text-lg font-semibold">
                    {item.krWord}
                  </div>
                </div>
              </div>
            );
          })}
          {getRecordDateNotMatched.map((item, key) => {
            return (
              <div
                key={key}
                className="border border-red-500 text-red-500 flex justify-center items-center text-center mx-auto my-4 w-[85%] h-[70px] rounded-xl"
              >
                <div className="w-[90%] h-full">
                  <div className="w-full h-[50%] flex justify-center items-center text-lg font-semibold">
                    {item.enWord}
                  </div>
                  <div className="w-full h-[50%] flex justify-center items-center text-lg font-semibold">
                    {item.krWord}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-[10%] flex justify-center items-center">
          <button
            className="bg-blue-300 w-[100px] h-10 text-white rounded-lg hover:bg-blue-400 hover:font-bold duration-200"
            onClick={onCurrentRecordClose}
          >
            나가기
          </button>
        </div>
      </div>
    </div>
  );
}
