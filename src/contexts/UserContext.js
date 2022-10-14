import { createContext, useState } from "react";

const UserContext = createContext();

const UserStorage = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [userLinks, setUserLinks] = useState([]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, userLinks, setUserLinks }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserStorage };
