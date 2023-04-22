import { ContactUs } from "./Contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 pt-4 mt-[2rem] max-w-screen-2xl w-full">
      <div className="flex md:flex-row flex-col justify-center">
        <ContactUs
          contacts={[
            {
              mainTitle: "Contact",
              name: "Manuel Falcon ",
              position: "Director of Operations - Owner",
              email: "speedytuneups@yahoo.com",
            },
            {
              name: "Elizabeth Cordero",
              position: "Director of Marketing - Owner",
              email: "speedytuneups@yahoo.com",
            },
            {
              name: "Yoel Cordero",
              position: "West Palm Location - Owner",
              email: "speedytuneupswestpalm@yahoo.com",
            },
            {
              name: "Vivi C.",
              position: "Director of Billing & Receivables WPB",
              email: "speedytuneupswestpalm@yahoo.com",
            },
          ]}
        />
        <ContactUs
          contacts={[
            {
              mainTitle: "Locations",
              name: "Headquarter",
              phoneNumber: "(305) 644-4409",
              address: "130 NW 22nd Avenue in Miami, FL 33125",
            },
            {
              name: "Speedy West Palm",
              phoneNumber: "(561) 512-7338",
              address: "1705 Donna Road, Unit #6 in WPB, FL 33409 ",
            },
            {
              name: "Speedy Emergency Services",
              phoneNumber: "(305) 726-4554",
            },
          ]}
        />
      </div>
      <p className="md:text-base text-sm font-bold text-center bg-gray-300 py-6">
        Copyright &copy; {currentYear} Speedy Tune Up&apos;s Fleet Services
      </p>
    </footer>
  );
}
