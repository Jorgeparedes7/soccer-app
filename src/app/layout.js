import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soccer Stars - Ultimate Team Builder",
  description: "Build your ultimate soccer team by opening packs and collecting players",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
        style={{ "--sidebar-width": "16rem" }}
      >
        <Sidebar />
        <div className="transition-all duration-300" style={{ paddingLeft: 'var(--sidebar-width)' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
