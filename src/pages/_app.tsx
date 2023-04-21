import { Navbar } from "@/components/Navbar/Navbar";
import Footer from "../components/Footer";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
