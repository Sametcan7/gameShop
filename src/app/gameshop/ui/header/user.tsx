import Link from "next/link";
import MyCart from "./myCart";

export default async function User() {
  const user = await fetch("https://api.hyperteknoloji.com.tr/Customer/Get", {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpblR5cGUiOiIxIiwiQ3VzdG9tZXJJRCI6IjE1NTk1MSIsIkZpcnN0TmFtZSI6Ikh5cGVyIiwiTGFzdE5hbWUiOiJ2MiIsIkVtYWlsIjoiZGVtb0BoeXBlci5jb20iLCJDdXN0b21lclR5cGVJRCI6IjIiLCJJc1Jlc2VsbGVyIjoiMSIsIklzQVBJIjoiMSIsIlJlZmVyYW5jZUlEIjoiIiwiUmVnaXN0ZXJEYXRlIjoiMy8yMS8yMDI1IDY6MjI6MjQgUE0iLCJleHAiOjIwNTM3NTUyMzIsImlzcyI6Imh0dHBzOi8vaHlwZXJ0ZWtub2xvamkuY29tLnRyIiwiYXVkIjoiaHR0cHM6Ly9oeXBlcnRla25vbG9qaS5jb20udHIifQ.hK0ZlCjbOrO-dfkJq4anIV5w2ozDGmj-5yyIQhsERLs",
    },
  });

  if (!user.ok) return <div>Error Loading Data</div>;
  const { data } = await user.json();

  return (
    <div className="flex lg:flex-row flex-col max-lg:py-4 items-center gap-4">
      {data ? (
        <div className="text-white text-2xl items-center font-bold flex">
          <div className="pr-2 flex flex-col items-center">
            <div className="text-2xl">
              {data.firstName} {data.lastName}
            </div>
            <span className="text-sm">{data.email}</span>
          </div>
          <p className="text-text-primary  bg-background-secondary rounded-lg  p-2 border-2 border-border">
            ${data.balance}
          </p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <div>
        <Link href="/cart">
          <MyCart />
        </Link>
      </div>
    </div>
  );
}
