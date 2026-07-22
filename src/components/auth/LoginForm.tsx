import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";

import { loginSchema } from "../../schemas/auth.schema";
import type { LoginFormData } from "../../schemas/auth.schema";

import { authService } from "../../services/auth.service";
import { setToken } from "../../utils/authStorage";

function LoginForm() {
  const navigate = useNavigate();

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
      const response = await authService.login(data);

      setToken(response.accessToken);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
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

        <Button type="submit" loading={isSubmitting}>
          Sign In
        </Button>
      </form>
    </Card>
  );
}

export default LoginForm;
