import { Route, Routes } from "react-router-dom";
import Profile from "./routes/Profile";
import Quiz from "./routes/Quiz";
import Bookmark from "./routes/Bookmark";
import Wordbook from "./routes/Wordbook";
import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";

export type cssType = string;

const App: React.FC = () => {
  const inputMainCss: cssType = `mx-auto px-6 flex justify-center items-center w-[85%] h-[50px] rounded-lg text-base sm:text-lg outline-none`;
  const inputInputCss: cssType = `my-3 border border-gray-300`;
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login inputMainCss={inputMainCss} inputInputCss={inputInputCss} />
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
        <Route path="/wordbook" element={<Wordbook />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
