import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const { employeeData } = getLocalStorage();
    setUserData(employeeData);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
