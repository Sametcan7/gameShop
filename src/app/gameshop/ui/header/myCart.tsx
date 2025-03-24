"use client";

import { useCartContext } from "../../context/cartContext";

export default function MyCart() {
  const { cart } = useCartContext();

  return (
    <div className="relative  text-text-secondary flex items-center text-xl font-bold gap-0.5">
      <span className="">My Cart</span>
      <span className="material-symbols-outlined">shopping_cart</span>

      {cart.length > 0 && (
        <p className="flex items-center">
          <span className="text-text-primary bg-background-secondary border-border p-4 border-2 flex size-6 items-center justify-center rounded-full bg-middle-color">
            {cart.length}
          </span>
        </p>
      )}
    </div>
  );
}
