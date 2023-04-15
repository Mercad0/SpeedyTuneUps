import { Header } from "@/components/Navbar/Header";
import Head from "next/head";

export default function gallery() {
  return (
    <div>
      <Head>
        <title>Speedy Tune-Ups Gallery </title>
        <link rel="icon" href="/Svgs/SpeedyIcon.svg" />
      </Head>
      <Header title="Gallery" />
    </div>
  );
}
