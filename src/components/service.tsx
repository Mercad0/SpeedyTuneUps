import React from "react";
import { ServiceProps } from "./Types";

import Image from "next/image";

import oilService from "../public/assets/oilService.png";
import tireService from "../public/assets/tireService.png";
import onsiteServices from "../public/assets/onsiteServices.png";

export const Service = () => {
  const service = [
    {
      mainTitle: "OnSite Services",
      serviceTitle: "Oil Change Service",
      description:
        "We offer SEMI-SYNTHETIC and FULL-SYNTHETIC oil change options to keep your engine running smoothly.",
    },
    {
      serviceTitle: "Brake Service",
      description:
        "Our brake service includes checking, adjusting, and replacing brake pads and rotors to ensure your vehicle stops safely.",
    },
    {
      serviceTitle: "Tire repair & Service",
      description:
        "We provide tire rotation, balancing, alignment, and replacement ( if needed ).",
    },
    {
      serviceTitle: "Battery Service",
      description:
        "Our battery service includes testing, charging, and replacing car batteries to keep your vehicle running reliably.",
    },
    {
      mainTitle: "General Services",
      serviceTitle: "Transmission Service",
      description:
        "We offer transmission fluid checks and changes, as well as complete transmission repair and replacement services.",
    },
    {
      serviceTitle: "Cooling System Service",
      description:
        "Our cooling system service includes checking and flushing the coolant, as well as inspecting and repairing any leaks or other issues.",
    },
    {
      serviceTitle: "Engine Diagnostic Service",
      description:
        "We use advanced diagnostic tools to identify and address any engine issues, ensuring optimal performance and fuel efficiency.",
    },
    {
      serviceTitle: "Air Conditioning Service",
      description:
        "We offer A/C system checks, refrigerant recharges, and repairs to keep your car's air conditioning working efficiently.",
    },
  ];
  return (
    <div className="h-fit flex flex-col w-full">
      <div className="flex w-full justify-between mt-10">
        <Image
          placeholder="blur"
          src={onsiteServices}
          alt="Owners"
          className="rounded-md shadow-md w-96 h-96"
        />
        <Image
          placeholder="blur"
          src={oilService}
          alt="Owners"
          className="rounded-md shadow-md w-96 hidden md:block"
        />
        <Image
          placeholder="blur"
          src={tireService}
          alt="Owners"
          className="rounded-md shadow-md w-96 hidden md:block"
        />
      </div>
      <div className="md:w-2/3 w-fit">
        <ServiceCard service={service} />
      </div>
    </div>
  );
};

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <div className="">
      {service.map(({ mainTitle, serviceTitle, description }) => (
        <div key={serviceTitle} className="w-full flex flex-col">
          <h2 className="md:text-4xl text-2xl mb-8 mt-12 font-semibold text-red-500">
            {mainTitle}
          </h2>
          <h3 className="md:text-2xl font-bold text-xl mb-2">{serviceTitle}</h3>
          <h4 className="md:text-xl text-lg font-normal">{description}</h4>
        </div>
      ))}
    </div>
  );
};
