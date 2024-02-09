import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leonardo Q.",
  description: "This is my Web Page!",
  icons: {
    icon: "/images/letter-l.png",
  }
};

type rootInterface = { children: React.ReactNode };

export default function RootLayout({ children }: rootInterface) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
