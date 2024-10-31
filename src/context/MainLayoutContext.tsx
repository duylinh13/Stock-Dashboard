import React, { createContext, useState } from "react";

interface MainLayoutContextProps {
  changePageName: (name: string) => void;
}

export const MainLayoutContext = createContext<
  MainLayoutContextProps | undefined
>(undefined);

export const MainLayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pageName, setPageName] = useState<string>("Default Page Name");

  const changePageName = (name: string) => {
    setPageName(name);
  };

  return (
    <MainLayoutContext.Provider value={{ changePageName }}>
      {children}
    </MainLayoutContext.Provider>
  );
};
