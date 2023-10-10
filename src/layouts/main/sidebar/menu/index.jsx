import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { MainMenu } from "../../../../utils/const";
// import Button from "../../../../components/button";
import More from "./more";
import New from "./new";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {MainMenu.map((menu, index) => (
        <NavLink key={index} to={menu.path} className="p-[3px] block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "inline-flex gap-5 p-3 items-center rounded-full group-hover:bg-[#eff3f41a] transition-colors",
                {
                  "font-bold": isActive,
                }
              )}>
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center  absolute -top-1.5 -right-1 bg-[#1d9bfa] text-[11px]">
                    {menu?.notification}
                  </span>
                )}
                {!isActive && menu.icon.inactive}
                {isActive && menu.icon.active}
              </div>

              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More/>
      <New/> 
    </nav>
  );
}
