import { useState } from "react";
import { type Cart } from "../context/cartContext";
import Payment from "./payment";

type TotalPriceProps = {
  cart: Cart[];
};

export default function TotalPrice({ cart }: TotalPriceProps) {
  const [open, setOpen] = useState(false);

  const totalPrice = cart
    .reduce((ac, cur) => {
      const itemTotal = cur.price * cur.amount;
      return ac + itemTotal;
    }, 0)
    .toFixed(2);

  return (
    <div className="my-2 h-max w-full lg:w-[250px] rounded-lg border-2 border-text-primary bg-background-secondary p-4 text-text-color">
      {open && <Payment setOpen={setOpen} total={totalPrice} />}
      <p className="mb-4 border-b-2 border-middle-color text-lg font-semibold">
        SELECTED PRODUCTS
      </p>
      <p className="text-2xl font-bold">Total: {totalPrice} $</p>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="mt-4 w-full rounded-lg border-2 cursor-pointer border-text-secondary hover:bg-text-primary bg-middle-color p-1 text-2xl font-bold"
      >
        Confirm
      </button>
    </div>
  );
}
