"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

export type Cart = {
  id: string;
  title: string;
  price: number;
  image: string;
  amount: number;
};

export type CartContext = {
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[] | []>>;
};

type CartContextProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<CartContext | undefined>(undefined);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[] | []>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) throw Error("Context Have To Use In Context Provider");
  const { cart, setCart } = context;

  return { cart, setCart };
}
