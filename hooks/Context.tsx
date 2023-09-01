'use client';

import { createContext, useState, useContext } from 'react';

interface ContextProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const GeneralContext = createContext<ContextProps | undefined>(undefined);

type ChildrenProps = {
  children: React.ReactNode;
};

const GeneralProvider = ({ children }: ChildrenProps) => {
  const [category, setCategory] = useState<string>('All Categories');

  return (
    <GeneralContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => useContext(GeneralContext);

export default GeneralProvider;
