import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import RightBar from "./rightbar";

export default function MainLayout() {
  return (
    <div className="w-[1265px] mx-auto flex">
      <SideBar />
      <main className="flex-1 flex gap-[30px]">
        <main className="max-w-[600px] flex-1 border-x border-[#2f2f5f]">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  );
}
