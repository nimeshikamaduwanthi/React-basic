import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";

const userContext = React.createContext();

const UserProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  return (
    <userContext.Provider value={{ githubUser }}>
      {children}
    </userContext.Provider>
  );
};

export { UserProvider, userContext };
