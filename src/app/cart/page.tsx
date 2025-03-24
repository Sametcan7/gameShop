"use client";
import { useCartContext } from "../gameshop/context/cartContext";
import TotalPrice from "../gameshop/ui/totalPrice";
import { Order } from "../gameshop/ui/order";
import { Dispatch, SetStateAction } from "react";

type Cart = {
  id: string;
  title: string;
  price: number;
  image: string;
  amount: number;
};

type CartContext = {
  cart: Cart[];
  setCart: Dispatch<SetStateAction<Cart[] | []>>;
};

export default function CartC() {
  const { cart, setCart } = useCartContext();
  return (
    <div className="max-w-[1400px] min-h-screen mx-auto">
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export function Cart({ cart, setCart }: CartContext) {
  return (
    <div>
      <div className="my-4 flex max-lg:flex-col justify-between gap-4">
        <div className="w-full max-lg:px-4 lg:w-[calc(100%-300px)] text-text-color">
          {cart.length > 0 ? (
            <ul className="rounded-lg border-black">
              {cart.map((pro) => (
                <Order key={pro.id} product={pro} setCart={setCart} />
              ))}
            </ul>
          ) : (
            <div className="text-center font-bold text-text-primary">
              Cart is empty
            </div>
          )}
        </div>
        {cart.length > 0 && <TotalPrice cart={cart} />}
      </div>
    </div>
  );
}
