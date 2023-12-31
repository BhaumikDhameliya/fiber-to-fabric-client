import ProfileMenu from "./ProfileMenu";
import Menubar from "./Menubar";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 shadow-md">
        <div className="flex items-center gap-1 ">
          <img src="/assets/svg/logo.svg" alt="logo" className="w-6 h-6" />
          <p className="text-sm">Fiber to Fabric</p>
        </div>
        <div className="text-xl">
          <p>Welcome to SONU TEXTILES 2023-2024</p>
        </div>
        <div>
          <ProfileMenu />
        </div>
      </div>
      <Menubar />
    </div>
  );
}

export default Navbar;
