import React, { createContext, useContext } from "react";

const Context = createContext({});

const GlobalContext = (props: any) => {
  const contextValue = { asdf: "asdf" };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export { Context };

export default GlobalContext;
