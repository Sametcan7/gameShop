import type { Metadata } from "next";
import "./globals.css";
import Header from "./gameshop/components/header";
import { CartContextProvider } from "./gameshop/context/cartContext";
import { FilterContextProvider } from "./gameshop/context/filterContext";
import Footer from "./gameshop/components/footer";

export const metadata: Metadata = {
  title: "Game Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en  ">
      <body className="bg-background-primary text-white">
        <FilterContextProvider>
          <CartContextProvider>
            <Header />
            {children}
            <Footer />
          </CartContextProvider>
        </FilterContextProvider>
      </body>
    </html>
  );
}
