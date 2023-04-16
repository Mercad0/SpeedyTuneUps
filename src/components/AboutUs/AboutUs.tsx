import Image from "next/image";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <main className="container mx-auto px-4 md:px-8 py-12">
      <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg">
            Speedy Tune-Up&apos;s Fleet Services is family owned and operated,
            proudly servicing Miami-Dade, Broward and Palm Beach since 2007.
          </p>
          <div className="md:w-96 mx-auto">
            <Image
              width={250}
              height={100}
              priority={true}
              src="/images/frontShopView.jpeg"
              alt="Front View of Shop"
              className="w-fit mx-auto rounded-md shadow-md mt-6"
            />
          </div>
        </div>
        <div className="md:w-80">
          <Image
            width={250}
            height={100}
            priority={true}
            src="/images/whoWeAre.png"
            alt="Who we are"
            className="w-full h-auto rounded-md shadow-md"
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
            <li>Complete Auto Care Center</li>
            <li>Muffler Repair</li>
            <li>Brakes Service</li>
            <li>Oil Service</li>
          </ul>
          <Link
            href="/services"
            aria-label="click here button for more services"
            className="w-fit p-4 m-4 rounded-lg duration-300 font-medium bg-lime-500 text-black hover:bg-lime-600 hover:text-white"
          >
            More services here
          </Link>
        </div>
        <div className="w-fit md:w-2/6 mx-auto">
          <Image
            width={250}
            height={100}
            src="/images/owners.png"
            alt="Owners"
            className="w-full h-auto rounded-md shadow-md max-w-96"
          />
        </div>
      </section>
    </main>
  );
};
