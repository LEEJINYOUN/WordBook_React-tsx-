import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Wordbook from "../pages/Wordbook";
import Bookmark from "../pages/Bookmark";
import Board from "../pages/Board";
import Quiz from "../pages/Quiz";
import Profile from "../pages/Profile";
import { CssType } from "../types/type";
import { AuthContext } from "../utils/AuthContext";

export default function RoutesInit() {
  const userContext = useContext(AuthContext);
  const inputMainCss: CssType = `mx-auto px-6 flex justify-center items-center w-[85%] h-[50px] rounded-lg text-base sm:text-lg outline-none`;
  const inputInputCss: CssType = `my-3 border border-gray-300`;
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
      <Route path="/wordbook" element={<Wordbook />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/board" element={<Board />} />
      <Route
        path="/quiz"
        element={
          <Quiz
            inputMainCss={inputMainCss}
            inputInputCss={inputInputCss}
            navigate={navigate}
          />
        }
      />
      <Route path="/profile" element={<Profile navigate={navigate} />} />
    </Routes>
  );
}
