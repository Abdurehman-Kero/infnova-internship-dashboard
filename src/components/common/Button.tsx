import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  variant?: "primary" | "secondary" | "danger";
}

function Button({
  children,
  loading = false,
  variant = "primary",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

    secondary:
      "bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-400",

    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${
        loading || disabled ? "cursor-not-allowed opacity-60" : ""
      } ${className}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

export default Button;
