import { createContext, useEffect, useState, type ReactNode } from "react";

import { authService } from "../services/auth.service";

import { saveToken, removeToken, getToken } from "../utils/authStorage";

import type { User, LoginRequest } from "../types/auth.types";

interface AuthContextType {
  user: User | null;

  loading: boolean;

  isAuthenticated: boolean;

  login(credentials: LoginRequest): Promise<void>;

  logout(): void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    const token = getToken();

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const login = async (credentials: LoginRequest) => {
    const response = await authService.login(credentials);

    saveToken(response.accessToken);

    localStorage.setItem(
      "user",

      JSON.stringify(response.user),
    );

    setUser(response.user);
  };

  const logout = () => {
    removeToken();

    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,

        loading,

        isAuthenticated: !!user,

        login,

        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
