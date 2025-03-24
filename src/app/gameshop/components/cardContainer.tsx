"use client";
import { Products } from "../types";
import Card from "../ui/card";
import { useFilterContext } from "../context/filterContext";
import { memo, useEffect } from "react";

type CardContainerProps = {
  products: Products[];
};

const Carda = memo(Card);

export default function CardContainer({ products }: CardContainerProps) {
  const { filteredData, setData, params } = useFilterContext();

  useEffect(() => {
    setData(products);
  }, [setData, products]);

  const cards = params ? filteredData : products;

  return (
    <div className="grid xl:grid-cols-4 max-sm:px-8 max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 ">
      {cards.length > 0 ? (
        cards.map((prod) => (
          <Carda
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            rating={prod.rating}
            image={prod.image}
          />
        ))
      ) : (
        <div className="text-center">No Products Found</div>
      )}
    </div>
  );
}
