"use client";
import { useFilterContext } from "../../context/filterContext";

type CategoriesProps = {
  categories: {
    label: string;
    value: string;
  }[];
};

export default function Categories({ categories }: CategoriesProps) {
  const { setCategory } = useFilterContext();

  const toggleCategory = (cat: string): void => {
    setCategory((prevCategory) =>
      prevCategory.includes(cat)
        ? prevCategory.filter((item) => item !== cat)
        : [...prevCategory, cat]
    );
  };

  return (
    <div className="border-[1px] border-border px-5">
      <p className="py-4 border-b-[1px] border-border font-bold text-lg">
        Shop By Categories
      </p>
      <ul className="py-2">
        {categories.map((cat) => (
          <li
            className="text-text-secondary rounded-lg hover:bg-background-secondary p-2  py-1 cursor-pointer"
            key={cat.value}
            onClick={() => toggleCategory(cat.value)}
          >
            {cat.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
