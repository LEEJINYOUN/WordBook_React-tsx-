import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Wordbook from "../routes/Wordbook";
import Bookmark from "../routes/Bookmark";
import Board from "../routes/Board";
import Quiz from "../routes/Quiz";
import Profile from "../pages/Profile";
import Navbar from "./Navbar";
import { CssType, UserInfoType } from "../types/type";
import { AuthContext } from "../utils/AuthContext";

export default function RoutesInit() {
  const userContext = useContext(AuthContext);
  const inputMainCss: CssType = `mx-auto px-6 flex justify-center items-center w-[85%] h-[50px] rounded-lg text-base sm:text-lg outline-none`;
  const inputInputCss: CssType = `my-3 border border-gray-300`;
  const localStore = localStorage.getItem("userInfo");
  const LocalData: UserInfoType = localStore && JSON.parse(localStore);
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          userContext.currentUser === null ? (
            <Login
              inputMainCss={inputMainCss}
              inputInputCss={inputInputCss}
              navigate={navigate}
            />
          ) : (
            <Home />
          )
        }
      />
      <Route
        path="/register"
        element={
          <Register
            inputMainCss={inputMainCss}
            inputInputCss={inputInputCss}
            navigate={navigate}
          />
        }
      />
      <Route
        path="/wordbook"
        element={<Wordbook Navbar={Navbar} LocalData={LocalData} />}
      />
      <Route
        path="/bookmark"
        element={<Bookmark Navbar={Navbar} LocalData={LocalData} />}
      />
      <Route
        path="/board"
        element={<Board Navbar={Navbar} LocalData={LocalData} />}
      />
      <Route
        path="/quiz"
        element={
          <Quiz
            Navbar={Navbar}
            LocalData={LocalData}
            inputMainCss={inputMainCss}
            inputInputCss={inputInputCss}
            navigate={navigate}
          />
        }
      />
      <Route
        path="/profile"
        element={<Profile Navbar={Navbar} navigate={navigate} />}
      />
    </Routes>
  );
}
