import Head from "next/head";
import { Header } from "../components/Navbar/Header";
import { AboutUs } from "@/components/AboutUs/AboutUs";

export default function About() {
  return (
    <>
      <Head>
        <title>Speedy Tune-Ups About</title>
        <link rel="icon" href="/Svgs/SpeedyIcon.svg" />
      </Head>
      <Header title="About Us" />
      <AboutUs />
    </>
  );
}
