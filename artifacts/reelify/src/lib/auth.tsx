import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

const AUTH_TOKEN_KEY = "reelify_auth_token";

interface AuthUser {
  id: string;
  email: string;
  fullName?: string | null;
  avatarUrl?: string | null;
}

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, fullName?: string) => Promise<void>;
  logout: () => void;
  setMockUser: (user: AuthUser, token: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

function generateUUID(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateDemoToken(userId: string): string {
  return `demo-${userId}-${Date.now()}`;
}

function generateDemoUser(email: string, fullName?: string): AuthUser {
  const id = generateUUID();
  return { id, email, fullName: fullName ?? null, avatarUrl: null };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem(AUTH_TOKEN_KEY);
    const storedUser = localStorage.getItem("reelify_user");
    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setToken(storedToken);
        setUser(parsedUser);
      } catch {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        localStorage.removeItem("reelify_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, _password: string): Promise<void> => {
    const demoUser = generateDemoUser(email);
    const demoToken = generateDemoToken(demoUser.id);
    setUser(demoUser);
    setToken(demoToken);
    localStorage.setItem(AUTH_TOKEN_KEY, demoToken);
    localStorage.setItem("reelify_user", JSON.stringify(demoUser));
  };

  const signup = async (email: string, _password: string, fullName?: string): Promise<void> => {
    const demoUser = generateDemoUser(email, fullName);
    const demoToken = generateDemoToken(demoUser.id);
    setUser(demoUser);
    setToken(demoToken);
    localStorage.setItem(AUTH_TOKEN_KEY, demoToken);
    localStorage.setItem("reelify_user", JSON.stringify(demoUser));
  };

  const logout = (): void => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem("reelify_user");
  };

  const setMockUser = (mockUser: AuthUser, mockToken: string): void => {
    setUser(mockUser);
    setToken(mockToken);
    localStorage.setItem(AUTH_TOKEN_KEY, mockToken);
    localStorage.setItem("reelify_user", JSON.stringify(mockUser));
  };

  return (
    <AuthContext.Provider value={{ user, token, isLoading, login, signup, logout, setMockUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function getAuthToken(): string | null {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}
