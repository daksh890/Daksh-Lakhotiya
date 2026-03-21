import type { ReactNode } from "react";
import { Dancing_Script, Poppins } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "500"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Daksh Lakhotiya",
  description: "Portfolio of Daksh Lakhotiya — Developer, Leader, Innovator.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
