import { useSearchParams } from "react-router-dom";

import LoginForm from "../../components/auth/LoginForm";

function LoginPage() {
  const [searchParams] = useSearchParams();

  const sessionExpired = searchParams.get("session") === "expired";

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-100
      px-4
      "
    >
      <div
        className="
        w-full
        max-w-md
        "
      >
        {sessionExpired && (
          <div
            className="
              mb-5
              rounded-lg
              bg-yellow-50
              p-4
              text-sm
              text-yellow-700
              "
          >
            Your session has expired. Please login again.
          </div>
        )}

        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
