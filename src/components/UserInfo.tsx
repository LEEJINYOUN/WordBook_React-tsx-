import React from "react";

export default function UserInfo() {
  return (
    <div className=" w-full py-2">
      <div className="flex text-lg font-semibold">
        <span className="w-[30%] py-2 text-center">이메일</span>
        <span className="w-[70%] py-2"></span>
      </div>
      <div className="flex text-lg font-semibold">
        <span className="w-[30%] py-2 text-center">이름</span>
        <span className="w-[70%] py-2"></span>
      </div>
      <div className="flex text-lg font-semibold">
        <span className="w-[30%] py-2 text-center">닉네임</span>
        <span className="w-[70%] py-2"></span>
      </div>
    </div>
  );
}
