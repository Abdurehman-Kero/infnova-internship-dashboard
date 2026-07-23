import { createContext, useContext, useState } from "react";

import type { ReactNode } from "react";

import { authService } from "../services/auth.service";

import { getToken, removeToken, setToken } from "../utils/authStorage";

import type { User } from "../types/auth.types";

interface AuthContextType {
  token: string | null;

  user: User | null;

  isAuthenticated: boolean;

  login: (email: string, password: string) => Promise<void>;

  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setTokenState] = useState<string | null>(getToken());

  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const response = await authService.login({
      email,
      password,
    });

    setToken(response.accessToken);

    setTokenState(response.accessToken);

    setUser(response.user);
  };

  const logout = () => {
    removeToken();

    setTokenState(null);

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,

        user,

        isAuthenticated: Boolean(token),

        login,

        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }

  return context;
}
