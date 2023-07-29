import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "./routes/Profile";
import Quiz from "./routes/Quiz";
import Bookmark from "./routes/Bookmark";
import Wordbook from "./routes/Wordbook";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Navbar from "./components/Navbar";
import { useQuery } from "react-query";
import { CssType, UserInfoType } from "./components/TypeAlias";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
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
    <>
      <Routes>
        <Route
          path="/"
          element={
            user === null ? (
              <Login
                inputMainCss={inputMainCss}
                inputInputCss={inputInputCss}
                setUser={setUser}
                navigate={navigate}
              />
            ) : (
              <Home navigate={navigate} />
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
    </>
  );
};

export default App;
