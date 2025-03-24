import CardContainer from "./gameshop/components/cardContainer";
import Filter from "./gameshop/components/filter";
import { Products } from "./gameshop/types";
import Banner from "./gameshop/ui/banner";

export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products");

  if (!data.ok) {
    return <div>Loading</div>;
  }
  const products: Products[] = await data.json();

  const categories = [...new Set(products.map((item) => item.category))].map(
    (category) => ({
      label: category
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      value: category,
    })
  );

  return (
    <div>
      <Banner />
      <div className="max-w-[1400px] gap-4 mx-auto mt-8 flex">
        <Filter categories={categories} />
        <CardContainer products={products} />
      </div>
    </div>
  );
}
