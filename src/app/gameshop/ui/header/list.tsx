import Link from "next/link";

export function List() {
  return (
    <ul className="flex font-medium gap-8">
      <Link href="/cart">
        <li>Fortnite</li>
        <li>Minecraft</li>
        <li>Sports</li>
        <li>Shooters</li>
        <li>Contact</li>
        <li>Blog</li>
      </Link>
    </ul>
  );
}
