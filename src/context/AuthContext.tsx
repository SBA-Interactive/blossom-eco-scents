import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, login as authLogin, register as authRegister, logout as authLogout, getCurrentUser } from "@/lib/auth";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { email: string; password: string; name: string; address: { street: string; city: string; state: string; postalCode: string; country: string } }) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = getCurrentUser();
    setUser(storedUser);
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const loggedInUser = authLogin({ email, password });
    setUser(loggedInUser);
  };

  const register = async (data: { email: string; password: string; name: string; address: { street: string; city: string; state: string; postalCode: string; country: string } }) => {
    const registeredUser = authRegister(data);
    setUser(registeredUser);
  };

  const logout = () => {
    authLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated: !!user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};