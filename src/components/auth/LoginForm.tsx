import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import Button from "../common/Button";

import Input from "../common/Input";

import Card from "../common/Card";

function LoginForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Email and password are required.");

      return;
    }

    try {
      setLoading(true);

      await login({
        email,

        password,
      });

      navigate("/dashboard");
    } catch (error) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <div
        className="
        mb-6
        text-center
        "
      >
        <h1
          className="
          text-3xl
          font-bold
          text-slate-800
          "
        >
          INFNOVA Dashboard
        </h1>

        <p
          className="
          mt-2
          text-slate-500
          "
        >
          Admin Login
        </p>
      </div>

      {error && (
        <div
          className="
            mb-4
            rounded-lg
            bg-red-50
            p-3
            text-sm
            text-red-700
            "
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}

        className="
        space-y-4
        "
      >
      
      

        <Input
          type="email"

          label="Email"

          placeholder="Email address"

          value={email}

          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"

          label="Password"

          placeholder="Password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"

          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Card>
  );
}

export default LoginForm;
