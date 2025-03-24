"use client";
import { Products } from "../types";
import Card from "../ui/card";
import { useFilterContext } from "../context/filterContext";
import { useEffect } from "react";

type CardContainerProps = {
  products: Products[];
};

export default function CardContainer({ products }: CardContainerProps) {
  const { filteredData, setData, params } = useFilterContext();

  useEffect(() => {
    setData(products);
  }, [setData, products]);

  const cards = params ? filteredData : products;

  console.log(cards);

  return (
    <div className="grid  grid-cols-4">
      {cards.length > 0 ? (
        cards.map((prod) => (
          <Card
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
