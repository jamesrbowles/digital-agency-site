'use client';

import { usePathname, useRouter } from 'next/navigation';
import { createContext, useState, useContext, ChangeEvent } from 'react';

interface ContextProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  handleCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const GeneralContext = createContext<ContextProps | undefined>(undefined);

type ChildrenProps = {
  children: React.ReactNode;
};

const GeneralProvider = ({ children }: ChildrenProps) => {
  const [category, setCategory] = useState<string>('');

  const router = useRouter();
  const pathname = usePathname();

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const chosenCategory = e.target.value;

    setCategory(chosenCategory);

    const queryParams = new URLSearchParams();
    queryParams.set('filter', chosenCategory.toString());

    router.push(`${pathname}?${queryParams.toString()}`);
  };

  return (
    <GeneralContext.Provider
      value={{
        category,
        setCategory,
        handleCategoryChange,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => useContext(GeneralContext);

export default GeneralProvider;
