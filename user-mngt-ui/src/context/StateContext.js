import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
    role: ""
  });
  const [responseUser, setResponseUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
    role: ""
  });

  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        loading,
        setLoading,
        isOpen,
        setIsOpen,
        user,
        setUser,
        responseUser,
        setResponseUser
      }}
    >
      { children }
    </Context.Provider>
  );
}

export const useStateContext = () => useContext(Context);