import Categories from "../ui/filter/categories";
import PriceAndKeyword from "../ui/filter/priceAndKeyword";

type FilterProps = {
  categories: {
    label: string;
    value: string;
  }[];
};

export default function Filter({ categories }: FilterProps) {
  return (
    <div className="w-full lg:w-[320px] shrink-0">
      <Categories categories={categories} />
      <PriceAndKeyword />
    </div>
  );
}
