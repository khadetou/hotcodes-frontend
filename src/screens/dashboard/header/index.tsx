import Help from "@/components/dashboard/header/Help";
import Notifications from "@/components/dashboard/header/Notification";
import SearchModal from "@/components/dashboard/header/SearchModal";
import UserMenu from "@/components/dashboard/header/UserMenue";
import Lang from "@/components/dashboard/Lang";
import { useTypedSelector } from "@/hooks/useTypeSelector";
import SearchIcon from "@/icons/search-icon";
import { FC, useState } from "react";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}
const Header: FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const { isAuthenticated, user } = useTypedSelector(
    (state) => state.authReducer
  );
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <button
              className={`w-8 h-8 flex items-center justify-center bg-white shadow-shadow-sm text-gray hover:text-dark-pink hover:bg-pink-transparent transition duration-150 rounded-full ml-3 ${
                searchModalOpen && "bg-slate-200"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSearchModalOpen(true);
              }}
              aria-controls="search-modal"
            >
              <span className="sr-only">Search</span>
              <SearchIcon />
            </button>

            <SearchModal
              id="search-modal"
              searchId="search"
              modalOpen={searchModalOpen}
              setModalOpen={setSearchModalOpen}
            />
            <Notifications />
            <Help />
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu isAuthenticated={isAuthenticated} user={user} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
