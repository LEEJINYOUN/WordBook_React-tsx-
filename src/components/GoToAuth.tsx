import { NavLink } from "react-router-dom";
import { GoToAuthType } from "../types/type";

export default function GoToAuth({ to, text, buttonText }: GoToAuthType) {
  return (
    <>
      <span className="text-base sm:text-lg mx-2">{text}</span>
      <NavLink
        className="text-base sm:text-lg font-bold cursor-pointer text-red-400 duration-200 underline underline-offset-4 hover:text-red-500"
        to={to}
      >
        {buttonText}
      </NavLink>
    </>
  );
}
