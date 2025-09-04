import { SideBar } from "../../components/sidebar/sidebar";
import { TopBar } from "../../components/topbar/topbar";
import { Moderators } from "../../screens/moderators";

export default function Home() {
  return (
    <div className="h-[100svh]  bg-[#F8F8F8] p-3">
      <TopBar />
      <div className="h-[calc(100svh-110px)] flex gap-4 max-w-[1492px] mx-auto">
        <SideBar />
        <Moderators />
      </div>
    </div>
  );
}
