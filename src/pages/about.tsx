import Head from "next/head";
import { Header } from "../components/Navbar/Header";

export default function about() {
  return (
    <>
      <Head>
        <title>Speedy Tune-Ups About</title>
        <link rel="icon" href="/Svgs/SpeedyIcon.svg" />
      </Head>
      <Header title="About Us" />
    </>
  );
}
