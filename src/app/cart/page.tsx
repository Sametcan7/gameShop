"use client";

import Image from "next/image";
import {
  type Cart,
  CartContext,
  useCartContext,
} from "../gameshop/context/cartContext";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function CartC() {
  const { cart, setCart } = useCartContext();
  console.log(cart);
  return (
    <div className="max-w-[1400px] mx-auto">
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export function Cart({ cart, setCart }: CartContext) {
  return (
    <div>
      <div className="my-4 flex max-lg:flex-col justify-between gap-4">
        <div className="w-full lg:w-[calc(100%-300px)] text-text-color">
          <ul className="rounded-lg border-black">
            {cart.map((pro) => (
              <Order key={pro.id} product={pro} setCart={setCart} />
            ))}
          </ul>
        </div>
        <TotalPrice cart={cart} />
      </div>
    </div>
  );
}

type OrderProps = {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
    amount: number;
  };
  setCart: Dispatch<SetStateAction<Cart[] | []>>;
};
export function Order({ product, setCart }: OrderProps) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    setValue(product.amount);
  }, [product.amount]);

  const handleAmount = (change: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === product.id) {
          return { ...item, amount: item.amount + change };
        }
        return item;
      });

      return updatedCart.filter((item) => item.amount > 0);
    });
  };

  const handleRemove = (id: string) => {
    setCart((prevCart) => {
      return prevCart.filter((cart) => cart.id !== id);
    });
  };

  return (
    <li className="my-2 flex justify-between rounded-lg border-2 border-black bg-primary-color max-sm:flex-col">
      <div className="flex w-full gap-4 rounded-lg p-1 sm:px-4 sm:py-2">
        <div>
          <Image
            className="mx-auto aspect-square rounded-lg"
            src={product.image}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div className="flex w-full flex-col justify-between">
          <p className="font-semibold">{product.title}</p>
          <div className="flex items-center justify-between">
            <div className="flex h-full items-center">
              <button
                onClick={() => handleAmount(-1)}
                className="size-8 cursor-pointer rounded-lg border-[2px] border-black font-bold"
              >
                -
              </button>
              <input
                value={value}
                className="mx-1 cursor-default w-10 bg-white text-black rounded-lg border-none text-center text-primary-color outline-none"
              />
              <button
                onClick={() => handleAmount(+1)}
                className="size-8  cursor-pointer rounded-lg border-[2px] border-black font-bold"
              >
                +
              </button>
            </div>
            <p className="text-2xl font-bold">
              {(product.price * product.amount).toFixed(2)} $
            </p>
          </div>
        </div>
      </div>
      <div className="mx-8 flex items-center max-sm:w-full max-sm:justify-center max-sm:p-4">
        <button onClick={() => handleRemove(product.id)}>remove </button>
      </div>
    </li>
  );
}

type TotalPriceProps = {
  cart: Cart[];
};

export function TotalPrice({ cart }: TotalPriceProps) {
  const totalPrice = cart
    .reduce((ac, cur) => {
      const itemTotal = cur.price * cur.amount;
      return ac + itemTotal;
    }, 0)
    .toFixed(2);

  return (
    <div className="my-2 h-max w-full lg:w-[250px] rounded-lg border-2 border-black bg-primary-color p-4 text-text-color">
      <p className="mb-4 border-b-2 border-middle-color text-lg font-semibold">
        SELECTED PRODUCTS
      </p>
      <p className="text-2xl font-bold">Total: {totalPrice} $</p>
      <Payment />
      <button className="mt-4 w-full rounded-lg border-2 border-black bg-middle-color p-1 text-2xl font-bold">
        Confirm
      </button>
    </div>
  );
}

function Payment() {
  return (
    <div className="top-0 left-0 opacity-50 absolute w-full h-full bg-amber-200"></div>
  );
}
