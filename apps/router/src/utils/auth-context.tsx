import AsyncStorage from "@react-native-async-storage/async-storage";
import { SplashScreen, useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";

type AuthState = {
  isLoggedIn: boolean;
  isReady: boolean;
  login: () => void;
  logout: () => void;
};

void SplashScreen.preventAutoHideAsync();

export const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  isReady: false,
  login: () => {
    console.warn("login not implemented");
  },
  logout: () => {
    console.warn("logout not implemented");
  },
});

const AUTH_STATE_KEY = "authState";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  const storageAuthState = async ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    try {
      const authState = JSON.stringify({ isLoggedIn });
      await AsyncStorage.setItem(AUTH_STATE_KEY, authState);
    } catch (error) {
      console.error("Error storing auth state:", error);
    }
  };

  const login = async () => {
    setIsLoggedIn(true);
    await storageAuthState({ isLoggedIn: true });
    router.replace("/");
  };

  const logout = async () => {
    setIsLoggedIn(false);
    await storageAuthState({ isLoggedIn: false });
    router.push("/login");
  };

  useEffect(() => {
    const fetchAuthState = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
        const authState = await AsyncStorage.getItem(AUTH_STATE_KEY);
        if (authState) {
          const { isLoggedIn } = JSON.parse(authState);
          setIsLoggedIn(isLoggedIn);
        }
      } catch (error) {
        console.error("Error fetching auth state:", error);
      } finally {
        setIsReady(true);
      }
    };

    void fetchAuthState();
  }, []);

  useEffect(() => {
    if (isReady) {
      void SplashScreen.hideAsync();
    }
  }, [isReady]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isReady, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
