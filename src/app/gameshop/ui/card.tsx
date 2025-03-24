import Image from "next/image";
import { useCartContext } from "../context/cartContext";

type CardProps = {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Card({ id, title, price, rating, image }: CardProps) {
  const { cart, setCart } = useCartContext();

  console.log(cart);

  const addCart = (
    id: string,
    amount: number,
    title: string,
    price: number,
    image: string
  ) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === id ? { ...item, amount: item.amount + amount } : item
        );
      } else {
        return [...prev, { id, amount, title, price, image }];
      }
    });
  };

  return (
    <div className="p-4 m-2 group border border-border rounded-lg shadow-lg bg-background-primary transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative">
        <div
          onClick={() => addCart(id, 1, title, price, image)}
          className="absolute border-2 border-border cursor-pointer w-2/3 font-bold group-hover:block bg-background-primary p-2 px-6 rounded-lg bottom-2 left-1/2 transform -translate-x-1/2 z-10 transition-all ease-in-out duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 shadow-lg"
        >
          Add To Cart
        </div>

        <Image
          className="rounded-lg aspect-square mx-auto mb-4 transition-all duration-300 group-hover:scale-105"
          width="500"
          height="500"
          alt={title}
          src={image}
        />
      </div>

      <EvaluationScoreStar rating={rating.rate} />

      <div className="text-center mt-4">
        <p className="text-xl font-semibold text-text-primary">{title}</p>
        <p className="text-xl">
          ${price}
          <span className="text-sm text-text-secondary line-through">
            ${Math.floor(price + 10)}
          </span>
        </p>
      </div>
    </div>
  );
}

function EvaluationScoreStar({ rating }: { rating: number }) {
  const star = [...Array(Math.floor(rating))];

  const half = Number(rating.toString().split(".")[1]) > 3;

  return (
    <div className="flex mx-auto my-2 items-center bg-black w-fit rounded-lg px-2">
      {star.map((_, index) => (
        <Star key={index} />
      ))}
      {half && <HalfStar />}
      <p className="pl-2">
        <span className="font-semibold text-yellow-400">{rating}</span>
      </p>
    </div>
  );
}

function Star() {
  return (
    <span className="material-symbols-outlined text-yellow-400">star_rate</span>
  );
}
function HalfStar() {
  return (
    <span className="material-symbols-outlined text-yellow-400">
      star_rate_half
    </span>
  );
}
