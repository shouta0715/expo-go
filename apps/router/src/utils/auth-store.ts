import { getItem, setItem, deleteItemAsync } from "expo-secure-store";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type UseState = {
  isLoggedIn: boolean;
  shouldCreateAccount: boolean;
  hasCompletedOnboarding: boolean;
  isVip: boolean;
  logIn: () => void;
  logOut: () => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  logInAsVip: () => void;
};

export const useAuthStore = create(
  persist<UseState>(
    (set) => ({
      isLoggedIn: false,
      shouldCreateAccount: false,
      hasCompletedOnboarding: false,
      isVip: false,
      logIn: () => set((state) => ({ ...state, isLoggedIn: true })),
      logOut: () =>
        set((state) => ({ ...state, isLoggedIn: false, isVip: false })),
      logInAsVip: () =>
        set((state) => ({ ...state, isLoggedIn: true, isVip: true })),
      completeOnboarding: () =>
        set((state) => ({ ...state, hasCompletedOnboarding: true })),
      resetOnboarding: () =>
        set((state) => ({ ...state, hasCompletedOnboarding: false })),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => ({
        getItem,
        setItem,
        removeItem: deleteItemAsync,
      })),
    },
  ),
);
