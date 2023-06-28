import { create } from "zustand";
import { ViewType } from "@supabase/auth-ui-shared";

interface AuthModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isSignIn: ViewType;
  onSignup: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  isSignIn: "sign_in",
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, isSignIn: "sign_in" }),
  onSignup: () => set({ isSignIn: "sign_up" }),
}));

export default useAuthModal;
