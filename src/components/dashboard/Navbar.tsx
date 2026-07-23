import { useAuth } from "../../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header
      className="
      h-16
      bg-white
      border-b
      flex
      items-center
      justify-between
      px-6
      "
    >
      <h2
        className="
        font-semibold
        text-slate-800
        "
      >
        Internship Dashboard
      </h2>

      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        <span
          className="
          text-sm
          text-slate-600
          "
        >
          {user?.name ?? "Admin"}
        </span>

        <button
          onClick={logout}

          className="
          rounded-lg
          bg-red-500
          px-4
          py-2
          text-white
          hover:bg-red-600
          "
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;
