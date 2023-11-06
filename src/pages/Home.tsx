import { NavLink } from "react-router-dom";
import { HOME_NAVBAR_MENU } from "../constants/HomeNavbarMenu";

export default function Home() {
  return (
    <section className="bg-gray-300 h-[100vh]">
      <div className="bg-white w-[450px] sm:w-[500px] h-[600px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl">
        <main className="h-full flex flex-col">
          {HOME_NAVBAR_MENU.map((item, key) => (
            <NavLink
              key={key}
              className="m-auto w-[80%] h-[70px] flex justify-around items-center rounded-xl font-semibold text-lg text-white bg-lime-500 hover:bg-lime-600"
              to={item.to}
            >
              {item.title}
            </NavLink>
          ))}
        </main>
      </div>
    </section>
  );
}
