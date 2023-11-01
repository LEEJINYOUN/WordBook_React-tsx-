import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../routes/Home";
import Register from "../pages/Register";
import Wordbook from "../routes/Wordbook";
import Bookmark from "../routes/Bookmark";
import Board from "../routes/Board";
import Quiz from "../routes/Quiz";
import Profile from "../routes/Profile";
import Navbar from "./Navbar";
import { CssType, UserInfoType } from "../types/type";
import { useQuery } from "react-query";

export default function RoutesInit() {
  const inputMainCss: CssType = `mx-auto px-6 flex justify-center items-center w-[85%] h-[50px] rounded-lg text-base sm:text-lg outline-none`;
  const inputInputCss: CssType = `my-3 border border-gray-300`;
  const [user, setUser] = useState<UserInfoType | null>(null);
  const localStore = localStorage.getItem("userInfo");
  const LocalData: UserInfoType = localStore && JSON.parse(localStore);
  const getUserInfo = async () => {
    if (localStorage.length !== 0) {
      const localStore = localStorage.getItem("userInfo");
      const getLocalData: UserInfoType = localStore && JSON.parse(localStore);
      setUser(getLocalData);
    }
  };
  const navigate = useNavigate();
  const { data } = useQuery("userInfo", getUserInfo);
  return (
    <Routes>
      <Route
        path="/"
        element={
          user === null ? (
            <Login
              inputMainCss={inputMainCss}
              inputInputCss={inputInputCss}
              setUser={setUser}
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
        element={
          <Profile
            Navbar={Navbar}
            LocalData={LocalData}
            setUser={setUser}
            navigate={navigate}
          />
        }
      />
    </Routes>
  );
}
