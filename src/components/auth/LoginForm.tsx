import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";

import { loginSchema } from "../../schemas/auth.schema";

import type { LoginFormData } from "../../schemas/auth.schema";

import { useAuth } from "../../hooks/useAuth";

function LoginForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [serverError, setServerError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),

    mode: "onSubmit",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setServerError("");

      await login(data.email, data.password);

      navigate("/dashboard");
    } catch (error: any) {
      if (error.response?.status === 401) {
        setServerError("Invalid email or password.");
      } else if (!error.response) {
        setServerError("Network error. Please check your internet connection.");
      } else {
        setServerError("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <Card className="max-w-md">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>

        <p className="mt-2 text-sm text-slate-500">
          Sign in to manage internship applicants
        </p>
      </div>

      {serverError && (
        <div
          className="
            mb-5
            rounded-lg
            border
            border-red-200
            bg-red-50
            p-3
            text-sm
            text-red-700
            "
        >
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          id="email"

          label="Email Address"

          type="email"

          placeholder="admin@infnova.tech"

          autoComplete="email"

          {...register("email")}

          error={errors.email?.message}
        />

        <Input
          id="password"

          label="Password"

          type="password"

          placeholder="Enter your password"

          autoComplete="current-password"

          {...register("password")}

          error={errors.password?.message}
        />

        <Button
          type="submit"

          loading={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </Card>
  );
}

export default LoginForm;
