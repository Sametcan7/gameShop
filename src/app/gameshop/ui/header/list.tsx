import Link from "next/link";

export function List() {
  return (
    <ul className="flex flex-wrap px-4 font-medium justify-center lg:gap-8 gap-3">
      <Link href="/cart">
        <li>Fortnite</li>
      </Link>
      <li>Minecraft</li>
      <li>Sports</li>
      <li>Shooters</li>
      <li>Contact</li>
      <li>Blog</li>
    </ul>
  );
}
