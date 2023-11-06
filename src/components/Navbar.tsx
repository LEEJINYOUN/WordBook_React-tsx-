import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getNavbarMenu } from "../hooks/MainNavbarMenu";

export default function Navbar() {
  const pathName = useLocation().pathname;
  const MAIN_NAVBAR_MENU = getNavbarMenu(pathName);

  return (
    <section className="flex w-full h-[10%] rounded-t-2xl">
      {MAIN_NAVBAR_MENU.map((item, key) => (
        <NavLink key={key} className={item.className} to={item.to}>
          {item.title}
        </NavLink>
      ))}
    </section>
  );
}
