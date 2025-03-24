import Link from "next/link";

export function Brand() {
  return (
    <Link href="/">
      <div className="flex py-8 bg-background-primary text-white text-3xl font-bold">
        <p className="text-text-primary">GAME</p>
        <p>SHOP</p>
      </div>
    </Link>
  );
}
