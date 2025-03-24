"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Products } from "../types";

type FilterContextProps = {
  children: ReactNode;
};

type FilterContext = {
  filteredData: Products[] | [];
  data: Products[] | undefined;
  setData: Dispatch<SetStateAction<Products[] | undefined>>;
  category: string[];
  setCategory: Dispatch<SetStateAction<string[]>>;
  searchP: string;
  setSearchP: Dispatch<SetStateAction<string>>;
  price: [number | null, number | null];
  setPrice: Dispatch<SetStateAction<[number | null, number | null]>>;
  params: boolean;
};

const FilterContext = createContext<FilterContext | undefined>(undefined);

export function FilterContextProvider({ children }: FilterContextProps) {
  const [data, setData] = useState<Products[] | undefined>(undefined);
  const [params, setParams] = useState(false);
  const [filteredData, setFilteredData] = useState<Products[] | []>([]);
  const [searchP, setSearchP] = useState("");
  const [category, setCategory] = useState<string[]>([]);
  const [price, setPrice] = useState<[number | null, number | null]>([
    null,
    null,
  ]);

  useEffect(() => {
    if (category.length > 0 || price[0] !== null || price[1] !== null) {
      setParams(true);
      const filter = data?.filter((data) => {
        // Anahtar kelimeye göre filtrele
        const isSearchP =
          searchP.length > 0
            ? data.title.toLowerCase().includes(searchP.toLowerCase())
            : true;

        // Kategoriye göre filtrele
        const isCategory =
          category.length > 0 ? category.includes(data.category) : true;

        //  Paraya göre filtrele

        const isPriceValid =
          (price[0] !== null ? data.price >= price[0] : true) &&
          (price[1] !== null ? data.price <= price[1] : true);

        return isSearchP && isCategory && isPriceValid;
      });
      console.log("useefectfilter", filter);

      if (filter && filter.length > 0) {
        setFilteredData(filter);
      } else {
        setFilteredData([]);
      }
    } else {
      setFilteredData([]);
      setParams(false);
    }
  }, [data, searchP, category, price]);

  return (
    <FilterContext.Provider
      value={{
        filteredData,
        data,
        setData,
        category,
        setCategory,
        searchP,
        setSearchP,
        price,
        setPrice,
        params,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) throw Error("Context Have To Use In Context Provider");
  const {
    filteredData,
    data,
    setData,
    category,
    setCategory,
    searchP,
    setSearchP,
    price,
    setPrice,
    params,
  } = context;

  return {
    filteredData,
    data,
    setData,
    category,
    setCategory,
    searchP,
    setSearchP,
    price,
    setPrice,
    params,
  };
}
