import Profile from "./Profile";
import NavMenu from "./NavMenu";

export default function Sidebar() {
  return (
    <aside className="h-screen w-72 align-middle bg-[#050505] p-12 flex flex-col gap-12 border-r border-neutral-800">
      <Profile />
      <NavMenu />
    </aside>
  );
}
