import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/DataContext";

const poppins = Poppins({subsets:['latin'],weight:['400','500','700']});

export const metadata: Metadata = {
  title: "0xNunana | Zippy",
  description: "Courier Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DataProvider>
  <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
    </DataProvider>
  
  );
}
