import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./routes/Profile";
import Quiz from "./routes/Quiz";
import Bookmark from "./routes/Bookmark";
import Wordbook from "./routes/Wordbook";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Navbar from "./components/Navbar";

export type cssType = string;
export type navbarType = any;
export type userInfoType = {
  id: string;
  email: string;
  nickname: string;
  name: string;
};

const App: React.FC = () => {
  const inputMainCss: cssType = `mx-auto px-6 flex justify-center items-center w-[85%] h-[50px] rounded-lg text-base sm:text-lg outline-none`;
  const inputInputCss: cssType = `my-3 border border-gray-300`;
  const [user, setUser] = useState<userInfoType | null>(null);
  useEffect(() => {
    if (localStorage.length !== 0) {
      const localStore = localStorage.getItem("userInfo");
      const getLocalData: userInfoType = localStore && JSON.parse(localStore);
      setUser(getLocalData);
    }
  }, [setUser]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              inputMainCss={inputMainCss}
              inputInputCss={inputInputCss}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              inputMainCss={inputMainCss}
              inputInputCss={inputInputCss}
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/wordbook" element={<Wordbook Navbar={Navbar} />} />
        <Route path="/bookmark" element={<Bookmark Navbar={Navbar} />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              Navbar={Navbar}
              inputMainCss={inputMainCss}
              inputInputCss={inputInputCss}
            />
          }
        />
        <Route path="/profile" element={<Profile Navbar={Navbar} />} />
      </Routes>
    </>
  );
};

export default App;
