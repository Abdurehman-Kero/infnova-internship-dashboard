import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

interface NavbarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({ setSidebarOpen }: NavbarProps) {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  return (
    <header
      className="
      sticky
      top-0
      z-20
      flex
      min-h-16
      items-center
      justify-between
      gap-3
      border-b
      border-slate-200
      bg-white/95
      px-3
      backdrop-blur

      sm:px-5

      lg:px-8
      "
    >
      {/* Left Section */}

      <div
        className="
        flex
        min-w-0
        items-center
        gap-2
        sm:gap-3
        "
      >
        {/* Mobile Menu */}

        <button
          onClick={() => setSidebarOpen(true)}

          className="
          rounded-lg
          p-2
          hover:bg-slate-100
          lg:hidden
          "

          aria-label="Open sidebar"
        >
          <Menu size={22} />
        </button>

        <div
          className="
          min-w-0
          "
        >
          <h1
            className="
            truncate
            text-base
            font-bold
            text-slate-800

            sm:text-lg
            "
          >
            Internship Dashboard
          </h1>

          <p
            className="
            hidden
            truncate
            text-xs
            text-slate-500

            sm:block
            sm:text-sm
            "
          >
            Applicant Management System
          </p>
        </div>
      </div>

      {/* Right Section */}

      <div
        className="
        flex
        shrink-0
        items-center
        gap-2

        sm:gap-3
        "
      >
        {/* User Information */}

        <div
          className="
          hidden
          text-right

          md:block
          "
        >
          <p
            className="
            text-sm
            font-semibold
            text-slate-800
            "
          >
            {user?.name ?? "Administrator"}
          </p>

          <p
            className="
            text-xs
            text-slate-500
            "
          >
            {user?.email ?? "admin@infnova.tech"}
          </p>
        </div>

        {/* Avatar */}

        <div
          className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-green-600
          text-sm
          font-bold
          text-white

          sm:h-10
          sm:w-10
          "
        >
          {(user?.name ?? "A").charAt(0).toUpperCase()}
        </div>

        {/* Logout */}

        <button
          onClick={handleLogout}

          className="
          rounded-lg
          bg-red-500
          px-2.5
          py-2
          text-xs
          font-medium
          text-white
          transition

          hover:bg-red-600

          sm:px-4
          sm:text-sm
          "
        >
          <span
            className="
            hidden
            sm:inline
            "
          >
            Logout
          </span>

          <span
            className="
            sm:hidden
            "
          >
            Exit
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
