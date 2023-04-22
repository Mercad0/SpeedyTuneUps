import Carouseli from "@/components/Carouseli";
import MainScreen from "@/components/MainScreen";
import { Header } from "@/components/Navbar/Header";
import Head from "next/head";
import Link from "next/link";

import commitServices from "../public/mainAssets/commitServices.png";
import inspectionServices from "../public/mainAssets/inspectionServices.png";
import mainServices from "../public/mainAssets/mainServices.png";
import tireService from "../public/serviceAssets/tireService.png";
import careServices from "../public/mainAssets/careServices.png";

const images = [
  { src: commitServices, alt: "We're Commited Photo" },
  { src: inspectionServices, alt: "Inspection Services" },
  { src: mainServices, alt: "General Services" },
  { src: tireService, alt: "Locations" },
  { src: careServices, alt: "Care Services" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Speedy Tune Ups - Mobile Fleet Services </title>
        <meta
          name="description"
          content="Speedy Tune-ups is your go-to source for fast, reliable, and professional automotive services. We specialize in tune-ups, oil changes, brake services, and more, ensuring your vehicle stays in peak condition. Visit us today for a superior car care experience!"
        />
        <meta
          name="keywords"
          content="speedy tune-ups, automotive services, car maintenance, car repair, tune-ups, oil changes, brake services, vehicle maintenance, auto care"
        />
        <link rel="icon" href="/SpeedyIcon.svg" />
      </Head>
      <Header title="Home" />
      <Link href="/services">
        <Carouseli images={images} />
      </Link>
      <MainScreen />
    </>
  );
}
