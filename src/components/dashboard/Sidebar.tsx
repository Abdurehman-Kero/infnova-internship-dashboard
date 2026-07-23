import { NavLink } from "react-router-dom";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Applicants",
      path: "/applicants",
    },
  ];

  return (
    <aside
      className={`
        fixed
        top-0
        left-0
        z-40
        h-screen
        w-64
        bg-slate-900
        text-white
        shadow-xl
        transform
        transition-transform
        duration-300
        ease-in-out

        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}

        lg:translate-x-0
      `}
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-slate-800
          px-6
          py-5
        "
      >
        <div>
          <h1 className="text-xl font-bold">INFNOVA</h1>

          <p className="text-xs text-slate-400">Admin Dashboard</p>
        </div>

        {/* Mobile Close */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="
            rounded-lg
            p-2
            hover:bg-slate-800
            lg:hidden
          "
        >
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-2 px-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `
                rounded-xl
                px-4
                py-3
                font-medium
                transition-all
                duration-200

                ${
                  isActive
                    ? "bg-green-600 text-white shadow"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              `
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div
        className="
          absolute
          bottom-0
          w-full
          border-t
          border-slate-800
          p-5
        "
      >
        <p className="text-xs text-slate-500">INFNOVA Technologies</p>

        <p className="text-xs text-slate-600">Frontend Challenge 2026</p>
      </div>
    </aside>
  );
}

export default Sidebar;
