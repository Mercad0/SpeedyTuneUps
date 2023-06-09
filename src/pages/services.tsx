import { Header } from "@/components/Navbar/Header";

import Head from "next/head";
import Carouseli from "@/components/Carouseli";

// Carouseli with Images
import oilService from "../public/serviceAssets/oilService.png";
import tireService from "../public/serviceAssets/tireService.png";
import onsiteServices from "../public/serviceAssets/onsiteServices.png";
import inspections from "../public/serviceAssets/inspections.png";
import TheService from "@/components/TheService";

const images = [
  { src: onsiteServices, alt: "Onsite Services" },
  { src: inspections, alt: "Inspections" },
  { src: oilService, alt: "Oil Service" },
  { src: tireService, alt: "Tire Service" },
];

export default function services() {
  return (
    <>
      <Head>
        <title>Speedy Tune-Ups Services</title>
        <link rel="icon" href="/SpeedyIcon.svg" />
        <meta
          name="description"
          content="Speedy Tune-ups is your go-to source for fast, reliable, and professional automotive services. We specialize in tune-ups, oil changes, brake services, and more, ensuring your vehicle stays in peak condition. Visit us today for a superior car care experience!"
        />
        <meta
          name="keywords"
          content="speedy tune-ups, automotive services, car maintenance, car repair, tune-ups, oil changes, brake services, vehicle maintenance, auto care"
        />
      </Head>
      <Header title="Services" />
      <Carouseli images={images} />
      <div className="mb-10 mx-2">
        <TheService />
      </div>
    </>
  );
}
