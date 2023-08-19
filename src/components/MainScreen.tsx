import Link from "next/link";
import React from "react";
import { FaRunning } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiFillCar, AiOutlineAlignRight } from "react-icons/ai";
import GoogleMapComponent from "./GoogleMap";

export default function MainScreen() {
  return (
    <div className="container mx-auto w-full px-4">
      <section className="text-center py-16">
        <h1 className="md:text-4xl text-2xl font-bold mb-4">
          Welcome to Speedy Tune-Up&apos;s
        </h1>
        <p className="md:text-xl text-lg mb-8">
          We&apos;re a complete auto care center geared towards mobile
          maintenance care for your fleet vehicles. We aim for the highest level
          of customer satisfaction, providing ultimate quality and service to
          our customers and our fleet contracts at a guaranteed low cost. Speedy
          Tune-Up&apos;s Fleet Services proudly serves renowned companies like
          Enterprise, Hertz, Avis-Budget, and Sixt Rent-A-Car.
        </p>
        <Link
          href="/about"
          aria-label="Learn about Our history"
          className="w-fit p-4 m-4 rounded-lg duration-300 font-semibold bg-lime-500 text-black hover:bg-lime-600 hover:text-white"
        >
          Learn about Our history
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 text-2xl">
        <div className="text-center">
          <div className="justify-center mb-4 flex gap-1">
            <AiFillCar />
          </div>
          <h2 className="font-bold mb-2">Quality</h2>
          <p>
            Let Speedy Tune Up&apos;s Fleet Services take over your fleet needs.
          </p>
        </div>
        <div className="text-center">
          <div className="justify-center mb-4 flex gap-1">
            <AiOutlineAlignRight />
            <FaRunning />
          </div>
          <h2 className="font-bold mb-2">Fast Turnaround</h2>
          <p>We Service your vehicle efficiently and on schedule.</p>
        </div>
        <div className="text-center">
          <div className="justify-center mb-4 flex gap-1">
            <BiSupport />
          </div>
          <h2 className="font-bold mb-2">Excellent Support</h2>
          <p>
            Our team is always available to help you with any questions or
            concerns.
          </p>
        </div>
      </section>

      <section className=" justify-center my-4 flex">
        <GoogleMapComponent />
      </section>
      <section className="bg-lime-300 text-black text-center py-12 rounded-md flex flex-col">
        <h2 className="text-3xl font-bold mb-2">Need something done?</h2>
        <p className="mb-4 text-lg">
          Click below to check our services and more.
        </p>
        <Link
          href="/services"
          aria-label="Click here to see other services"
          className="w-fit p-4 m-4 rounded-lg duration-300 mx-auto font-semibold bg-lime-500 text-black hover:bg-lime-600 hover:text-white"
        >
          Click here to see other services
        </Link>
      </section>
    </div>
  );
}
