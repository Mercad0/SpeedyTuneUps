import Image from "next/image";
import Link from "next/link";

import frontShopView from "../public/assets/frontShopView.png";
import WhoWeAre from "../public/assets/whoWeAre.png";
import owners from "../public/assets/owners.png";
import locations from "../public/assets/locations.png";

export default function AboutUs() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg">
            Speedy Tune-Up&apos;s Fleet Services is family owned and operated,
            proudly servicing Miami-Dade, Broward and Palm Beach since 2007.
          </p>
          <div className="md:w-96 mx-auto">
            <Image
              priority={true}
              placeholder="blur"
              src={frontShopView}
              alt="Front View of Shop"
              className="w-96 mx-auto rounded-md shadow-md mt-6"
            />
          </div>
        </div>
        <div className="w-full md:w-80">
          <Image
            priority={true}
            placeholder="blur"
            src={WhoWeAre}
            alt="Who we are"
            className="mx-auto h-auto rounded-md shadow-md w-96"
          />
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="text-lg">
          We pursue our vision of providing quality care for fleet driven
          companies and evolving the way the world moves. Giving speedy services
          without compromising safety, providing everything for your automotive
          fleet. We want to provide security backed by our insurance which
          exceeds compliance but driven by our family owned and operated moto.
          We strive to continue to customize our vision to include personalized
          service without affecting our customer&apos;s bottom line and hope to
          leave a mark in the standard of fleet care. While maintaining and
          honoring our hard work as a family owned company, our employees feel
          secure that being part of the Speedy family will always have their
          best interest at heart and that will reflect on our services and
          products for years to come.
        </p>
      </section>
      <section className="mt-10">
        <h3 className="text-3xl font-semibold mb-4">Our Expansion</h3>
        <p>
          In 2019, Speedy Fleet Services expanded our services to Palm Beach
          County with the help of our brother, Yoel Cordero. Proudly keeping the
          same quality care we have extended to our current vendors, backed by
          our family owned and operated moto. He brings 15 plus years of
          excellent Auto Maintenance Experience including his certifications in
          Mercedes Benz, Volvo, BMW and Chevy. We are lucky and blessed to have
          him as part of the Speedy Team.
        </p>
      </section>
      <section className="mt-14 w-full flex md:flex-row flex-col">
        <div className="flex flex-col mb-4">
          <h2 className="text-3xl font-semibold mb-4">Services we offer</h2>
          <ul className="list-disc pl-6 text-lg">
            <li>24-hour on-location mobile fleet service **</li>
            <li>Oil Change With Free porter Service ** </li>
            <li>Tire Service</li>
            <li>Brakes Service</li>
            <li>Muffler Repair</li>
            <li>Diesel Extraction and more..</li>
          </ul>
          <Link
            href="/services"
            aria-label="click here button for more services"
            className="w-fit p-4 m-4 rounded-lg duration-300 font-semibold bg-lime-500 text-black hover:bg-lime-600 hover:text-white"
          >
            Click here to see other services
          </Link>
        </div>
        <div className="flex md:w-1/2 w-fit mx-auto md:flex-row flex-col md:gap-10 gap-4">
          <div className="w-fit flex">
            <Image
              placeholder="blur"
              src={owners}
              alt="Owners"
              className="rounded-md shadow-md w-80"
            />
          </div>
          <div className="w-fit flex">
            <Image
              placeholder="blur"
              src={locations}
              alt="locations"
              className="rounded-md shadow-md w-80"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
