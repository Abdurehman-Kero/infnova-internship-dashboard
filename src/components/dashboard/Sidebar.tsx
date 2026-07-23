import { NavLink } from "react-router-dom";

function Sidebar() {
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
      className="
      hidden
      md:flex
      w-64
      min-h-screen
      bg-slate-900
      text-white
      flex-col
      p-5
      "
    >
      <div
        className="
        text-2xl
        font-bold
        mb-10
        "
      >
        INFNOVA
      </div>

      <nav className="space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.path}

            to={link.path}

            className={({ isActive }) =>
              `
                block
                rounded-lg
                px-4
                py-3
                transition

                ${isActive ? "bg-green-600" : "hover:bg-slate-800"}

                `
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
