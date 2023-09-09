import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeffrey Ram Pineda",
  description:
    "I'm Jeffrey, a Toronto-based Full-Stack Developer with a strong passion for innovative and creative ideas. Heavily interested in data-centric applications to which machine learning technologies can be applied to.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-shapes">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
