import { createContext, useState } from "react";

export const userContext = createContext({});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState([]);

  return <userContext.Provider value={{ users, setUsers }}>{children}</userContext.Provider>;
};

export default UserProvider;
