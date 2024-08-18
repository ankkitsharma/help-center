"use client";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface SearchContextType {
  title: string;
  setTitle: (title: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [title, setTitle] = useState<string>("");

  return (
    <SearchContext.Provider value={{ title, setTitle }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
