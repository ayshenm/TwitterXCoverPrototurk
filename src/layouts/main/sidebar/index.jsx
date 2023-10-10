import React from "react";
import Logo from "./logo";
import Menu from "./menu";

export default function SideBar() {
  return (
    <aside className="px-2 w-[275px] min-h-screen">
      <Logo />
      <Menu />
    </aside>
  );
}
