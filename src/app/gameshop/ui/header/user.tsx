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
    <>
      {data ? (
        <div className="text-white flex">
          <p className="pr-2">
            {data.firstName} {data.lastName}
          </p>
          <p>${data.balance}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
