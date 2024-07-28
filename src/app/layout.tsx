import type { Metadata } from "next";
import { Inter, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const pixelify = Pixelify_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixeilfy",
});

export const metadata: Metadata = {
  title: "Playground",
  description: "Playground page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${pixelify.variable}  min-h-screen flex flex-col justify-between gap-10`}
      >
        <NavBar></NavBar>
        {children}
        <footer className="flex  justify-between z-50 text-center fixed bottom-0 w-full">
          <div className="bg-amber-500 flex-1">
            <a href="mailto:jindriskuv@email.cz">jindriskuv@email.cz</a>
          </div>
          <div className=" bg-blue-400 flex-1"> &#169;2024</div>
          <div className=" bg-red-500 flex-1">@Jindrich Habarta</div>
        </footer>
      </body>
    </html>
  );
}
