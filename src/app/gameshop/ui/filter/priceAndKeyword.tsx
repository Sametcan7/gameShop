"use client";

import { useFilterContext } from "../../context/filterContext";

export default function PriceAndKeyword() {
  const { price, setPrice, setSearchP } = useFilterContext();

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (parseInt(e.target.value) < 0) return;

    const min = e.target.value ? parseInt(e.target.value) : null;
    setPrice([min, price[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (parseInt(e.target.value) < 0) return;

    const max = e.target.value ? parseInt(e.target.value) : null;
    setPrice([price[0], max]);
  };

  console.log(price);
  return (
    <div className="border-[1px] border-border px-5 pb-4">
      <p className="py-4 border-b-[1px] border-border font-bold text-lg">
        Filter By
      </p>
      <div>
        <p className="py-4">Price</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <span>$</span>
            <input
              className="w-full p-2 border-[1px] border-border"
              placeholder="From"
              type="number"
              onChange={handleMinChange}
              min={0}
            />
          </label>
          <label className="flex items-center gap-2">
            <span>$</span>
            <input
              className="w-full p-2 border-[1px] border-border"
              placeholder="To"
              type="number"
              onChange={handleMaxChange}
              min={0}
            />
          </label>
        </div>
      </div>
      <div>
        <p className="py-4">Keyword</p>
        <input
          className="border-[1px] w-full p-2 border-border"
          placeholder="Search"
          onChange={(e) => setSearchP(e.target.value)}
        />
      </div>
    </div>
  );
}
