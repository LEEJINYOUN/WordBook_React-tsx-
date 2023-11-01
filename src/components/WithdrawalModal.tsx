import { AiOutlineExclamation } from "react-icons/ai";
import { WithdrawalModalType } from "../types/type";
import { accountDeleteActive } from "../service/user";

export default function WithdrawalModal({
  modalToggle,
  LocalData,
  setUser,
  navigate,
}: WithdrawalModalType) {
  const accountDelete = () => {
    let email = LocalData?.email;
    accountDeleteActive({ email, setUser, navigate });
  };
  return (
    <div className="z-100 absolute top-0 left-0  w-full h-full rounded-2xl bg-black/40 flex">
      <div className="bg-white m-auto w-[90%] h-[50%] rounded-2xl">
        <div className="h-[60%] flex flex-col justify-center items-center">
          <AiOutlineExclamation className="border border-orange-400 rounded-full w-[50px] h-[50px] text-orange-400" />
          <span className="font-bold text-2xl my-4">회원 탈퇴</span>
          <p className="w-[90%] text-center">
            회원 탈퇴 시 사용자 계정의 모든 정보가 삭제됩니다.
          </p>
          <p className="w-[90%] text-center">탈퇴 하시겠습니까?</p>
        </div>
        <div className="h-[40%] flex flex-col justify-center items-center">
          <button
            className="my-2 w-[80%] h-[40px] rounded-lg font-semibold bg-red-400 hover:bg-red-500 text-white duration-200"
            onClick={accountDelete}
          >
            탈퇴
          </button>
          <button
            className="my-2 w-[80%] h-[40px] rounded-lg font-semibold bg-gray-300 hover:bg-gray-400 text-white duration-200"
            onClick={modalToggle}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
