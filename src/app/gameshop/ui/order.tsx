"use client";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { type Cart } from "../context/cartContext";

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
    <li className="my-2 flex justify-between  border-t-2 border-b-2 border-background-secondary bg-primary-color max-sm:flex-col">
      <div className="flex w-full max-sm:flex-col gap-4 rounded-lg p-1 sm:px-4 sm:py-2">
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
          <p className="max-sm:text-center font-semibold">{product.title}</p>
          <div className="flex max-sm:flex-col max-sm:py-4 items-center justify-between">
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
            <div className="text-2xl text-text-primary font-bold">
              <p className="text-center">Price</p>
              {(product.price * product.amount).toFixed(2)} $
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center max-sm:w-full max-sm:justify-center max-sm:p-4">
        <button onClick={() => handleRemove(product.id)}>
          <span className="material-symbols-outlined max-sm:p-2 cursor-pointer p-4 rounded-full bg-text-primary  ">
            delete
          </span>
        </button>
      </div>
    </li>
  );
}
