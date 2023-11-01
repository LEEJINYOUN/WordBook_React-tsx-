import { createContext, useState, useEffect } from "react";
import {
  AuthContextProviderType,
  AuthContextType,
  AuthUserInfoType,
} from "../types/type";

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [currentUser, setCurrentUser] = useState<AuthUserInfoType | null>(null);

  useEffect(() => {
    if (localStorage.length !== 0) {
      const localStore = localStorage.getItem("userInfo");
      const getLocalData: AuthUserInfoType =
        localStore && JSON.parse(localStore);
      setCurrentUser(getLocalData);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
