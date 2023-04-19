import { Header } from "@/components/Navbar/Header";
import { Service } from "@/components/Service";

import Head from "next/head";


export default function services() {
  return (
    <>
      <Head>
        <title>Speedy Tune-Ups Services</title>
        <link rel="icon" href="/SpeedyIcon.svg" />
      </Head>
      <Header title="Services" />
      <div className="mb-10 mx-2">
      <Service />
      </div>
    </>
  );
}
